import React from 'react'
import VideoCard from './VideoCard'

export default function Hero() {
  return (
    <main className='m-3'>
        <div className='flex justify-between mb-4'>
        <h3 className='font-bold text-lg'>Recently Uploaded</h3>
            <a href="_blank" className='underline'>See More</a>
        </div>
        <div className='mb-5 flex gap-5'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        </div>
        <h3 className='font-bold'>For You</h3>
        <div className='flex gap-5'>
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />

        </div>
        
        
    </main>
  )
}
