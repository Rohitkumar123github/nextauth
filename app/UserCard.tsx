import React from 'react'
import Link from 'next/link'
//for default session TYPE
import { DefaultSession } from 'next-auth'
import Image from 'next/image'

export default function UserCard({user}:{user: DefaultSession["user"]}) {
    
  return (
    <div className='flex gap-3 items-center justify-center'>
        {/* <p>Currentuser</p> */}
        <h4 className='font-bold'>{user?.name}</h4>
        {/* <p>{user?.email}</p> */}
        
        <Link href={"/dashboard"}>
          <Image src={user?.image || " "} width={34} height={34} alt="userprofile" className='rounded-full'/>
        </Link>
    </div>
  )
}
