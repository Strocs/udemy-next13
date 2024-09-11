export const dynamic = "force-dynamic";
export const revalidate = 0;

import { NewTodo, TodosGrid } from "@/todos";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "List of Todos from Server Actions",
  description: "SEO Title",
};

export default async function ServerTodosPage() {
  const session = await auth();

  const todos = await prisma.todo.findMany({
    where: { userId: session?.user?.id },
    orderBy: { description: "asc" },
  });

  return (
    <>
      <h1 className="pb-6 text-5xl font-bold">Server Actions</h1>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  );
}
