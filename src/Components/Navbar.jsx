import React from 'react'
import logo from './../assets/Images/logo.png'
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
    return (
        <div className='w-[100%]'>
            <div className='w-[100%] h-[60px] bg-[#1A73E8] bg-opacity-15 p-[16px]'>
                <div className='flex justify-center items-center gap-[20px]'>
                    <h1 className='text-[#262626] font-[500] text-[16.88px]'>Navigate your ideal career path with tailored expert advice</h1>
                    <span className='text-[17.08px] font-[500] text-[#1A73E8]'>Contact Expert</span>
                </div>
            </div>
            <div className='w-[80%] mx-auto flex pt-[16px] pb-[10px]'>
                <div className='flex flex-start gap-[32px]'>
                    <div className='w-[125px] h-[36.66px]'>
                        <img src={logo} alt="logo" className='w-[100%] h-[100%]'/>
                    </div>
                    <div className='pt-[8px] pb-[8px] pl-[18px] pr-[18px] bg-[#1A73E8] rounded-[6px] flex justify-center items-center gap-[4px] text-white cursor-pointer'>
                        <span className='font-[500] text-[14.88px]'>Courses</span>
                        <span className='w-[10.5px] font-[500]'><MdKeyboardArrowDown /></span>
                    </div>
                </div>
                <div className='flex items-center ml-auto gap-[32px] text-[14.75px] font-[500] text-[#1A202C]'>
                    <span className='cursor-pointer'>Refer & Earn</span>
                    <span className='cursor-pointer'>Resources</span>
                    <span className='cursor-pointer'>About Us</span>
                    <span className='pt-[8px] pb-[8px] pl-[18px] pr-[18px] bg-[#94A3B833] rounded-[6px] text-[15.25px] text-center cursor-pointer'>Login</span>
                    <span className='pt-[8px] pb-[8px] pl-[18px] pr-[18px] bg-[#1A73E8] rounded-[6px] text-[14.75px] text-white text-center cursor-pointer'>Try for free</span>
                </div>
            </div>
        </div>

    )
}

export default Navbar
