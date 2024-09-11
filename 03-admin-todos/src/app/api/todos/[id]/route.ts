import prisma from '@/lib/prisma'
import { Todo } from '@prisma/client'
import { NextResponse, NextRequest } from 'next/server'
import { boolean, object, string } from 'yup'

interface Segments {
  params: {
    id: string
  }
}

const getTodo = async (id: string): Promise<Todo | null> => {
  return await prisma.todo.findUnique({ where: { id } })
}

export async function GET(request: Request, { params }: Segments) {
  const todo = await getTodo(params.id)

  if (!todo)
    return NextResponse.json(
      { message: `id ${params.id} not found or is not a valid id.` },
      { status: 404 }
    )

  return NextResponse.json(todo)
}

const putSchema = object({
  description: string().optional(),
  complete: boolean().optional(),
})

export async function PUT(req: Request, { params }: Segments) {
  const todo = await getTodo(params.id)

  if (!todo)
    return NextResponse.json(
      { message: `id ${params.id} not found or is not a valid id.` },
      { status: 404 }
    )

  try {
    const { description, complete } = await putSchema.validate(await req.json())

    const updatedTodo = await prisma.todo.update({
      where: { id: params.id },
      data: { description, complete },
    })

    return NextResponse.json(updatedTodo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}

