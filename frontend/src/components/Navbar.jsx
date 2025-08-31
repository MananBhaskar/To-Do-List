import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ user, setUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 py-3">
        <Link
          to="/"
          className="text-white text-2xl font-extrabold tracking-wide hover:opacity-90 transition"
        >
          Task Manager
        </Link>

        <div className="flex items-center gap-x-4">
          {user ? (
            <div className="flex items-center gap-x-4">
              <span className="text-white font-medium text-lg">
                👋 Welcome,{" "}
                <span className="font-semibold">{user.username}</span>
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-x-3">
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-md transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 shadow transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
