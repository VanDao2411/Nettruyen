// eslint-disable-next-line no-unused-vars
import React from 'react'
import weekstory from '../../Data/weekstory/weekstory';
import StoryList from '../StoryList/StoryList';
import StoryItem from '../StoryItem/StoryItem';
import Chap from '../Chap/Chap';
import Top from '../Top/Top';


const Top_WeekStory = () => {
    const weekStory = weekstory.map(({ id, name, thumb_url, view, chapter }) => ({ id, name, thumb_url, view, chapter }));
    return (
        <div className="">
            <div className="bg-white shadow-xl h-full ml-[21rem] mr-[10rem]">
                <StoryList />
                <div className="flex gap-8">
                    <div className="left w-[70%]">
                        <h1 className='text-[20px] font-medium text-blue-300 ml-10 pt-5 '>NetTruyen - Web đọc truyện tranh miễn phí mới nhất </h1>
                        <StoryItem />
                        <Chap />
                    </div>
                    <div className="right w-[30%] mt-6">
                        <Top />
                        <div className="mt-10">
                            {weekStory.map((weekStories, index) => {
                                return (<div key={index} className='flex gap-3' >
                                    <h1 className='text-[18px] text-blue-400 mt-5 font-medium'>0{weekStories.id}</h1>
                                    <img className='w-[65px] h-[50px] object-cover ml-3 mb-10' src={weekStories.thumb_url} alt="" />
                                    <div className="w-[15rem]">
                                        <h3 className='text-[13px] truncate ml-3'>{weekStories.name}</h3>
                                        <div className="flex justify-between ml-3 mt-5">
                                            <h4 className='text-[12px]'> Chapter {weekStories.chapter}</h4>
                                            <h5 className='text-[12px]'>{weekStories.view}</h5>
                                        </div>
                                    </div>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top_WeekStory