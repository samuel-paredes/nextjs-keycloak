declare namespace NodeJS {
  export interface ProcessEnv {
    NEXTAUTH_URL: string;
    NEXTAUTH_SECRET: string;
    KEYCLOAK_CLIENT_ID: string;
    KEYCLOAK_CLIENT_SECRET: string;
    KEYCLOAK_ISSUER: string;
    KEYCLOAK_REFRESH_TOKEN_URL: string;
    KEYCLOAK_END_SESSION_URL: string;
  }
}
