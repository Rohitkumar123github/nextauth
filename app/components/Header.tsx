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
    <nav className='flex justify-between py-3 px-2 items-center sm:py-8 sm:pl-4'>
      {/* LeftSide - Hamberger and Logo  */}
      <div className='flex items-center mr-4'>
        <Image className='text-2xl sm:text-lg sm:mr-6' src={Hamburger} width={34} height={34} alt="hambergermenu" />
        <Image className='hidden sm:block sm:mr-1 sm:text-red-600' src={Logo} width={34} height={34} alt="VideoManager Logo" />
        <h3 className='font-extrabold text-xl text-amber-400 sm:text-2xl sm:font-bold '>Video Manager</h3>
      </div>

      {/* MiddleSide - SearchBar and Icons */}
      <div className='flex items-center z-10 gap-4'>
        <div>
          <input placeholder='Search...' className='left-0 w-96 py-2 px-4 outline-none border-2 border-slate-300 rounded-md hidden sm:block' />
          {/* <Image src={search} width={35} alt="searchIcon" className='absolute right-0 w-12 h-9 z-10 bg-teal-500'/> */}
          {/* <Image src={Rectangle} width={34} height={34} alt="rectangle" className='absolute right-0 w-12 h-12 rounded-full'/> */}
        </div>
        <div className='flex gap-4 sm:ml-10'>
          <Image className='' src={search} width={21} height={21} alt="cloudUploadIcon" />
          <Image src={cloudIcon} width={21} height={21} alt="cloudUploadIcon" />
          <Image src={group} width={21} height={21} alt="cloudUploadIcon" />
        </div>
      </div>

      {/* RightSide - UserInfo and Logout Button */}
      <div className='flex items-center justify-center gap-10'>
        {/*Pass session info to the server component */}
        <UserCard user={session?.user} />

        {/*Logout */}
        <button onClick={(e) => {
          signOut({ callbackUrl: 'http://localhost:3000/' })

        }} type="button" className='bg-blue-800 text-white py-2 px-5 font-bold rounded-sm hidden sm:visible'>Log Out</button>


      </div>
    </nav>

  )
}
