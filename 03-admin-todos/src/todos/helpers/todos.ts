import { Todo } from '@prisma/client'

export const updateTodo = async (
  id: string,
  complete: boolean
): Promise<Todo> => {
  const body = { complete }

  //* El path es posible ponerlo parcial cuando es llamado desde el cliente.
  //* Si fuese llamado desde el servidor es necesario poner el path completo.
  const todo = await fetch(`/api/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())

  return todo
}

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description }

  const todo = await fetch('/api/todos/', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())

  return todo
}

export const deleteCompleted = async (): Promise<{ count: number }> => {
  return await fetch('/api/todos/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json())
}

