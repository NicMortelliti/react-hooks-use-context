// Import the useContext hook
import React, { useContext } from "react";
// Import the UserContext we created
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile({ user, theme }) {
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
