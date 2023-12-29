'use client'
import CreateTask from '@/app/components/CreateTask'
import GoBack from '@/app/components/GoBack'
import React from 'react'
const page = () => {
  return (
    <div className="  w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <GoBack/>
      <CreateTask />
    </div>
  )
}

export default page
