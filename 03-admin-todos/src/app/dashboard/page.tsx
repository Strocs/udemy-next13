import { WidgetItem } from "@/components";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/api/auth/signin");
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WidgetItem title="Usuario conectado Server Side">
        <div>
          <p>{session.user?.name}</p>
        </div>
      </WidgetItem>
    </div>
  );
}
