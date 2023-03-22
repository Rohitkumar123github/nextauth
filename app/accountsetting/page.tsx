import Image from 'next/image'
import React from 'react'
import DefaultImage from '../utils/images/defaultVideoImage.jpg'

export default function page() {
    return (
        <div className='flex '>

            {/* left side div */}
            <div className='flex-1 flex flex-col items-center gap-4 pb-4 m-1 '>
                <Image src={DefaultImage} alt="profileImage" className='rounded-full h-52 w-52 mt-8 mb-14' />
                <h2 className='font-semibold cursor-pointer'>Content</h2>
                <h2 className='font-semibold cursor-pointer'>Comment</h2>
                <h2 className='font-semibold cursor-pointer'>Analytics</h2>
                <h2 className='font-semibold cursor-pointer bg-black text-white p-2 shadow-lg w-full text-center rounded'>Account Settings</h2>
            </div>

            {/* div right */}
            <div className='flex-[3_3_0%] flex flex-col '>

                <h2 className='text-2xl pl-8 mb-4 '>Account settings</h2>
                <hr className='h-[2px] bg-gray-300 w-full' />
                <div className='flex  min-h-full mr-4 '>
                    {/* div right-left */}
                    <div className='flex-1 border-x-2 text-center flex flex-col gap-5 pt-8'>
                        <div className='bg-black text-white p-2 font-semibold shadow-lg rounded'>General settings</div>
                        <div className='bg-gray-100 p-2 font-semibold shadow-lg rounded'>Connections</div>
                    </div>

                    {/* div right-right */}
                    <div className='flex-[3_3_0%] ml-4'>
                        <h3 className='pl-16 mt-8 text-2xl font-semibold mb-8 '>My Account</h3>

                        {/* div card */}
                        <div className='bg-neutral-200 w-4/5 mx-auto min-h-80 rounded mb-4'>
                            <div className='flex items-center justify-between p-3 bg-orange-800'>
                                <div className='flex items-center gap-3 rounded'>
                                    <Image className='w-14 h-14 rounded-full' src={DefaultImage} width={34} height={34} alt="profileImage" />
                                    <h3 className='text-white font-semibold'>Rohit #1980</h3>
                                </div>
                                <button className='bg-blue-400 text-white rounded-lg z-10 p-2'>Edit User Profile</button>
                            </div>
                            {/* User details */}
                            <div className=' z-10 flex flex-col gap-4 px-2 py-2'>
                                <hr className='w-11/12 mx-auto' />
                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h3>username</h3>
                                        <button className='bg-blue-500 text-white rounded-lg z-10 py-1 px-2'>Edit</button>
                                    </div>
                                    <div className='bg-slate-300 pl-2'>Rohit</div>
                                </div>
                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h3>Email</h3>
                                        <button className='bg-blue-500 text-white rounded-lg z-10 py-1 px-2'>Edit</button>
                                    </div>
                                    <div className='bg-slate-300 pl-2'>rohit@gmail.com</div>
                                </div>
                                <div >
                                    <div className='flex justify-between items-center'>
                                        <h3>Phone Number</h3>
                                        <button className='bg-blue-500 text-white rounded-lg z-10 py-1 px-2'>Edit</button>
                                    </div>
                                    <div className='bg-slate-300 pl-2'>32483247832</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div >

        </div >
    )
}
