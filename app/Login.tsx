'use client'
//useSession is a react context hook i.e why using 'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import UserCard from "./UserCard";


export default function Login(){
    //get session from netAuth
    const {data: session} = useSession()
    console.log(session)
    //for routing to /dashboard if the user is already logged in
    const router = useRouter()

    //if the user exists -> show a SignOut button and their information
    if(session){
        return (
            <>  
             {/* if session present then redirect to dashboard */}
                {router.push("/dashboard")}

            </>
        )
    }else{
        return (
            <>
                {/* <button onClick={()=>signIn('google', { callbackUrl: 'http://localhost:3000/dashboard'})} type="button" className="bg-violet-500 p-3 font-bold text-white w-3/4 mx-auto rounded-md hover:bg-zinc-200 hover:text-blue-500 text-2xl mb-5 ease-in-out duration-300">SignIn With Google</button> */}
                <a href="/api/auth/signin"  className="bg-violet-500 p-3 font-bold text-white w-3/4 mx-auto rounded-md hover:bg-zinc-200 hover:text-blue-500 text-2xl mb-5 ease-in-out duration-300 text-center">SignUp With Google</a>
            </>
        )
    }

    //if a user doesnot exist -> show a SignIn button

}