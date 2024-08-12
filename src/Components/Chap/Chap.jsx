// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react'
import chevron_left from '../../assets/chevron_left.png'
import chevron_right from '../../assets/chevron_right.png'
import { Link } from 'react-router-dom'
const Chap = () => {

  return (
    <div className='flex ml-[5rem] pb-10'>
        <div className="w-[40px] h-[40px] rounded-md bg-blue-400 ">
           <img className=' w-[40px] h-[40px] pr-1 flex items-center justify-center' src={chevron_left} alt="" />
        </div>
        <Link to='/' className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>1</h4>
        </Link>
        <Link to="/page-2" className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>2</h4>
        </Link>
       
        <Link to='/page-3' className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>3</h4>
        </Link>
        <Link to='/page-4' className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>4</h4>
        </Link>
        <Link to='/page-5' className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>5</h4>
        </Link>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>6</h4>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>7</h4>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>8</h4>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>...</h4>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>523</h4>
        </div>
        <div className="w-[40px] h-[40px] rounded-md border-2 border-black-400">
            <h4 className='text-[18px] font-medium text-center mt-2'>524</h4>
        </div>
         <div className="w-[40px] h-[40px] rounded-md bg-blue-400 ">
           <img className='ml-1 w-[40px] h-[40px] pr-1 flex items-center justify-center' src={chevron_right} alt="" />
        </div>
    </div>
  )
}

export default Chap