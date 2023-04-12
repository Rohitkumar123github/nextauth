'use client'
import React from 'react'
import axios from 'axios'

import { useState } from 'react'


export default function VideoUpload() {

    const [selectedFile, setSelectedFile] = useState([])
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // e.preventDefault()
        if (!e.target.files[0]) return;
        setSelectedFile(e.target.file[0])
        // console.log(e.target.files[0])
        // const FileTarget = e.target.files[0]
        // console.log(FileTarget)

        // console.log(e.target.files[0].name)
        // setTitle(e.target.files[0].name)

    }

    const handleSumbit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const req = await axios.post("http://localhost:3000/api/fileupload")


    }
    return (
        <div className='container flex w-5/6 m-auto px-2 rounded-lg'>
            <div className='flex-1 bg-slate-600 hidden sm:block'>Left</div>
            <div className='sm:block sm:flex-[5_5_0%]'>
                <div className='flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

                    {/* RightSide Container */}
                    <div className='flex flex-col gap-3 drop-shadow-md pb-4' >
                        <h3 className='w-56 mx-auto h-44 bg-slate-200 rounded mt-4 p-1'>Video Preview</h3>
                        <div className='container flex mt-2 justify-center items-center '>
                            <label htmlFor="fileUpload" className='bg-slate-200 rounded p-1 mb-1 container flex items-center justify-center w-1/2'>Browse Files</label>
                            <input className="hidden " id="fileUpload" type="file" multiple accept="video/*" onChange={handleChange} />

                        </div>

                    </div>
                    <form onSubmit={handleSumbit} className="px-4">
                        {/* title block */}
                        <div className='block w-full'>
                            <label htmlFor="title">Title : </label>
                            <input
                                id='title'
                                placeholder='Write something...'
                                onChange={e => setTitle(e.target.value)}
                                className="w-11/12 focus:outline-none focus:bg-slate-100  rounded-sm p-2"
                            />
                        </div>
                        {/* Attachment block */}
                        <div className='flex flex-col'>
                            <label htmlFor="Attachement">Attachment</label>
                            <input id='Attachement' type="file" placeholder='Write something...' />
                        </div>

                        {/* Description block */}
                        <div className='py-4'>
                            <h3>Description</h3>
                            <div className='w-full h-52 bg-yellow-300'>
                                <input className='w-full focus:outline-none focus:bg-slate-100  rounded-sm p-2' type="text" placeholder='@Mentions' />
                                <input className='w-full h-10 focus:outline-none focus:bg-slate-100 rounded-sm px-2 placeholder-stone-700' type="text" placeholder='Write something...' onChange={e => setDesc(e.target.value)} />
                            </div>


                        </div>
                        <div className='relative mb-4'>
                            <button type='submit' className='bg-blue-400 py-2 px-4 rounded-lg fixed right-28 top-5'>POST</button>
                        </div>


                    </form>
                </div>
            </div>
        </div>
    )
}
