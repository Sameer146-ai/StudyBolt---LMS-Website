import React from "react";
import { assets, dummyEducatorData } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useUser, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const educatorData = dummyEducatorData;

  // Clerk hook
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 lg:w-32" />
      </Link>

      {/* User Section */}
      <div className="flex items-center gap-5 text-gray-500 relative">
        <p>
          Hi! {isSignedIn ? user.firstName || user.username : "Developer"}
        </p>

        {/* If signed in → show Clerk UserButton (profile + logout), else default profile image */}
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <img src={assets.profile_img} alt="user" className="max-w-8" />
        )}
      </div>
    </div>
  );
}

export default Navbar;
