import React, { useState } from 'react';
import hero from './../assets/Images/hero.png';
import { IoMdClose } from "react-icons/io";

function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [course, setCourse] = useState("");
    const [refName, setRefName] = useState("");
    const [refEmail, setRefEmail] = useState("");

    const openModal = () => {
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden'; // Disable scrolling
    };

    const closeModal = () => {
        setIsModalOpen(false);
        document.body.style.overflow = 'auto'; // Enable scrolling
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const referralData = {
            userName,
            userEmail,
            course,
            refName,
            refEmail
        };

        console.log('Sending data:', referralData);

        try {
            const response = await fetch('https://accredian-backend-u3ng.onrender.com/referral', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(referralData)
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response from server:', responseData);
            } else {
                const responseData = await response.json();
                console.log('Response from server:', responseData);
                console.error('Error is:', response.status);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className='w-[100%] pt-[40px] relative mb-10'>
            <div className='w-[45%] h-[50px] mx-auto flex items-center justify-around bg-[#1A73E81C] rounded-[38px] text-[20px] font-[400] text-[#4B4B4B]'>
                <span className='text-[#1A73E8]'>Refer</span>
                <span>Benefits</span>
                <span>FAQs</span>
                <span>Support</span>
            </div>
            <div className='flex w-[80%] h-[520px] mt-[1.6rem] rounded-[29px] mx-auto justify-around bg-[#EEF5FF]' style={{ boxShadow: '0px 4px 65px 1px rgba(0, 7, 43, 0.21)' }}>
                <div className='w-[38%] flex flex-col mt-[4.8rem] gap-[56px] ml-[1.2rem]'>
                    <span className='text-[70px] font-[700] text-[#1A202C] leading-none'>Let’s Learn & Earn</span>
                    <span className='text-[39px] font-[400] leading-none'>Get a chance to win up-to <span className='text-[54px] font-[700] text-[#1A73E8]'>Rs. 15,000</span></span>
                    <button onClick={openModal} className='w-[192px] h-[54px] text-[20px] text-white bg-[#1A73E8] hover:bg-blue-700 duration-500 font-[400] rounded-[8px] cursor-pointer'>Refer Now</button>
                </div>
                <div className='w-[52%] h-[500px] mt-[1.4rem]'>
                    <img src={hero} alt="heroImg" className='w-[100%] h-[100%] object-cover' />
                </div>
            </div>

            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg shadow-lg w-[90%] md:w-[32%] max-h-[90%]'>
                        <h2 className='text-2xl bg-[#1A73E81C] p-3 mb-2 flex justify-between items-center'>Refer and Earn <button onClick={closeModal} className='text-gray-500 hover:text-[#1A73E8] font-bold ' type='button'>
                            <IoMdClose className='ml-auto'/>
                        </button></h2>

                        <div className='overflow-auto max-h-[75vh] custom-scrollbar'>
                            <form className='pl-6 pr-6 pb-6' onSubmit={handleSubmit}>
                                <span className='text-[20px] font-[500]'>Referrer Info</span>
                                <div className='mb-4 mt-2'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='userName'>
                                        Name
                                    </label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='userName' type='text' placeholder='Your Name' value={userName} onChange={(e) => { setUserName(e.target.value) }}/>
                                </div>
                                <div className='mb-4'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='userEmail'>
                                        Email
                                    </label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='userEmail' type='email' placeholder='Your Email' value={userEmail} onChange={(e) => { setUserEmail(e.target.value) }} />
                                </div>
                                <div className='mb-6'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='course'>
                                        Refer Course
                                    </label>
                                    <div className='relative'>
                                        <select className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white bg-opacity-50' id='course' value={course} onChange={(e) => { setCourse(e.target.value) }}>
                                            <option value=''>Select a course</option>
                                            <option value='Data Science'>Data Science</option>
                                            <option value='Digital Transformation'>Digital Transformation</option>
                                            <option value='Product Management'>Product Management</option>
                                            <option value='Fintech'>Fintech</option>
                                            <option value='Business Analytics'>Business Analytics</option>
                                            <option value='Strategy & Leadership'>Strategy & Leadership</option>
                                        </select>
                                        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
                                            <div className='custom-select-arrow'></div>
                                        </div>
                                    </div>
                                </div>
                                <span className='text-[20px] font-[500] '>Referee Info</span>
                                <div className='mb-4 mt-2'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='refName'>
                                        Name
                                    </label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='refName' type='text' placeholder="Referee's Name" value={refName} onChange={(e) => { setRefName(e.target.value) }} />
                                </div>
                                <div className='mb-6'>
                                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='refEmail'>
                                        Email
                                    </label>
                                    <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='refEmail' type='email' placeholder="Referee's email" value={refEmail} onChange={(e) => { setRefEmail(e.target.value) }} />
                                </div>

                                <div className='flex items-center justify-between'>
                                    <button className='bg-[#1A73E8] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
