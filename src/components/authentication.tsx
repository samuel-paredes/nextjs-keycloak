"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const keycloakSessionLogOut = async () => {
  try {
    await fetch(`/api/auth/logout`, { method: "GET" });
  } catch (err) {
    console.error(err);
  }
};

const Authentication = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ callbackUrl: "/" });
    }
  }, [session, status]);

  if (status == "loading") {
    return (
      <div className="flex w-1/4 justify-end py-3">
        <p className="py-2">Loading...</p>
      </div>
    );
  } else if (session) {
    return (
      <div className="flex w-1/4 justify-end py-3">
        <p className="py-2">Hello</p>
        <span className="text-yellow-100 mx-1 py-2">{session.user.name}</span>
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            keycloakSessionLogOut().then(() => signOut({ callbackUrl: "/" }));
          }}
        >
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex w-1/4 justify-end py-3">
        <button
          className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => signIn("keycloak")}
        >
          Log in
        </button>
      </div>
    );
  }
};
export default Authentication;
