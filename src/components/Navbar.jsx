import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import UserProfile from "./UserProfile";
import { useAuthContext } from "../context/AuthContext";
import { HomeIcon, PlusIcon, FoodIcon } from "./Icon";

const Navbar = () => {
  // ดึงข้อมูล user จาก AuthContext
  const { user } = useAuthContext();

  const menus = {
    ROLES_ADMIN: [
      { name: "HOME", link: "/" },
      { name: "ADD", link: "/add" },
    ],
    ROLES_MODERATOR: [
      { name: "HOME", link: "/" },
      { name: "ADD", link: "/add" },
    ],
    ROLES_USER: [{ name: "HOME", link: "/" }],
  };

  const renderMenuItem = (menuItem) => {
    switch (menuItem.name) {
      case "HOME":
        return (
          <a
            href={menuItem.link}
            className="flex items-center space-x-1 text-black"
          >
            <HomeIcon />
            <span>Home</span>
          </a>
        );
      case "ADD":
        return (
          <a
            href={menuItem.link}
            className="flex items-center space-x-1 text-black"
          >
            <PlusIcon />
            <span>Add</span>
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 px-16 p-4 bg-[#f8f5f5] drop-shadow-lg">
        <div className="navbar-start">
          <a href="/">
            <div className="text-black">
              <FoodIcon className="text-4xl" />
            </div>
          </a>
        </div>

        <div className="navbar-center flex items-center space-x-4">
          {user &&
            menus[user.roles[0]].map((menuItem) => (
              <div key={menuItem.name} className="mr-10">
                {renderMenuItem(menuItem)}
              </div>
            ))}
        </div>

        <div className="navbar-end flex items-center space-x-4 text-black">
          {user && (
            <div>
              Welcome,{" "}
              <span className="font-medium border-zinc-800 ">
                {user.username}
                <div className="inline-flex space-x-2 ml-2 border-zinc-800">
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
            <div className="text-black">
              <UserProfile />
            </div>
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
