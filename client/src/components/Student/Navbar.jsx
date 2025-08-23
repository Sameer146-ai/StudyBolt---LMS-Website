import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/AppContext";

function Navbar() {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  // Clerk authentication
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  const { navigate, isEducator } = useContext(AppContext);

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-6 text-gray-600">
        <div className="flex items-center gap-5">
          {isSignedIn && (
            <>
              <button
                onClick={() => navigate("/educator")}
                className="hover:underline"
              >
                {isEducator ? "Educator Dashboard" : "Become Educator |"}
              </button>
              <Link to="/my-enrollments" className="hover:underline">
                My Enrollments
              </Link>
            </>
          )}
        </div>

        {/* Clerk Auth */}
        {isSignedIn ? (
          <div className="flex items-center gap-3">
            {/* 👋 Greeting with only user's name */}
            <span className="text-gray-700 font-medium">
              Hi, {user.firstName || user.username || "Learner"}
            </span>

            {/* Clerk’s built-in user menu (logout/settings) */}
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
          >
            Sign In / Create Account
          </button>
        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-4 text-gray-600">
        {isSignedIn && (
          <>
            <span className="text-sm">
              Hi, {user.firstName || user.username || "Learner"}
            </span>
            <UserButton afterSignOutUrl="/" />
          </>
        )}

        {!isSignedIn && (
          <button onClick={() => openSignIn()}>
            <img src={assets.user_icon} alt="User-Icon" className="w-8 h-8" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
