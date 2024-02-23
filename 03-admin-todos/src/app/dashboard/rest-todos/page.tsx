import { NewTodo, TodosGrid } from '@/app/todos'
import prisma from '@/lib/prisma'

export const metadata = {
  title: 'List of Todos',
  description: 'SEO Title'
}

export default async function RestTodosPage () {
  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } })
  return (
    <>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  )
}
