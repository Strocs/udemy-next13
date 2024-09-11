import prisma from '@/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs'

export async function GET(request: Request) {
  await prisma.todo.deleteMany() // delete * from todo
  await prisma.user.deleteMany()

  await prisma.user.create({
    data: {
      email: 'test@google.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client', 'super-user'],
      todos: {
        create: [
          {
            description: 'Piedra del Alma',
            complete: true,
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
        ],
      },
    },
  })

  return NextResponse.json({ message: 'seed executed' })
}
