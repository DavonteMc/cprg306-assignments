"use client";

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      {user ? (
        <div>
          <p>Hello, {user.displayName}</p>
          <button onClick={firebaseSignOut}>Sign Out</button>
        </div>
      ) : (
        <button onClick={gitHubSignIn}>Sign In with GitHub</button>
      )}
    </div>
  );
}
