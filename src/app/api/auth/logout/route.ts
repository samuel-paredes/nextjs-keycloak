import { getIdToken } from "@/utils/session-token-accessor";

export const GET = async () => {
  const idToken = await getIdToken();
  if (idToken) {
    // this will log out the user on Keycloak side
    var url = `${
      process.env.KEYCLOAK_END_SESSION_URL
    }?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL
    )}`;
    try {
      const resp = await fetch(url, { method: "GET" });
    } catch (err) {
      console.error(err);
      return new Response(null, { status: 500 });
    }
  }

  return new Response(null, { status: 200 });
};
