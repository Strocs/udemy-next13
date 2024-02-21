import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {


  await prisma.todo.deleteMany() // delete * from todo

  const todo = await prisma.todo.createMany({
    data: [
      {
        description: 'Piedra del Alma',
        complete: true
      },
      {
        description: 'Piedra del Poder',
      },
      {
        description: 'Piedra del Tiempo',
      },
      {
        description: 'Piedra del Espacio',
      },
      {
        description: 'Piedra de la Realidad',
      },
    ]
  })

  return NextResponse.json({ message: 'seed executed' })
}