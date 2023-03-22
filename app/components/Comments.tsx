import React from 'react'
import Image from 'next/image'
import DefaultImage from '../utils/images/defaultVideoImage.jpg'
import Vector from '../utils/images/Vector.png'
import Vector1 from '../utils/images/Vector1.png'
import Likes from '../utils/images/thumbsup.png'

export default function Comments() {
    return (
        <div className='flex gap-4 py-2 shadow-xl rounded-md mb-9'>
            <Image className='w-9 h-9 rounded-full mt-2 ml-1' src={DefaultImage} width={34} height={34} alt="profileImage" />
            <div className='flex flex-col gap-1'>
                <div className='flex gap-4'>
                    <h3>Rohit</h3>
                    <h5 className='font-light text-slate-400'>6 months ago</h5>
                </div>
                <div><p className='font-normal'>Great explanation and video! I will watch again to help solidify the learning tips. Thanks.</p></div>
                <div >
                    <span><Image src={Likes} alt='likes' className='inline-block mr-2' /></span>
                    <span className='text-slate-400'>5</span>
                    <span className='ml-8'>Reply</span>
                </div>
            </div>
        </div>
    )
}
