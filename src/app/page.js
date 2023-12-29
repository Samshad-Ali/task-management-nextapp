'use client'
import AllTask from './components/AllTask'
import Link from 'next/link'

export default function Home() {
  return (
    <div className=" p-2 w-full min-h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl border-b-2 mt-10">Task Management App</h1>
      <div className="w-full md:w-1/2 gap-4 flex flex-col">
        <div className="flex font-sans justify-evenly items-center">
          <Link
            className="bg-green-800 transition-all hover:bg-green-900 px-4 rounded-sm py-2"
            href={'/createtask'}
          >
            Create Task
          </Link>
        </div>
        {/* all tasks listed here */}
        <AllTask />
      </div>
    </div>
  )
}
