"use client";
import { signOut } from "next-auth/react";
import { CiLogout } from "react-icons/ci";

export const SignOutButton = () => {
  // To show logout data on client components it must be used signOut from next-auth/react, this manage session status on server and client
  return (
    <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
      <button
        onClick={() => signOut({ redirect: false })}
        className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group"
      >
        <CiLogout />
        <span className="group-hover:text-gray-700">Logout</span>
      </button>
    </div>
  );
};
