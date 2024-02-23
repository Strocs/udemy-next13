export const dynamic = 'force-dynamic'
export const revalidate = 0

import { NewTodo, TodosGrid } from '@/app/todos'
import prisma from '@/lib/prisma'

export const metadata = {
  title: 'List of Todos from Server Actions',
  description: 'SEO Title'
}

export default async function ServerTodosPage () {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <>
      <h1 className='pb-6 text-5xl font-bold'>Server Actions</h1>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  )
}
