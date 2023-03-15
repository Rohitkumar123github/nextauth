import React from 'react'
//for default session TYPE
import { DefaultSession } from 'next-auth'

export default function UserCard({user}:{user: DefaultSession["user"]}) {
    
  return (
    <div>
        <p>Currentuser</p>
        <h5>{user?.name}</h5>
        <p>{user?.email}</p>
    </div>
  )
}
