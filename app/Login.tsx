'use client'
//useSession is a react context hook i.e why using 'use client'
import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/navigation";
import UserCard from "./UserCard";


export default function Login(){
    //get session from netAuth
    const {data: session} = useSession()
    console.log(session)
    // const router = useRouter()

    //if the user exists -> show a SignOut button and their information
    if(session){
        return (
            <>
                <button onClick={()=>{
                    signOut()
                    
                    }} type="button">Signout Of Google</button>
                {/*Pass session info to the server component */}
                <UserCard user={session?.user}/>
            </>
        )
    }else{
        return (
            <>
                <button onClick={()=>signIn()} type="button">Sign In With Google</button>
            </>
        )
    }

    //if a user doesnot exist -> show a SignIn button

}