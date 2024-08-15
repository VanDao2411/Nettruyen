// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import person_black from '../../assets/person_black.png'
import wifi from '../../assets/wifi.png'
import category from '../../assets/category.png'
import star_yell from '../../assets/star_yell.png'
import star from '../../assets/star.png'
import tim from '../../assets/tim.png'
import noi_dung from '../../assets/noi_dung.png'
import list from '../../assets/list.png'
import arrow_drop from '../../assets/arrow_drop.png'
const Story_detail = () => {
    const { slug } = useParams();
    const [data, setData] = useState(null);
    const [limit] = useState(2);
    const [limit_chap, setLimit_Chap] = useState(15)
    const navigate = useNavigate();
    useEffect( () => {
        // Gọi API để lấy dữ liệu
        fetch(`https://otruyenapi.com/v1/api/truyen-tranh/${slug}`)
            .then(response =>  response.json())
            .then(data => setData(data.data))
            .catch(error => console.error('Error fetching data:', error));
        
    }, []);
    
    if (!data) {
        return <div>Loading...</div>;
    }
     const handleChapterClick = (chapter, chapterApiData) => {
    
        navigate(`/truyen-tranh/${slug}/chuong/${chapter}`, { state: { chapter, chapterApiData, data } });  // Thay vì history.push
    };
    return (
        <div className='bg-white shadow-xl w-[100rem] h-full ml-[19rem] mr-[10rem]">'>
            <div className="left w-[60%]">
                <h2 className='text-black font-semibold text-[28px] text-center pt-10 ml-3 line-clamp-1'> {data.item.name}</h2>
                <div className="flex gap-10 mt-10 ml-10">
                    <img src={`https://img.otruyenapi.com/uploads/comics/${data.item.thumb_url}`} alt={data.item.name} />

                    <div className="">
                        <div className='flex gap-2'>
                            <img className='w-10 h-10' src={person_black} alt="" />
                            <span className='text-[16px] font-medium text-slate-400'>
                                Tác giả
                            </span>
                            <p className='text-[16px]  font-medium ml-[5rem] text-slate-400'>{data.item.author.join(', ')}</p>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <img className='w-10 h-10' src={wifi} alt="" />
                            <span className='text-[16px] font-medium text-slate-400'>Tình trạng</span>
                        </div>
                        <div className=" flex gap-2 mt-5">
                            <img className='w-10 h-10 ' src={category} alt="" />
                            <h2 className='text-[16px]  font-medium  text-slate-400'>Thể loại:</h2>
                            <div className=" ">
                                <ul className='flex gap-3 ml-[5rem]'>
                                    {data.item.category.slice(0, limit).map((category, index) => (
                                        <li className='text-[16px] font-medium  text-blue-500' key={index}>{category.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <h2 className='text-blue-500 font-semibold text-[25px] mt-10'> {data.item.name}</h2>
                        <h3 className='text-[18px]'>Lượt đánh giá</h3>
                        <div className="flex gap-5 mt-5">
                            <img className='w-12 h-12' src={star_yell} alt="" />
                            <img className='w-12 h-12' src={star_yell} alt="" />
                            <img className='w-12 h-12' src={star_yell} alt="" />
                            <img className='w-12 h-12' src={star_yell} alt="" />
                            <img className='w-12 h-12' src={star} alt="" />
                        </div>
                        <div className="">
                            <div className="flex gap-4 bg-red-500 w-[13rem] h-[4rem] rounded-lg mt-5">
                                <img className='w-10 h-10 ml-6 mt-3' src={tim} alt="" />
                                <h4 className='text-[15px] mt-3 text-white font-medium'>Theo dõi</h4>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex gap-4 bg-yellow-500 w-[10rem] h-[4rem] rounded-lg mt-5">
                                <h4 className='text-[15px] ml-5 mt-3 text-white font-medium'>Đọc từ đầu</h4>
                            </div>
                            <div className="flex gap-4 bg-yellow-500 w-[12rem] h-[4rem] rounded-lg mt-5">
                                <h4 className='text-[15px] ml-6 mt-3 text-white font-medium'>Đọc mới nhất</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" flex gap-2 mt-10 ml-8">
                    <img className='w-12 h-12 mt-3' src={noi_dung} alt="" />
                    <h1 className='text-blue-500 text-[28px] line-clamp-1'>NỘI DUNG TRUYỆN {data.item.name} </h1>
                </div>
                <div className="w-[64rem] h-1 bg-blue-600 ml-8 mt-2"></div>
                <div className='ml-10 text-[15px] font-normal mt-6' dangerouslySetInnerHTML={{ __html: data.item.content }} />
                <div className=" flex gap-4 ml-8 mt-7">
                    <img className='w-12 h-12' src={list} alt="" />
                    <h2 className='text-[20px] text-blue-500'>Danh sách chương:</h2>
                </div>
                <div className="w-[64rem] h-1 bg-blue-600 ml-8 mt-2"></div>
                <div className="flex ml-8  gap-[20rem] mt-4">
                    <div className="flex gap-3 ">
                        <h4 className='text-[18px] text-black font-semibold'>Số chương</h4>
                        <img className='w-7 h-7 bg-black rounded-full mt-3' src={arrow_drop} alt="" />
                    </div>
                    <h3 className='text-[18px] font-semibold '>Cập nhật</h3>
                </div>
                <div className=" border border-stone-400 ml-8 mt-5 rounded-md pb-10">
                    <ul className='text-[15px] text-black font-normal mt-5 ml-5'>
                        {data.item.chapters[0].server_data.slice(0, limit_chap).map((chapter, index) => (
                            <li className='' key={index}>
                                {/* <Link to={`/${chapter.og_url}/chuong-${chapter.chapter_name}`} className="">
                                </Link> */}
                               
                                <button
                                    onClick={() => handleChapterClick(chapter.chapter_name,chapter.chapter_api_data)}
                                    className="text-blue-500"
                                >
                                    Chapter {chapter.chapter_name}
                                </button>
                                {/* <a href={`${chapter.chapter_api_data}`} className='cursor-pointer'>{`Chapter ${chapter.chapter_name}`}</a> */}
                            </li>
                        ))}
                    </ul>
                    <div className="border  border-blue-500 text-blue h-[4rem] m-5">
                        <button
                            className=" text-[18px] font-medium ml-[22rem] mt-1 hover:text-blue-400"
                            onClick={() => setLimit_Chap(prevLimit => prevLimit + 1000)}
                        >
                            <span className='text-[20px] font-bold '>+</span> Xem thêm
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Story_detail
