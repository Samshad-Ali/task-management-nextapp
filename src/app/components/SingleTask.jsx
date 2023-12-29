'use client'
import { MdDelete } from 'react-icons/md'
import { IoMdCheckboxOutline } from 'react-icons/io'
import { useContext } from 'react'
import { taskContext } from '../Context'
import toast from 'react-hot-toast'
import Link from 'next/link'

const SingleTask = ({ data }) => {
  const { id,title,description ,isDone } = data
  const { allTask, setEdit, setAllTask } = useContext(
    taskContext,
  )
  // handle delete btn
  const handleDeleteBtn = (id) => {
    const filteredData = allTask.filter((data) => data.id !== id)
    setAllTask(filteredData)
    toast.error('Task Deleted')
  }

  // handle complete btn
  const handleCompleteBtn = (id) => {
    setAllTask((previous) => {
      return previous.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: true,
          }
        }
        return task
      })
    })
    toast.success('Task completed')
  }

  // handle edit btn
  const handleEditBtn = (id) => {
    setEdit(true)
  }

  return (
    <div
      className={` w-full md:w-1/2  p-4 flex flex-col rounded-sm ${
        isDone ? 'bg-slate-900' : 'bg-primaryClr'
      }`}
    >
      <h4
        className={` ${
          isDone ? 'line-through' : 'no-underline'
        } font-sans font-bold  text-white bg-opacity-40`}
      >
        {title}
      </h4>
      <p
        className={`${
          isDone ? 'line-through' : 'no-underline'
        } font-sans text-white`}
      >
        {description}
      </p>
      <div className="flex justify-between">
        <button
          className={` ${
            isDone ? 'cursor-not-allowed' : 'cursor-pointer'
          } bg-red-700 duration-100 transition-all hover:bg-red-800 uppercase font-sans w-fit px-2 py-1 self-center rounded-sm mt-2`}
          onClick={() => {
            handleDeleteBtn(id)
          }}
          disabled={isDone}
        >
          <MdDelete />
        </button>

        <Link
          href={`edittask/${id}`}
          className={`
                bg-blue-700 duration-100 transition-all hover:bg-blue-800 uppercase font-sans w-fit px-2 py-1 self-center rounded-sm mt-2`}
          onClick={() => {
            handleEditBtn(id)
          }}
        >
          Edit
        </Link>

        <button
          className={` ${
            isDone
              ? 'bg-yellow-800 text-white'
              : 'border border-yellow-800 text-yellow-800'
          }  duration-100 transition-all uppercase font-sans w-fit px-2 py-1 self-center rounded-sm mt-2`}
          onClick={() => {
            handleCompleteBtn(id)
          }}
        >
          <IoMdCheckboxOutline />
        </button>
      </div>
    </div>
  )
}

export default SingleTask
