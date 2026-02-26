import { Link } from "react-router";
import { PlusIcon, LogOutIcon } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-base-300 border-b border-base-content/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <Link to={"/"}>
            <h1 className="text-3xl text-primary font-bold font-mono tracking-tighter">
              MemoryBoard
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            {user && (
              <span className="text-sm">Welcome, {user.username}</span>
            )}
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5"></PlusIcon>
              <span>Create Note</span>
            </Link>
            <button onClick={logout} className="btn btn-ghost">
              Logout
              <LogOutIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
