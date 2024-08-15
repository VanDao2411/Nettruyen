// eslint-disable-next-line no-unused-vars
import React from 'react'
import daystory from '../../Data/daystory/daystory';
import Top from '../Top/Top';
import Chap from '../Chap/Chap';
import StoryItem from '../StoryItem/StoryItem';
import StoryList from '../StoryList/StoryList';


const Top_DayStory = () => {
    const dayStory = daystory.map(({ id, name, thumb_url, view, chapter }) => ({ id, name, thumb_url, view, chapter }));
    return (
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
                        {dayStory.map((dayStories, index) => {
                            return (<div key={index} className='flex gap-3' >
                                <h1 className='text-[18px] text-blue-400 mt-5 font-medium'>0{dayStories.id}</h1>
                                <img className='w-[65px] h-[50px] object-cover  ml-3 mb-10' src={dayStories.thumb_url} alt="" />
                                <div className="w-[15rem]">
                                    <h3 className='text-[13px] truncate ml-3'>{dayStories.name}</h3>
                                    <div className="flex justify-between ml-3 mt-5">
                                        <h4 className='text-[12px]'> Chapter {dayStories.chapter}</h4>
                                        <h5 className='text-[12px]'>{dayStories.view}</h5>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Top_DayStory