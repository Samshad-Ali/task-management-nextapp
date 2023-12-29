'use client'
import React, { useContext } from 'react'
import SingleTask from './SingleTask'
import { taskContext } from '../Context'

const AllTask = () => {
  const { allTask } = useContext(taskContext)
  return (
    <div className=" flex flex-col flex-wrap gap-4 bg-boxClr shadow-sm shadow-slate-500 rounded-sm p-2 justify-center items-center">
      <h2 className="text-lg font-sans font-bold">All Task</h2>
      {allTask?.length > 0 ? (
        allTask?.map((data) => {
          return <SingleTask key={data.id} data={data} />
        })
      ) : (
        <p className="bg-red-300 p-2 px-4 font-bold text-black">
          No Task yet... Add some Task!
        </p>
      )}
    </div>
  )
}

export default AllTask
