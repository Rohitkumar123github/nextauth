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
                        <div className='bg-gray-100 p-2 font-semibold shadow-lg rounded'>General settings</div>
                        <div className=' bg-black text-white p-2 font-semibold shadow-lg rounded'>Connections</div>
                    </div>

                    {/* div right-right */}
                    <div className='flex-[3_3_0%] ml-4'>
                        <div>Connections</div>

                    </div>
                </div>


            </div >

        </div >
    )
}
