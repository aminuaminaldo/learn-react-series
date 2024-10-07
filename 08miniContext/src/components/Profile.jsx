import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h1>Not Logged In</h1>;
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.username}</p>
      <p>Password: {user.password}</p>
    </div>
  );
}
export default Profile;
