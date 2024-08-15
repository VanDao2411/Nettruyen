// eslint-disable-next-line no-unused-vars
import React from 'react'
// import StoryList from '../../../Components/StoryList/StoryList'
import StoryItem from '../../../Components/StoryItem/StoryItem'
import Chap from '../../../Components/Chap/Chap'
import StoryList from '../../../Components/StoryList/StoryList'
import Top from '../../../Components/Top/Top'
import Top_MothStory from '../../../Components/Top_MothStory/Top_MothStory'
// import Top_MothStory from '../../../Components/Top_MothStory/Top_MothStory'
// import { Link } from 'react-router-dom'

const Home = () => {
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
          <Top_MothStory/>
        </div>
      </div>

    </div>
  )
}

export default Home