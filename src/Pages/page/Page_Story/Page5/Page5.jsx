
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, } from "react";
import tim from '../../../../assets/tim.png'
import mat from '../../../../assets/mat.png'
import comment from '../../../../assets/comment.png'
import Chap from "../../../../Components/Chap/Chap";
import StoryList from "../../../../Components/StoryList/StoryList";
import Top from "../../../../Components/Top/Top";
import Top_MothStory from "../../../../Components/Top_MothStory/Top_MothStory";

const Page5 = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://otruyenapi.com/v1/api/danh-sach/truyen-moi?page=7")
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

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white shadow-xl h-full ml-[21rem] mr-[10rem] ">
            <StoryList/>
            <div className="flex gap-5">

                <div className="left w-[70%]">
                    <h1 className='text-[20px] font-medium text-blue-300 ml-10 pt-5 '>NetTruyen - Web đọc truyện tranh miễn phí mới nhất </h1>
                    <div className="grid grid-cols-4 gap-2 ml-10">
                        {stories.map((story, index) => {
                            return (<div className="relative mt-3 w-[150px] h-[300px] bg-white-800  rounded-lg" key={index}>
                                <img className="w-full h-[180px] object-cover" src={`https://otruyenapi.com/uploads/comics/${story.thumb_url}`} alt="" />
                                <div className="absolute flex gap-2 top-[15rem] left-0 w-full bg-black opacity-50 h-[3rem] pl-2">
                                    <img className="w-9 h-9 mt-1" src={mat} alt="" />
                                    <h4 className="text-[18px] text-white">0</h4>
                                    <img className="w-9 h-9 mt-1" src={comment} alt="" />
                                    <h4 className="text-[18px] text-white">0</h4>
                                    <img className="w-9 h-9 mt-1" src={tim} alt="" />
                                    <h4 className="text-[18px] text-white">0</h4>
                                </div>
                                <h3 className=" font-medium text-[16px] mt-3 line-clamp-2">
                                    {story.name}
                                </h3>
                                <p className="text-[16px]">
                                    Chapter {story.chaptersLatest[0]?.chapter_name}
                                </p>
                            </div>

                            )
                        })}
                    </div>
                    <Chap/>
                </div>
                <div className="right w-[30%]">
                    <Top/>
                    <Top_MothStory/>
                </div>
            </div>
        </div>
    );
};

export default Page5;