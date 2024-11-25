import React, { useState } from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      window.history.replaceState(null, "", "/dashboard"); // Replace the history state
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div>
      <div class="container-fluid">
        <div class="container my-3">
          <div class="text-center mx-auto pb-2 wow">
            <h1 class="mb-3">Admin Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div class="contact-detail position-relative p-5">
            <div class="row g-5">
              <div class="col-lg-3 wow">
              </div>
              <div class="col-lg-6 wow">
                <div class="p-5 rounded contact-form">
                  <div class="mb-4">
                    <input type="email" class="form-control border-0 py-3" placeholder="Email" value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-4">
                    <input type="password" class="form-control border-0 py-3" placeholder="Password" value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="text-start">
                    <button class="btn bg-primary text-white py-3 px-5" type="button" onClick={handleLogin}>Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin