import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { auth } from "../../config/firebase";

function Dashboard() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div>
      <button className="btn btn-danger mx-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard