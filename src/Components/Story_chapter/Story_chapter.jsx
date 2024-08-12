// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import home_red from '../../assets/home_red.png'
import list_red from '../../assets/list_red.png'
import restar from '../../assets/restar.png'
import chevron_left from '../../assets/chevron_left.png'
import chevron_right from '../../assets/chevron_right.png'
import arrow_drop from '../../assets/arrow_drop.png'
import tim from '../../assets/tim.png'
const Story_chapter = () => {
    const location = useLocation();
    const { slug } = useParams();
    const navigate = useNavigate();
    const { chapterApiData, currentChapter, totalChapters, chapters } = location.state || {}; // Lấy dữ liệu từ state
    const [images, setImages] = useState([]);
    const [comicName, setComicName] = useState('');
    const [chapterName, setChapterName] = useState(''); // State để lưu tên truyện
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchImages = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(chapterApiData);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
           

            // Kiểm tra sự tồn tại của các thuộc tính
            if (data && data.data && data.data.domain_cdn && data.data.item && data.data.item.chapter_image) {
                const { domain_cdn, item } = data.data;
                setComicName(item.comic_name);
                setChapterName(item.chapter_name)// Lưu tên truyện
                const chapterImages = item.chapter_image.map(img => ({
                    url: `${domain_cdn}/${item.chapter_path}/${img.image_file}`,
                    page: img.image_page
                }));
                setImages(chapterImages);
            } else {
                throw new Error('Invalid data structure');
            }
        } catch (error) {
            setError(error.message);
            console.error('Error fetching images:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (chapterApiData) {
            fetchImages();
        }
    }, [chapterApiData]);

      const findChapterData = (chapterNumber) => {
        return chapters.find(chapter => chapter.chapter_name === chapterNumber.toString());
    };

    const handleNextChapter = () => {
        if (currentChapter < totalChapters) {
            const nextChapter = currentChapter + 1;
            const nextChapterData = findChapterData(nextChapter);
            if (nextChapterData) {
                console.log('Navigating to next chapter:', nextChapter);
                navigate(`/truyen-tranh/${slug}/chuong-${images.chapter_name}`, {
                    state: {
                        chapterApiData: nextChapterData.chapter_api_data,
                        currentChapter: nextChapter,
                        totalChapters,
                        chapters
                    },
                    replace: true
                });
            } else {
                console.error('Next chapter data not found');
            }
        }
    };

    const handlePreviousChapter = () => {
        if (currentChapter > 1) {
            const previousChapter = currentChapter - 1;
            const previousChapterData = findChapterData(previousChapter);
            if (previousChapterData) {
                console.log('Navigating to previous chapter:', previousChapter);
                navigate(`/truyen-tranh/${slug}/chuong-${images.chapter_name}`, {
                    state: {
                        chapterApiData: previousChapterData.chapter_api_data,
                        currentChapter: previousChapter,
                        totalChapters,
                        chapters
                    },
                    replace: true
                });
            } else {
                console.error('Previous chapter data not found');
            }
        }
    };


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!images.length) {
        return <div>No images found</div>;
    }

    return (
        <div>
            <div className="">
                <div className="bg-white h-[27rem] w-[97rem] ml-[22rem] m-auto shadow-md">
                    <h1 className='text-[25px] font-bold text-center mt-5'>{comicName}</h1>
                    <h2 className='text-[23px] font-bold text-center'>Chapter - {chapterName}</h2> {/* Hiển thị tên truyện */}
                    <div className="flex gap-4 ml-[37rem] mt-5">
                        <button className='py-3 px-8 bg-green-500 text-[18px] text-white font-medium rounded-xl'>Sever 1</button>
                        <button className='py-3 px-8 bg-blue-500 text-[18px] text-white font-medium rounded-xl'>Sever 2</button>
                    </div>
                    <button className='py-3 px-8 bg-yellow-500 text-[18px] text-white font-medium rounded-xl ml-[42rem] mt-5'>Báo lỗi</button>
                    <div className="flex gap-2 ml-[6rem] mt-5">
                        <img className='w-[5rem] h-[5rem]' src={home_red} alt="" />
                        <img className='w-[5rem] h-[5rem]' src={list_red} alt="" />
                        <img className='w-[5rem] h-[5rem]' src={restar} alt="" />
                        <button onClick={handlePreviousChapter} className='py-3 px-3 bg-red-500 rounded-tl-2xl rounded-bl-2xl'>
                            <img className='w-10 h-10' src={chevron_left} alt="" />
                        </button>
                        <div className=" flex justify-between border border-stone-400 rounded w-[40rem] pt-4">
                            <h2 className='text-[18px] font-semibold ml-4  '>Chapter - {chapterName}</h2>
                            <img className='w-10 h-10 mr-4' src={arrow_drop} alt="" />
                        </div>
                        <button onClick={handleNextChapter} className='py-3 px-3 bg-red-500 rounded-tr-2xl rounded-br-2xl'>
                            <img className='w-10 h-10' src={chevron_right} alt="" />
                        </button>
                        <div className="flex gap-4 bg-red-500 w-[13rem] h-[4rem] rounded-lg mt-5">
                            <img className='w-10 h-10 ml-6 mt-3' src={tim} alt="" />
                            <h4 className='text-[15px] mt-3 text-white font-medium'>Theo dõi</h4>
                        </div>
                    </div>
                </div>
                {images.map((image, index) => {
                    return (
                        <div key={index} className="mb-4">
                            <img src={image.url} alt={`Page ${index + 1}`} className="w-[55rem] h-auto m-auto" />
                        </div>
                    )
                })}
                <div className="flex gap-4 ml-[50rem]">
                    <button
                        onClick={handlePreviousChapter}
                        className='py-3 px-3 bg-red-500 rounded-lg flex gap-1'
                        disabled={currentChapter <= 1} // Vô hiệu hóa nếu là chương đầu tiên
                    >
                        <img className='w-10 h-10' src={chevron_left} alt="" />
                        <h4 className='text-white font-medium text-[16px]'>Chap trước</h4>
                    </button>
                    <button
                        onClick={handleNextChapter}
                        className='py-3 px-3 bg-red-500 rounded-lg flex'
                        disabled={currentChapter >= totalChapters} // Vô hiệu hóa nếu là chương cuối cùng
                    >
                        <h4 className='text-white ml-3 font-medium text-[16px]'>Chap sau</h4>
                        <img className='w-10 h-10' src={chevron_right} alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Story_chapter;





