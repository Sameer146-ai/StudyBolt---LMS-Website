import React from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
  const { logout } = useAuth0();
  console.log(user)
  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer"
      />

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-5 text-gray-500">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator |</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>

        {!isAuthenticated ? (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Create Account
          </button>
        ) : (
          <button 
  className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition duration-300 
             hover:ring-2 hover:ring-blue-400 hover:shadow-md backdrop-blur-sm bg-white/60"
  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
>
  <img
    src={user.picture}
    alt="User"
    className="w-10 h-10 rounded-full border border-gray-400"
  />
  <span className="text-sm text-gray-700">Log Out</span>
</button>

        )}
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div>
          {user && (
            <>
              <button>Become Educator |</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {isAuthenticated ? (
          <button 
  className="flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition duration-300 
             hover:ring-2 hover:ring-blue-400 hover:shadow-md backdrop-blur-sm bg-white/60"
  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
>
  <img
    src={user.picture}
    alt="user"
    className="w-10 h-10 rounded-full border border-gray-400"
  />
  <span className="text-sm text-gray-700">Log Out</span>
</button>

        ) : (
          <button onClick={() => loginWithRedirect()}>
            <img src={assets.user_icon} alt="User-Icon" />
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
