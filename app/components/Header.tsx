"use client"
import React from 'react'
import { useSession, signOut } from "next-auth/react";
import UserCard from "../UserCard";

export default function Header() {
    //get session from netAuth
    const {data: session} = useSession()
    console.log(session)
  return (
    <div className='flex justify-around py-10'>
        <div className='flex'>
            <div>CompanyLogo</div>
            <div>CompanyName</div>
        </div>
        <div>SearchBar</div>
        <div className='flex items-center justify-center gap-10'>
        
         {/*Pass session info to the server component */}
            <UserCard user={session?.user}/>

        {/*Logout */}
            <button onClick={()=>{
                    signOut({ callbackUrl: 'http://localhost:3000/' })
                    
                    }} type="button" className='bg-blue-800 text-white py-2 px-5 font-bold rounded-sm'>Log Out</button>
               
                
        </div>
    </div>
  )
}
