
import Login from './Login'
import connectDB from './utils/database/database'

export default async function Home() {
  await connectDB()

  return (
    <main className="container min-h-screen bg-gradient-to-r from-red-500 to-orange-500 mx-auto flex flex-col items-center justify-center">
      <div className='bg-white h-52 py-0 w-1/2 rounded-md drop-shadow-2xl flex flex-col justify-center'>
        <h3 className='text-5xl font-extrabold text-center py-5'>Login</h3>
        {/* <Login /> */}
        
      </div>

    </main>
  )
}
