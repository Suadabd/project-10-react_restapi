import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function UserSignOut ({ context }) {
  useEffect(() => context.actions.signOut());
  return <Navigate to="/" />;
}

export default UserSignOut;