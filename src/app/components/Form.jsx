import React, { useContext, useEffect, useState } from 'react'
import { taskContext } from '../Context'
import { useParams, useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import * as  yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

// yup schema for validation
const schema = yup.object().shape({
  title: yup.string().required("Title should not be empty"),
  description: yup.string().required('Description should not be empty'),
}).required();

const Form = () => {
  const router = useRouter()
  const { id } = useParams()
  const { edit, setEdit, allTask, setAllTask } = useContext(taskContext)

  // using react-hook-form and yup for validation
  const { handleSubmit, setValue,register,formState:{errors}} = useForm({
    resolver:yupResolver(schema)
  })

  useEffect(()=>{
    if(id){
      const isTask = allTask.find(task=>task.id==id)
      setValue('title',isTask.title)
      setValue('description',isTask.description)
    }
  },[])

  const onSubmit = (data) => {
    const {title,description} = data;
    if (id) {
          try {
            const updatedTask = allTask.map((task) => {
              if (task.id == id) {
                return {
                  ...task,
                  title : title,
                  description: description,
                  isDone: false,
                }
              }
              return task
            })
            setAllTask(updatedTask)
            setEdit(false)
            toast.success('Task updated successfully')
            router.push('/')
          } catch (error) {
            console.log(error)
          }
        } else {
          try {
            let id = randomId()
            let newTask = [...allTask, {title, description, id, isDone: false }]
            setAllTask(newTask)
            toast.success('Task added')
            router.push('/')
          } catch (error) {
            console.log(error)
          }
        }
  };

  // random id generation
  const randomId = () => {
    let id = Math.random()
    return id
  }
  // handle reset btn
  const handleResetBtn = () => {
    if (id) {
      router.push('/')
    }
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full md:w-1/2 flex flex-col gap-2"
    >
      <div className="flex flex-col">
        <label className="font-sans" htmlFor="title">
          Title
        </label>
        <input
          className="placeholder:font-sans placeholder:text-sm outline-none  text-black pl-2 p-1 rounded-sm"
          name="title"
          type="text"
          id="title"
          {
            ...register("title")
          }
          placeholder="Task title"
        />
        { errors?.title && (
          <small className="mt-1 text-red-500 font-sans">
            {errors.title.message}
          </small>
        )}
      </div>
      <div className="flex flex-col ">
        <label className="font-sans" htmlFor="desc">
          Description
        </label>
        <textarea
          className=" placeholder:font-sans placeholder:text-sm outline-none resize-none text-black pl-2 p-1 rounded-sm"
          name="description"
          id="desc"
          cols={10}
          rows={4}
          {...register('description')}
          placeholder="Task description"
        ></textarea>
        { errors?.description && (
          <small className="mt-1 text-red-500 font-sans">
            {errors.description.message}
          </small>
        )}
      </div>
      <div className="flex justify-evenly">
        <input
          className="bg-green-800 duration-100 cursor-pointer transition-all hover:bg-green-900 uppercase font-sans w-fit px-4 py-2 self-center rounded-sm mt-2 font-semibold"
          type="submit"
          value={edit ? 'Save' : 'Submit'}
        />
        <input
          onClick={handleResetBtn}
          type="reset"
          value={'Reset'}
          className="bg-yellow-700 duration-100 cursor-pointer transition-all hover:bg-yellow-800 uppercase font-sans w-fit px-4 py-2 self-center rounded-sm mt-2 font-semibold"
        />
      </div>
    </form>
  )
}

export default Form
