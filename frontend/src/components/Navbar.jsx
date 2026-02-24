import React from "react";
import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-base-300 border-b border-base-content/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 px-4">
          <Link to={"/"}>
            <h1 className="text-3xl text-primary font-bold font-mono tracking-tighter">
              MemoryBoard
            </h1>
          </Link>
          <Link to={"/create"} className="btn btn-primary">
            <PlusIcon className="size-5"></PlusIcon>
            <span>Create Note</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
