import React from 'react'
import Image from 'next/image'
import Vector from '../utils/images/Vector.png'
import defaultImage from '../utils/images/defaultVideoImage.jpg'

export default function VideoCard() {
    return (
        <div className='w-[350px] h-[300px]  flex flex-col justify-center relative mx-auto mb-4'>
            <Image src={defaultImage} height={1080} width={1080} alt="image" className='w-[340px] h-[250px] rounded-lg mb-2'/>
            <div className='flex'>
                <div className='mr-3'>
                    <Image src={defaultImage} height={34} width={34} alt="image" className='w-10 h-10 rounded-full' />
                </div>
                <div >
                    <h3 className='font-semibold'>How to use Discord</h3>
                    <h6 className='text-gray-400 text-xs'>Views</h6>
                </div>
                <div className='absolute right-3 bottom-3'>
                    <Image src={Vector} width={6} height={7} alt="svg" className='text-sm'/>
                </div>

            </div>
        </div>
    )
}
