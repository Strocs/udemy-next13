import { NewTodo, TodosGrid } from "@/todos";
import prisma from "@/lib/prisma";
import { auth } from "@/lib/auth";

export const metadata = {
  title: "List of Todos",
  description: "SEO Title",
};

export default async function RestTodosPage() {
  const session = await auth();

  const todos = await prisma.todo.findMany({
    where: { userId: session?.user?.id },
    orderBy: { description: "asc" },
  });

  return (
    <>
      <NewTodo />
      <TodosGrid todos={todos} />
    </>
  );
}
