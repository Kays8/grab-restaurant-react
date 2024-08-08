import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import UserProfile from "./UserProfile";
import { useAuthContext } from "../context/AuthContext";

const Navbar = () => {
  // ดึงข้อมูล user จาก AuthContext
  const { user } = useAuthContext();

  return (
    <div>
      <div className="navbar bg-base-100 px-16 p-4 bg-white drop-shadow-lg">
        <div className="navbar-start">
          <a href="/">
            <img
              className="w-40"
              src="https://cloud.shopback.com/c_fit,h_750,w_750/store-service-th/assets/11076/9838b3f0-c024-11ea-bf98-e1c7c502cca8.png"
              alt="Logo"
            />
          </a>
        </div>

        <div className="mr-10">
          <a href="/Add">ADD MENU</a>
        </div>
        <div>
          <a href="/">MAIN PAGE</a>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          {user && (
            <div>
              Welcome,{" "}
              <span className="font-medium">
                {user.username}
                <br />
                <div className="inline-flex space-x-2 ml-2">
                  {user.roles.map((role, index) => (
                    <span
                      key={index}
                      className="badge badge-neutral text-xs py-1 px-2 rounded text-white"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </span>
            </div>
          )}

          {user ? (
            <UserProfile />
          ) : (
            <div className="space-x-2">
              <LoginButton />
              <RegisterButton />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
