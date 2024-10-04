import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-orange-500 text-black text-3xl text-center py-5 m-4">
      <h1 className="text-5xl text-center">User ID: {userid}</h1>
    </div>
  );
}

export default User;
