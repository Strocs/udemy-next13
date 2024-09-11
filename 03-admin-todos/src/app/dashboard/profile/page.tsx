"use client";
import { WidgetItem } from "@/components/WidgetItem";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const session = useSession();

  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
      <WidgetItem title="Get User on Client Side">
        <div>
          <p>
            {session.status === "loading"
              ? "Loading User Info..."
              : JSON.stringify(session)}
          </p>
        </div>
      </WidgetItem>
    </div>
  );
}
