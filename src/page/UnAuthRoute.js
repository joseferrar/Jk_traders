// UnProtectedRoute.js
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../config/firebase";

const UnAuthRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>
  }

  return !user ? children : <Navigate to="/dashboard" />;
};

export default UnAuthRoute;
