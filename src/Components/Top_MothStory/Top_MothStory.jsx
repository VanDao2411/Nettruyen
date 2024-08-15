// eslint-disable-next-line no-unused-vars
import React from 'react'
import mothstory from '../../Data/monthstory/mothstory';

const Top_MothStory = () => {
     const mothStory = mothstory.map(({ id, name,thumb_url,view,chapter  }) => ({ id, name, thumb_url ,view,chapter }));
  return (
    <div className="mt-10">
        {mothStory.map((mothStories,index)=> {
            return ( <div key={index} className='flex gap-3' >
                <h1 className='text-[18px] text-blue-400 mt-5 font-medium'>0{mothStories.id}</h1>
                <img className='w-[65px] h-[50px] object-cover ml-3 mb-10' src={mothStories.thumb_url} alt="" />
                <div className="w-[15rem]">
                    <h3 className='text-[13px] truncate ml-3'>{mothStories.name}</h3>
                    <div className="flex justify-between ml-3 mt-5">
                        <h4 className='text-[12px]'> Chapter {mothStories.chapter}</h4>
                        <h5 className='text-[12px] '>{mothStories.view}</h5>
                    </div>
                </div>
            </div>
            )
        })}
    </div>
  )
}

export default Top_MothStory