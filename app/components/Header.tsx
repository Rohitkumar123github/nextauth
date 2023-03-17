"use client"
import React from 'react'
import Image from 'next/image';
import Logo from "../utils/images/video.png"
import Hamburger from "../utils/images/hambergermenu.png"
// import search from "../utils/images/searchIcon.png"
import search from "../utils/images/search.png"
import Rectangle from "../utils/images/Rectangle2.png"
import cloudIcon from '../utils/images/cloudIcon.png'
import group from '../utils/images/Group.png'
import { useSession, signOut } from "next-auth/react";
import UserCard from "../UserCard";

export default function Header() {
  //get session from netAuth
  const { data: session } = useSession()
  console.log(session)
  return (
      <nav className='flex justify-around py-10 items-center'>
        <div className='flex items-center gap-4'>
          <Image src={Hamburger} width={34} height={34} alt="hambergermenu"/>
          <Image src={Logo} width={34} height={34} alt="VideoManager Logo"/>
          <h3 className='font-medium text-2xl'>Video Manager</h3>
        </div>
        <div className='flex items-center justify-center relative  z-10 w-96'>
          {/* <input placeholder='Search...' className='absolute left-0 w-96 py-2 px-4 outline-none border-2 border-slate-300 rounded-md'/> */}
          {/* <Image src={search} width={35} alt="searchIcon" className='absolute right-0 w-12 h-9 z-10 bg-teal-500'/> */}
          {/* <Image src={Rectangle} width={34} height={34} alt="rectangle" className='absolute right-0 w-12 h-12 rounded-full'/> */}
          <Image src={search}  width={34} height={34} alt="cloudUploadIcon"/>
          <Image src={cloudIcon}  width={34} height={34} alt="cloudUploadIcon"/>
          <Image src={group}  width={34} height={34} alt="cloudUploadIcon"/>
          
        </div>
        <div>

        </div>

        <div className='flex items-center justify-center gap-10'>



          {/*Pass session info to the server component */}
          <UserCard user={session?.user} />

          {/*Logout */}
          <button onClick={() => {
            signOut({ callbackUrl: 'http://localhost:3000/' })

          }} type="button" className='bg-blue-800 text-white py-2 px-5 font-bold rounded-sm'>Log Out</button>


        </div>
      </nav>

  )
}
