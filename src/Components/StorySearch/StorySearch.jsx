// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import tim from '../../assets/tim.png'
import mat from '../../assets/mat.png'
import comment from '../../assets/comment.png'
const StorySearch = () => {
        const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const query = new URLSearchParams(useLocation().search);
    const searchTerm = query.get('keyword') || '';

    useEffect(() => {
        const fetchBooks = async () => {
            if (searchTerm.trim() === '') {
                setBooks([]);
                return;
            }
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(`https://otruyenapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(searchTerm)}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data.data.items || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBooks();
    }, [searchTerm]);
    return (
        <div className="bg-white shadow-xl h-full ml-[21rem] mr-[10rem]">
            <div className="left w-[70%] ml-10">
                <h1 className="text-[25px] font-bold pt-4 text-center mb-10"> Truyện tranh {searchTerm} online</h1>
                <div className="border border-stone-400 w-[66rem] h-[5rem] ">
                    <h4 className='text-[18px] pt-4 ml-6'>Tất cả thể loại truyện tranh</h4>
                </div>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}
                {books.length === 0 && !loading && !error && <div>Không tìm thấy truyện nào.</div>}
                <div className="grid grid-cols-4 gap-2 mt-10">
                    {books.map((book, index) => (
                        <div key={index} className="relative mt-3 w-[150px] h-[300px] bg-white-800  rounded-lg">
                            <img className="w-full h-[180px] object-cover" src={`https://otruyenapi.com/uploads/comics/${book.thumb_url}`} alt="" />
                            <div className="absolute flex gap-2 top-[15rem] left-0 w-full bg-black opacity-50 h-[3rem] pl-2">
                                <img className="w-9 h-9 mt-1" src={mat} alt="" />
                                <h4 className="text-[18px] text-white">0</h4>
                                <img className="w-9 h-9 mt-1" src={comment} alt="" />
                                <h4 className="text-[18px] text-white">0</h4>
                                <img className="w-9 h-9 mt-1" src={tim} alt="" />
                                <h4 className="text-[18px] text-white">0</h4>
                            </div>
                            <h3 className=" font-medium text-[16px] mt-3 line-clamp-2">
                                {book.name}
                            </h3>
                            <p className="text-[16px]">
                                Chapter {book.chaptersLatest[0]?.chapter_name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="right">

            </div>
        </div>
    );
};

export default StorySearch;
