import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full flex mb-4 bg-purple-900 px-4 text-white">
      <div className="flex w-1/4 justify-start py-4 align-center">
        <Link href="/">
          <h2 className="px-2 text-2xl font-bold hover:text-pink-200">Home</h2>
        </Link>
      </div>
      <div className="flex w-2/4 justify-center py-4 align-center">
        <Link className="px-4" href="/public">
          <h2 className="text-2xl font-bold hover:text-pink-200">Public</h2>
        </Link>
        <Link className="px-4" href="/private">
          <h2 className="text-2xl font-bold hover:text-pink-200">Private</h2>
        </Link>
      </div>
      <div className="flex w-1/4 justify-end py-3">
        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
