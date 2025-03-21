"use client";

import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return (
      <div className="p-4 items-center text-white bg-indigo-950">
        <h1 className="text-3xl font-bold p-2">Access Denied</h1>
      </div>
    );
  }
  return (
    <div>
      <div className="p-4 items-center text-white bg-indigo-950">
        <h1 className="text-3xl font-bold p-2">Access Granted</h1>
        <p className="text-lg p-2">{user.displayName}</p>
      </div>
    </div>
  );
}
