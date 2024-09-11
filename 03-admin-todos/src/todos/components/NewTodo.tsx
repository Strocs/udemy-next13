'use client'

import { useState } from 'react'
import { IoTrashOutline } from 'react-icons/io5'
// import { useRouter } from 'next/navigation'
// import * as todosApi from '../helpers/todos'
import { addTodo, deleteTodos } from '../actions/todo-actions'

export const NewTodo = () => {
  const [description, setDescription] = useState('')

  // const router = useRouter()

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (description.trim() === '') return
    // await todosApi.createTodo(description)
    await addTodo(description)
    setDescription('')
    // router.refresh()
  }

  // const onDeleteTodos = async () => {
  // const { count } = await todosApi.deleteCompleted()
  // if (count === 0) return
  // router.refresh()
  // }

  return (
    <form onSubmit={onSubmit} className='flex w-full pb-6'>
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type='text'
        className='w-6/12 pl-3 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-sky-500 transition-all'
        placeholder='¿Qué necesita ser hecho?'
      />

      <button
        type='submit'
        className='flex items-center justify-center rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all'
      >
        Add
      </button>

      <span className='flex flex-1'></span>

      <button
        onClick={() => deleteTodos()}
        type='button'
        className='flex items-center justify-center rounded ml-2 bg-red-400 px-4 py-2 text-white hover:bg-red-700 transition-all'
      >
        <IoTrashOutline />
        Delete completes
      </button>
    </form>
  )
}
