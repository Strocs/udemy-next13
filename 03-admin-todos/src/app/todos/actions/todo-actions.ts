'use server'

import prisma from "@/lib/prisma"
import type { Todo } from "@prisma/client"
import { revalidatePath } from "next/cache"


export const sleep = async (seconds: number) => {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000))

}

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {

  await sleep(3)

  const todo = await prisma.todo.findFirst({ where: { id } })
  if (!todo) {
    throw `Todo with id ${id} not found`
  }
  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete }
  })
  revalidatePath('/dashboard/server-todos')
  return updatedTodo
}


export const addTodo = async (description: string): Promise<Todo | { message: string }> => {

  try {
    const newTodo = await prisma.todo.create({
      data: {
        description,
      }
    })
    revalidatePath('/dashboard/server-todos')
    return newTodo;
  } catch (error) {
    return {
      message: `Error creating todo: ${description}`
    }
  }
}


export const deleteTodos = async (): Promise<{ message: string }> => {
  try {
    const { count } = await prisma.todo.deleteMany({
      where: { complete: true }
    })
    if (count === 0) return { message: 'No completed todos to delete' }
    revalidatePath('/dashboard/server-todos')
    return {
      message: `Deleted ${count} completed todos`
    }
  } catch (error) {
    return {
      message: 'Error deleting completed todos'
    }
  }
}