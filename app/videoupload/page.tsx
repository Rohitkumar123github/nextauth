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
        // setSelectedFile(e.target.file[0])
        console.log(e.target.files[0])
    }

    const handleSumbit = async (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        const req = await axios.post("http://localhost:3000/api/fileupload")


    }
    return (
        <div className='container flex'>
            <div className='flex-1 bg-slate-600 hidden sm:block'>Left</div>
            <div className='sm:block sm:flex-[5_5_0%]'>
                <div className='flex flex-col gap-4 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>

                    {/* RightSide Container */}
                    <div className='flex flex-col gap-3' >
                        <div>
                            <label htmlFor="fileUpload" className='bg-slate-200 rounded p-1 mb-1'>Browse</label>
                            <input className="hidden sm:block" id="fileUpload" type="file" multiple accept="video/*" onChange={handleChange} />

                        </div>
                        <h3 className='w-56 mx-auto h-44 bg-slate-700 rounded'>Video Preview</h3>
                    </div>
                    <form onSubmit={handleSumbit}>
                        {/* title block */}
                        <div className='block'>
                            <label htmlFor="title">Title: </label>
                            <input id='title' placeholder='Write something...' onChange={e => setTitle(e.target.value)} />
                        </div>
                        {/* Attachment block */}
                        <div className='flex flex-col'>
                            <label htmlFor="Attachement">Attachment</label>
                            <input id='Attachement' type="file" placeholder='Write something...' />
                        </div>

                        {/* Description block */}
                        <div>
                            <h3>Description</h3>
                            <div className='w-full h-52 bg-yellow-300'>
                                <input className='w-full' type="text" placeholder='@Mentions' />
                                <input className='w-full h-44' type="text" placeholder='Write something...' onChange={e => setDesc(e.target.value)} />
                            </div>


                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}
