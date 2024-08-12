// eslint-disable-next-line no-unused-vars
import React from 'react'
import home from '../../assets/home.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='w-full h-20 bg-slate-200'>
      <ul className=' ml-[22rem] flex gap-2'>
        <Link to="/" className="w-20 h-20 hover:bg-white">
            <img className='w-10 h-10 mt-4 ml-5' src={home} alt="" />
        </Link>
        <Link to={`/hot`} className="w-20 h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-4 text-[15px] font-medium'>HOT</li>
        </Link>
        <div className="w-40 h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-6 text-[15px] font-medium'>THEO DÕI</li>
        </div>
        <div className="w-[70px] h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-3 text-[15px] font-medium' >LỊCH SỬ</li>
        </div>
        <div className="w-[80px] h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-3 text-[15px] font-medium'> THỂ LOẠI</li>
        </div>
        <div className="w-[90px] h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-3 text-[15px] font-medium'>XẾP HẠNG</li>
        </div>
        <div className="w-[100px] h-20 hover:bg-white hover:text-purple-800 ">
            <li className='mt-4 ml-3 text-[15px] font-medium'>TÌM TRUYỆN</li>
        </div>
        <div className="w-[74px] h-20 hover:bg-white hover:text-purple-800">
            <li className='mt-4 ml-2 text-[15px] font-medium'>CON GÁI</li>
        </div>
        <div className="w-[74px] h-20 hover:bg-white hover:text-purple-800">
            <li className='mt-4 ml-2 text-[15px] font-medium'>CON TRAI</li>
        </div>
        <div className="w-[74px] h-20 hover:bg-white hover:text-purple-800">
            <li className='mt-4 ml-2 text-[15px] font-medium'>FANPAGE</li>
        </div>
      </ul>
    </div>
  )
}

export default Navbar
