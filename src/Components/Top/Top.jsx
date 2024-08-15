// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link} from 'react-router-dom'

const Top = () => {

    return (
        <div className="">
            <div className="flex cursor-pointer">
                <Link to='/' className="w-[9rem] h-[4rem] bg-white shadow">
                    <h1 className='text-[14px] font-medium text-center mt-3' >Top Tháng</h1>
                </Link>
                <Link to='/top-2' className="w-[9rem] h-[4rem] bg-white shadow">
                    <h1 className='text-[14px] font-medium text-center mt-3'>Top Tuần</h1>
                </Link>
                <Link to='/top-3' className="w-[9rem] h-[4rem] bg-white shadow">
                    <h1 className='text-[14px] font-medium text-center mt-3'>Top Ngày</h1>
                </Link>
            </div>
        </div>
    )
}

export default Top