'use client'
import { startTransition, useOptimistic } from 'react'
import type { Todo } from '@prisma/client'
import { IoCheckboxOutline, IoSquareOutline } from 'react-icons/io5'
import styles from './TodoItem.module.css'

interface Props {
  todo: Todo
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleTodoOptimistic] = useOptimistic(
    todo,
    (state, newCompletedValue: boolean) => ({
      ...state,
      complete: newCompletedValue
    })
  )

  const onToggleTodo = async () => {
    try {
      startTransition(() => {
        toggleTodoOptimistic(!todoOptimistic.complete)
      })
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
    } catch (error) {
      startTransition(() => {
        toggleTodoOptimistic(!todoOptimistic.complete)
      })
    }
  }

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className='flex flex-col sm:flex-row justify-start items-center gap-4'>
        <div
          // onClick={() =>
          //   toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
          // }
          onClick={onToggleTodo}
          className={`flex rounded-md cursor-pointer hover:bg-opacity-60 ${
            todoOptimistic.complete ? 'bg-blue-100' : 'bg-red-100'
          }`}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={24} />
          ) : (
            <IoSquareOutline size={24} />
          )}
        </div>
        <p className='text-center sm:text-left leading-none'>
          {todoOptimistic.description}
        </p>
      </div>
    </div>
  )
}
