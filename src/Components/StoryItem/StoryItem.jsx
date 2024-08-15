
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, } from "react";
import tim from '../../assets/tim.png'
import mat from '../../assets/mat.png'
import comment from '../../assets/comment.png'
import { Link } from "react-router-dom";

const StoryItem = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://otruyenapi.com/v1/api/danh-sach/truyen-moi?page=3")
            .then((response) => response.json())
            .then((data) => {
                setStories(data.data.items || []);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching stories:", error);
                setLoading(false);
            });
    }, []);
    const handleItemClick = (story) => {
        const clickedStories = JSON.parse(localStorage.getItem('clickedStories')) || [];
        clickedStories.push(story);
        localStorage.setItem('clickedStories', JSON.stringify(clickedStories));
    };
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="story-item ml-10">
            <div className="grid grid-cols-4 gap-2">
                {stories.map((story, index) => {
                    return (<Link to={`/truyen-tranh/${story.slug}`} className="relative mt-3 w-[150px] h-[300px] bg-white-800  rounded-lg" key={index} onClick={() => handleItemClick(story)}>
                        <img className="w-full h-[180px] object-cover" src={`https://otruyenapi.com/uploads/comics/${story.thumb_url}`} alt="" />
                        <div className="absolute flex gap-2 top-[15rem] left-0 w-full bg-black opacity-50 h-[3rem] pl-2">
                            <img className="w-9 h-9 mt-1" src={mat} alt="" />
                            <h4 className="text-[18px] text-white">0</h4>
                            <img className="w-9 h-9 mt-1" src={comment} alt="" />
                            <h4 className="text-[18px] text-white">0</h4>
                            <img className="w-9 h-9 mt-1" src={tim} alt="" />
                            <h4 className="text-[18px] text-white">0</h4>
                        </div>
                        <h3  className=" font-medium text-[16px] mt-3 line-clamp-2">
                            {story.name}
                        </h3>
                        <p className="text-[16px]">
                            Chapter {story.chaptersLatest[0]?.chapter_name}
                        </p>
                    </Link>

                    )
                })}
            </div>
        </div>
    );
};

export default StoryItem;


