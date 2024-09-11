import prisma from '@/lib/prisma'
import { randomUUID } from 'crypto'
import { NextResponse, NextRequest } from 'next/server'
import * as yup from 'yup'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const limit = Number(searchParams.get('limit') ?? '10')
  const offset = Number(searchParams.get('offset') ?? '0')

  if (isNaN(limit) || isNaN(offset))
    return NextResponse.json(
      {
        message: `${isNaN(limit) ? 'limit' : 'offset'} param must be a number`,
      },
      { status: 400 }
    )

  const todos = await prisma.todo.findMany({
    take: limit,
    skip: offset,
  })

  return NextResponse.json(todos)
}

const postSchema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().default(false).optional(),
})

export async function POST(req: Request) {
  try {
    const { description, complete } = await postSchema.validate(
      await req.json()
    )
    const newTodo = await prisma.todo.create({
      data: {
        description,
        complete,
      },
    })

    return NextResponse.json(newTodo)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
export async function DELETE() {
  try {
    const deletedCount = await prisma.todo.deleteMany({
      where: { complete: true },
    })

    return NextResponse.json(deletedCount)
  } catch (error) {
    return NextResponse.json(error, { status: 400 })
  }
}
