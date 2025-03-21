"use client";

import { useUserAuth } from "./_utils/auth-context";
import { Redirect } from 'react-router-dom';

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div className="p-4 items-center text-white bg-indigo-950">
      <h1 className="text-3xl font-bold p-2">Welcome to the Home Page</h1>
      {user ? (
        <div>
          <p>Hello, {user.displayName}</p>
          <button
            className={
              "w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400bg-indigo-300  text-black font-semibold"
            }
            onClick={firebaseSignOut}
          >
            Sign Out
          </button>
        </div>
      ) : (
        <button
          className={
            "w-1/3 p-2 rounded-xl hover:bg-indigo-600 active:bg-indigo-400bg-indigo-300  text-black font-semibold"
          }
          onClick={gitHubSignIn}
        >
          Sign In with GitHub
        </button>
      )}
      { user && (<Redirect to="/secure" />) }
    </div>
  );
}
