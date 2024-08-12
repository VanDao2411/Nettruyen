/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState, } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import search_black from '../../assets/search_black.png'
import lightbulb from '../../assets/lightbulb.png'
import comment from '../../assets/comment.png'
import person from '../../assets/person.png'
import arrow_drop from '../../assets/arrow_drop.png'
import person_black from '../../assets/person_black.png'
import dang_ky from '../../assets/dang-ky.png'
function Header() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchTerm.trim()) {
            navigate(`/tim-truyen?keyword=${encodeURIComponent(searchTerm)}`);
        }
    };


    return (
        <div className="flex w-full h-[6rem] bg-black font-semibold shadow-2xl">
            <div className="ml-[22rem] mt-6">
                <img
                    className="object-cover cursor-pointer"
                    src="https://nettruyenx.com/assets/images/logo-nettruyen.png"
                    alt="Logo"
                />
            </div>
            <div className="items-center ml-20 hidden sm:flex w-1/3 relative">
                <input
                    type="text"
                    placeholder="Tìm truyện ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <img onClick={handleSearch} className='w-8 h-8 absolute right-2 text-black' src={search_black} alt="" />
            </div>
            <img className='w-10 h-10 mt-7 ml-6' src={lightbulb} alt="" />
            <img className='w-10 h-10 mt-7 ml-6' src={comment} alt="" />
            <div className=" flex gap-1 ml-[12rem] mt-7 relative inline-block" onClick={toggleDropdown} >
                <img className='w-10 h-10' src={person} alt="" />
                <h4 className='text-white font-medium text-[17px]'>Tài khoản</h4>
                <img className='w-10 h-10' src={arrow_drop} alt="" />
                {dropdownOpen && (
                    <div className=" absolute cursor-pointer left-0 top-12 w-[20rem] h-[8rem]  bg-white border border-gray-200 rounded-md shadow-lg">
                        <div className=" h-[50%] flex gap-3  hover:bg-gray-200">
                            <img className='w-10 h-10 mt-5 ml-7' src={person_black} alt="" />
                            <h3 className=' mt-5 text-black font-medium text-[15px]'>Đăng Nhập </h3>
                        </div>
                        <div className=" h-[50%] flex gap-3 hover:bg-gray-200">
                            <img className='w-10 h-10 mt-3 ml-7' src={dang_ky} alt="" />
                            <h3 className=' mt-3 text-black font-medium text-[15px]'>Đăng Ký </h3>
                        </div>
                    </div>
                )}
            </div>
        </div>

    )
}

export default Header