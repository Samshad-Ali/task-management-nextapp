'use client'

import React, { useContext, useEffect } from 'react'
import { taskContext } from '../Context'
import Form from './Form'

const CreateTask = () => {
  const {
    allTask,
    setAllTask,
    edit,
  } = useContext(taskContext)  
  useEffect(() => {
    localStorage.setItem('all-tasks', JSON.stringify(allTask))
  }, [allTask])
  return (
    <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-4  shadow-sm shadow-slate-500 bg-boxClr rounded-sm p-2">
      <h2 className="text-lg font-sans">
        {edit ? 'Update Your Task' : 'Create Your Task'}
      </h2>

      <Form
      />
    </div>
  )
}

export default CreateTask
