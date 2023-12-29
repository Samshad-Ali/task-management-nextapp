'use client'
import React from 'react'
import CreateTask from '../components/CreateTask'
import GoBack from '../components/GoBack'

const page = () => {
  return (
    <div className="  w-full min-h-screen flex flex-col justify-center items-center gap-4">
      <GoBack/>
      <CreateTask />
    </div>
  )
}

export default page
