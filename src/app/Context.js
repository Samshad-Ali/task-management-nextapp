'use client'

import { createContext, useState } from 'react'
export const taskContext = createContext({})

export default function TaskContextProvider({ children }) {
  const savedTasks = localStorage.getItem('all-tasks')
  const ParseSavedData = JSON.parse(savedTasks)
  const [allTask, setAllTask] = useState(ParseSavedData ? ParseSavedData : [])
  const [edit, setEdit] = useState(false)

  return (
    <taskContext.Provider
      value={{
        allTask,
        setAllTask,
        edit,
        setEdit,
      }}
    >
      {children}
    </taskContext.Provider>
  )
}
