"use client";
import { signOut as ClientSignOut } from "next-auth/react";
import { signOut as ServerSignOut } from "./actions";

import { CiLogout } from "react-icons/ci";

export const SignOutButton = () => {
  // To show logout data on client components it must be used signOut from next-auth/react, this manage session status on server and client
  async function handleSignOut() {
    await ServerSignOut();
    await ClientSignOut();
  }

  return (
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        onClick={handleSignOut}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiLogout />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  );
};
