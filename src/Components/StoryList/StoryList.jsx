// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import chevron_left from '../../assets/chevron_left.png'
import chevron_right from '../../assets/chevron_right.png'
import { Link } from "react-router-dom";
const StoryList = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);

    const [hoveredCard, setHoveredCard] = useState(null);
    const scrollContainer = useRef(null);

    useEffect(() => {
        fetch("https://otruyenapi.com/v1/api/danh-sach/truyen-moi?page=5")
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
    const handleCardHover = (index) => {
        setHoveredCard(index);
    };

    const scrollLeft = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft -= 1000;
        }
    }

    const scrollRight = () => {
        if (scrollContainer.current) {
            scrollContainer.current.scrollLeft += 1000;
        }
    }

    const handleItemClick = (story) => {
        const clickedStories = JSON.parse(localStorage.getItem('clickedStories')) || [];
        clickedStories.push(story);
        localStorage.setItem('clickedStories', JSON.stringify(clickedStories));
    };

    return (
        <div className="">
            <h2 className=" ml-10 pt-5 text-[28px] text-black font-semibold">
                Truyện Đề Cử
            </h2>
            <div
                className=" flex gap-7 overflow-x-auto scrollbar-hide ml-10 mr-10"
                ref={scrollContainer}
            >
                {stories.map((story, index) => {
                    return (
                        <Link to={`/truyen-tranh/${story.slug}`}
                            key={story._id}
                            className="relative mt-3 w-[180px] h-[230px] bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg flex-shrink-0 "
                            onMouseEnter={() => handleCardHover(index)}
                            onMouseLeave={() => handleCardHover(null)}
                            onClick={() => handleItemClick(story)}
                        >
                            <img
                                className={` cursor-pointer ${hoveredCard === index
                                        ? "transform transition-transform duration-500 ease-in-out scale-125"
                                        : ""
                                    }`}
                                src={`https://otruyenapi.com/uploads/comics/${story.thumb_url}`}
                                alt={story.name}
                            />

                            <div className="absolute bottom-0 left-0 w-full bg-black opacity-70 h-[6rem] pl-2">
                                <h3 className=" font-semibold truncate text-[14px] text-center mt-3">
                                    {story.name}
                                </h3>

                                <p className="text-[14px]">
                                    <strong>Chapter</strong> {story.chaptersLatest[0]?.chapter_name}
                                </p>
                            </div>
                        </Link>
                    );
                })}
                <button className="absolute left-[22rem] mt-[7rem] bg-slate-300 opacity-80 px-1 py-1 rounded-xl hover:scale-125 duration-500" onClick={scrollLeft}>
                    <img className='w-[40px] h-[40px] pr-1 flex items-center justify-center' src={chevron_left} alt="" />
                </button>
                <button className="absolute right-[13rem] mt-[7rem]  bg-slate-300 opacity-80 px-1 py-1 rounded-xl hover:scale-125 duration-500 " onClick={scrollRight}>
                    <img className='w-[40px] h-[40px] pl-1 flex items-center justify-center' src={chevron_right} alt="" />
                </button>
            </div>
        </div>
    );
};

export default StoryList;
