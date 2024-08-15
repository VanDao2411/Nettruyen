// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Top from "../Top/Top";
import Top_MothStory from "../Top_MothStory/Top_MothStory";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const clickedStories = JSON.parse(localStorage.getItem('clickedStories')) || [];
        setHistory(clickedStories);
    }, []);

    return (
        <div className="bg-white shadow-xl h-full ml-[21rem] mr-[10rem]">
            <div className="flex gap-5">
                <div className="left w-[70%]">
                    <h2 className="text-[28px] font-semibold mb-4 text-blue-400 mt-10 ml-10">Lịch sử đọc truyện </h2>
                    <div className="flex justify-center gap-10 cursor-pointer">
                        <h1 className="text-blue-400 text-[20px] font-bold">Từ thiết bị</h1>
                        <h1 className="text-blue-400 text-[18px] mt-2">Theo tài khoản</h1>
                    </div>
                    <div className="w-[60rem] h-1 ml-12 bg-slate-300"></div>
                    <div className="ml-10 mt-10">
                        {history.length === 0 ? (
                            <div className="text-[15px] ml-10 mt-5">Chưa có lịch sử xem nào.</div>
                        ) : (
                            <div className="grid grid-cols-4 gap-2">
                                {history.map((story, index) => (
                                    <div
                                        className="relative mt-3 w-[150px] h-[300px] bg-white-800 rounded-lg"
                                        key={index}
                                    >
                                        <img
                                            className="w-full h-[180px] object-cover"
                                            src={`https://otruyenapi.com/uploads/comics/${story.thumb_url}`}
                                            alt=""
                                        />
                                        <h3 className="font-medium text-[16px] mt-3 line-clamp-2">
                                            {story.name}
                                        </h3>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <div className="right w-[30%] mt-10">
                    <Top/>
                    <Top_MothStory/>
                </div>
            </div>
        </div>
    );
};

export default History;
