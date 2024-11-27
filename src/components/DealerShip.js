import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function DealerShip() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
      const handleResize = () => {
          setIsMobile(window.innerWidth < 768);
      };

      window.addEventListener("resize", handleResize);
      return () => {
          window.removeEventListener("resize", handleResize);
      };
  }, []);


  return (
    <div>
      <div class="container-fluid">
        <div class="container">
          <div class="text-center mx-auto  wow">
            <h1 class="mb-3 p-5">Contact us for dealership opportunities</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div class="dealership-detail position-relative">
            <div class="row g-5">
              <div class="col-lg-3 wow">
              </div>
              <div class="col-lg-6 wow mb-4">
                <div class={`${!isMobile ? "p-5" : "p-2"} rounded dealership-form`}  style={{marginTop: 250}}>
                  <div class="mb-4">
                    <input type="text" class="form-control border-0 py-3" placeholder="Name" value={email}
                      onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control border-0 py-3" placeholder="Mobile No." value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control border-0 py-3" placeholder="Aadhar No." value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="mb-4">
                    <input type="text" class="form-control border-0 py-3" placeholder="Address" value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="mb-2">
                    <input type="text" class="form-control border-0 py-3" placeholder="GST No. (optional)" value={password}
                      onChange={(e) => setPassword(e.target.value)} />
                  </div>
                  <div class="mb-1">
                    <label className='my-2'>Your Preferred date for appointment</label>
                    <input type="date" class="form-control border-0 py-3" placeholder={"Preferred date for appointment"} value={password}
                      onChange={(e) => setPassword(e.target.value)}   onFocus={(e) => e.target.value === "Preferred time for appointment" && setPassword("")}/>
                  </div>
                  <div class="mb-4">
                    <label className='my-2'>Your Preferred time for appointment</label>
                    <input type="time" class="form-control border-0 py-3" placeholder={"Preferred time for appointment"} value={password}
                      onChange={(e) => setPassword(e.target.value)}   onFocus={(e) => e.target.value === "Preferred time for appointment" && setPassword("")}/>
                  </div>
                  <div class="text-start">
                    <button class="btn my-button text-white py-3 px-3" type="button">Book Appointment</button>
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

export default DealerShip