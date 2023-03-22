import Image from 'next/image'
import React from 'react'
import ReactPlayer from 'react-player/lazy'
import DefaultImage from '../utils/images/defaultVideoImage.jpg'
import Vector from '../utils/images/Vector.png'
import Vector1 from '../utils/images/Vector1.png'
import Likes from '../utils/images/thumbsup.png'
import DocumentIcon from '../utils/images/documentIcon.png'
import Comments from '../components/Comments'

export default function VideoPage() {
    return (
        <div className='flex px-2 sm:px-3 sm:pb-4 '>

            {/* div for left container */}
            <div className='flex-[3_3_0%] mr-8 sm:mb-4'>

                {/* div for video player */}
                <div className='bg-teal-500 w-full rounded mb-4'>
                    {/* <ReactPlayer url='https://www.youtube.com/watch?v=ufz-tuhOfLw' /> */}
                    {/* <video autoPlay loop muted style={{ width: '500px', height: '500px' }}>
                        <source src="https://www.youtube.com/watch?v=ufz-tuhOfLw" />
                    </video> */}
                    <Image className='mx-auto w-full rounded-md h-96' width={500} height={350} alt="Video Player" src="https://images.unsplash.com/photo-1521227889351-bf6f5b2e4e37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" />
                </div>

                {/* div for Title  */}
                <div className='flex justify-between p-1'>
                    <h2 className='text-3xl font-bold'>How to use Slack</h2>
                    <div className='flex gap-3 text-lg text-slate-600 items-center'>
                        <button className='bg-slate-200 p-2 rounded-lg'>Share</button>
                        <button className='bg-slate-200 p-2 rounded-lg'>Add to List</button>
                        <Image className='h-9' src={Vector} width={6} height={1} alt="vector" />
                    </div>
                </div>

                {/* div for Username and views */}
                <div className='flex pl-4 mb-4'>
                    <Image className='w-14 h-14 rounded-full' src={DefaultImage} width={34} height={34} alt="profileImage" />
                    <div className='ml-4'>
                        <h2 className='font-semibold'>User Name </h2>
                        <p className='text-slate-400'>Views</p>
                    </div>
                </div>

                {/* div for description  */}
                <div className='p-4 bg-slate-200 w-10/12 mx-auto rounded-lg mb-4'>
                    <h2 className='font-medium mb-3'>Description</h2>
                    <p className='font-light'>“Results will vary. Not all payments are boost-eligible or considered by lenders. Credit Card offers are not available in all states.
                        See website for details.”.Check out Conrad Maldives Rangali Island!.Facebook @conradmaldivesrangaliIsland</p>
                </div>

                {/* div sor sorting option */}
                <div className='flex bg-slate-500 w-fit px-2 py-1 rounded-3xl text-gray-200 mb-4'>
                    <span><Image className='w-6 h-6 object-scale-down' src={Vector1} width={5} height={5} alt="VectorImage" /></span>
                    Sort by
                </div>

                {/* div for  Add comments */}
                <div className='flex gap-4 items-center mb-6'>
                    <Image className='w-10 h-10 rounded-full' src={DefaultImage} width={34} height={34} alt="profileImage" />
                    <div className='w-full'>
                        <input type="text" placeholder='Add a comment' className='w-full mb-1 focus:outline-none' />
                        <hr className='bg-slate-400 w-full h-[1px]' />
                    </div>
                </div>

                {/* div for all comments */}
                <div className='flex gap-4 py-2 shadow-xl rounded-md mb-9'>
                    <Image className='w-9 h-9 rounded-full mt-2  ml-1' src={DefaultImage} width={34} height={34} alt="profileImage" />
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

                {/* resuable component for old comments */}
                <Comments />
                <Comments />
                <Comments />
            </div>

            {/* div for right side contents */}
            <div className='flex-1 w-2/4 mx-auto p-4'>
                <div className='font-bold text-2xl mb-4'>Attachments</div>
                <div className='outline outline-2 outline-slate-300 py-1 rounded-md'>
                    <Image alt="document privew" src={DefaultImage} className="mb-2" />
                    <div className='flex items-center gap-2 pl-2 mb-2'>
                        <span><Image className='w-4 h-4' src={DocumentIcon} alt='documentIcon' /></span>
                        <p>Slack documents</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
