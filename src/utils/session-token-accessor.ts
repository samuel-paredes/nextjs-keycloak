import { getServerSession } from "next-auth";
import { authOptions } from "./auth-options";

export const getAccessToken = async () => {
  const session = await getServerSession(authOptions);
  return session ? session.access_token : null;
};

export const getIdToken = async () => {
  const session = await getServerSession(authOptions);
  return session ? session.id_token : null;
};
