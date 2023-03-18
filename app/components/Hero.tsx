import React from 'react'
import VideoCard from './VideoCard'

export default function Hero() {
  return (
    <main className='m-3 sm:pl-4 sm:m-0'>
        <div className='flex justify-between mb-4'>
        <h3 className='font-medium text-lg'>Recently Uploaded</h3>
            <a href="_blank" className='underline text-blue-500'>See More</a>
        </div>
        <div className='mb-5 grid grid-cols-1 sm:flex sm:gap-4'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        </div>
        <h3 className='font-medium text-lg mb-4 pl-2'>For You</h3>
        <div className='mb-5 grid grid-cols-1 sm:flex sm:gap-5'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        </div>
        
        
    </main>
  )
}
