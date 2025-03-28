"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Page() {
  const { user, gitHubSignIn } = useUserAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list");
    };
    }, [user]);

  return (
    <div >
      <h1 className="text-3xl font-bold p-2">Welcome to the Home Page</h1>
      {user ? (
        <div className="flex flex-col gap-6 ">
          <p className="text-lg p-2">Hello, {user.displayName}</p>
          
        </div>
      ) : (
        <button
          className={
            "w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 bg-indigo-300 font-semibold"
          }
          onClick={gitHubSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
}

{/* <div className="w-1/3 flex flex-col gap-6 items-center">
            <Link
              className={
                "w-full p-2 rounded-xl text-center text-2xl mb-2 hover:bg-indigo-600 active:bg-indigo-400 bg-indigo-300 font-bold"
              }
              href="week-9/shopping-list"
            >
              Shopping List
            </Link>
            <button
              className={
                "w-1/2 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400 bg-indigo-300 font-semibold"
              }
              onClick={firebaseSignOut}
            >
              Sign Out
            </button>
          </div> */}
