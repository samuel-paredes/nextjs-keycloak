import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth-options";
import Unauthorized from "@/components/unauthorized";

const PrivatePage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <>
      {session && (
        <div className="h-screen flex items-center justify-center font-bold text-2xl md:text-4xl">
          <h1>This is a private page</h1>
        </div>
      )}
      {!session && <Unauthorized />}
    </>
  );
};

export default PrivatePage;
