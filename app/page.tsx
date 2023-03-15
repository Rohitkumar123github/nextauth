import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Login from './Login'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="container min-h-screen bg-gradient-to-r from-red-500 to-orange-500 mx-auto flex flex-col items-center justify-center">
      <div className= 'bg-white h-52 py-0 w-1/2 rounded-md drop-shadow-2xl flex flex-col justify-center'>
        <h3 className='text-5xl font-extrabold text-center py-5'>Login</h3>
        <Login/>
      </div>
     
    </main>
  )
}
