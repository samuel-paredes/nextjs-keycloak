import type { User } from "next-auth";

// Read more at: https://next-auth.js.org/getting-started/typescript#module-augmentation

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `Provider` React Context
   */
  interface Session {
    access_token: string;
    id_token: string;
    error: string;
    user: {
      name: string;
      email: string;
    };
  }
  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  interface Account {
    access_token: string;
    expires_at: number;
    id_token: string;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    access_token: string;
    expires_at: number;
    refreshTokenExpired: number;
    id_token: string;
    error: string;
  }
}
