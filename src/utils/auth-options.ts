import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from "jwt-decode";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);

      if (account) {
        //console.log("account:", account);
        // account is only available the first time this callback is called on a new session (after the user signs in)
        token.decoded = jwt_decode(account.access_token);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.expires_at = account.expires_at;
        token.refresh_token = account.refresh_token;
        return token;
      } else if (nowTimeStamp < token.expires_at) {
        // token has not expired yet, return it
        return token;
      } else {
        // token is expired, try to refresh it
        console.log("Token has expired. Will refresh...");
        return token;
      }
    },
    async session({ session, token }) {
      //console.log("TOKEN WHEN SESSION: ", token);
      // Send properties to the client
      session.access_token = token.access_token;
      session.id_token = token.id_token;
      session.error = token.error;
      return session;
    },
  },
};
