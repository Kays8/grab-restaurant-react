import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Loading from "../components/Loading";
import loadingAnimation from "../loading/loading.json";

const UserProfilePage = () => {
  const { user } = useAuthContext();
  const maskingString = (str, start, end) => {
    if (
      !str ||
      start < 0 ||
      start >= str.length ||
      end < 0 ||
      end > str.length ||
      start >= end
    ) {
      return maskingString;
    }

    const maskedStr =
      str.substring(0, start) + "*".repeat(20) + str.substring(end);
    return maskedStr;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="card card-side bg-base-100 shadow-xl rounded-lg overflow-hidden w-full max-w-2xl">
        <figure className="flex-shrink-0 w-1/2 h-auto">
          <img
            src="https://images.unsplash.com/photo-1531256456869-ce942a665e80?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body p-6 w-1/2 flex flex-col justify-between">
          <div>
            <h2 className="card-title text-2xl font-semibold mb-4">
              User Profile
            </h2>
            <p className="text-lg mb-2">Username: {user.username}</p>
            <p className="text-lg mb-2">Email: {user.email}</p>
            <p className="text-lg mb-2">Role: {user?.roles.join(", ")}</p>
            <p className="text-lg mb-2">
              Token:{" "}
              {maskingString(user.accessToken, 3, user.accessToken.length - 3)}
            </p>
          </div>
          <div className="card-actions flex justify-end mt-4">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
