// 'use client'
//useSession is a react context hook i.e why using 'use client'
// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import UserCard from "../UserCard";
import FileInput from "../components/FileInput";
import Header from "../components/Header";
import Hero from "../components/Hero";


export default function Dashboard(){
    //get session from netAuth
    // const {data: session} = useSession()
    // console.log(session)
    // const router = useRouter()

    //if the user exists -> show a SignOut button and their information
    // if(session){
        return (
            <>  
                {/* <Header/> */}
                <Hero/>
                <FileInput/>
                {/* <h1>Logout</h1>
                <button onClick={()=>{
                    signOut({ callbackUrl: 'http://localhost:3000/' })
                    
                    }} type="button" >Signout Of Google</button>
                {/*Pass session info to the server component */}
                {/* <UserCard user={session?.user}/>  */}
            </>
        )
    }
  //   else{
  //     return (
  //         <>
  //             <button onClick={()=>signIn('google', { callbackUrl: 'http://localhost:3000/dashboard'})} type="button" className="bg-violet-500 p-3 font-bold text-white w-3/4 mx-auto rounded-md hover:bg-zinc-200 hover:text-blue-500 text-2xl mb-5 ease-in-out duration-300">SignIn With Google</button>
  //         </>
  //     )
  // }

    //if a user doesnot exist -> show a SignIn button

  // }