'use client'
import { Todo } from '@prisma/client'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import styles from './TodoItem.module.css'

interface Props extends Todo {
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({
  id,
  description,
  complete,
  createdAt,
  updatedAt,
  toggleTodo
}: Props) => {
  return (
    <div className={complete ? styles.todoDone : styles.todoPending}>
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          onClick={() => toggleTodo(id, !complete)}
          className={`flex rounded-md cursor-pointer hover:bg-opacity-60 ${
            complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {complete ? (
            <IoCheckboxOutline size={24} />
          ) : (
            <IoSquareOutline size={24} />
          )}
        </div>
        <p className='text-center sm:text-left leading-none'>{description}</p>
      </div>
    </div>
  )
}
