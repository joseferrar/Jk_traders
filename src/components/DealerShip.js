import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { auth, db } from '../config/firebase';
import { addDoc, collection } from 'firebase/firestore';

function DealerShip() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const formik = useFormik({
    initialValues: {
      name: "",
      mobile: "",
      aathar: "",
      address: "",
      gst: "",
      apDate: "",
      apTime: "",
    },
    validationSchema: yup.object({
      name: yup.string().required("Name is Required!"),
      mobile: yup
        .string()
        .required("Mobile Number is Required!")
        .min(10, "Invalid Mobile Number"),
      aathar: yup
        .string()
        .required("Aathar Number is Required!")
        .min(12, "Invalid Aathar Number"),
      address: yup.string().required("Address is Required!"),
      apDate: yup.string().required("AP Date is Required!"),
      apTime: yup.string().required("AP Date is Required!"),
    }),
    onSubmit: async (data, {resetForm}) => {
      try {
        const userSubCollectionRef = collection(db, "deals");
        await addDoc(userSubCollectionRef, data);
        resetForm()
        alert("Document added successfully!");
        console.log('data', data);
      } catch (err) {
        console.error("Error adding document: ", err);
      }

    },
  });


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
          </div>
          <div class="dealership-detail position-relative">
            <div class="row g-5">
              <div class="col-lg-3 wow">
              </div>
              <div class="col-lg-6 wow mb-4">
                <div class={`${!isMobile ? "p-5" : "p-2"} rounded dealership-form`} style={{ marginTop: 250 }}>
                  <div class="mb-4">
                    <input type="text"
                      class="form-control border-0 py-3"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange("name")} />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.name ? formik.errors.name : null}</p>
                  </div>
                  <div class="mb-4">
                    <input type="text"
                      class="form-control border-0 py-3"
                      placeholder="Mobile No."
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                    />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.mobile ? formik.errors.mobile : null}</p>
                  </div>
                  <div class="mb-4">
                    <input type="text"
                      class="form-control border-0 py-3"
                      placeholder="Aadhar No."
                      value={formik.values.aathar}
                      onChange={formik.handleChange("aathar")}
                    />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.aathar ? formik.errors.aathar : null}</p>
                  </div>
                  <div class="mb-4">
                    <input type="text"
                      class="form-control border-0 py-3"
                      placeholder="Address"
                      value={formik.values.address}
                      onChange={formik.handleChange("address")}
                    />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.address ? formik.errors.address : null}</p>
                  </div>
                  <div class="mb-2">
                    <input type="text"
                      class="form-control border-0 py-3"
                      placeholder="GST No. (optional)"
                      value={formik.values.gst}
                      onChange={formik.handleChange("gst")}
                    />
                  </div>
                  <div class="mb-1">
                    <label className='my-2'>Your Preferred date for appointment</label>
                    <input
                      type="date"
                      class="form-control border-0 py-3"
                      placeholder={"Preferred date for appointment"}
                      value={formik.values.apDate}
                      onChange={formik.handleChange("apDate")}
                    />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.apDate ? formik.errors.apDate : null}</p>
                  </div>
                  <div class="mb-4">
                    <label className='my-2'>Your Preferred time for appointment</label>
                    <input type="time"
                      class="form-control border-0 py-3"
                      placeholder={"Preferred time for appointment"}
                      value={formik.values.apTime}
                      onChange={formik.handleChange("apTime")}
                    />
                    <p style={{ color: 'red', margin: 6 }}>{formik.touched.apTime ? formik.errors.apTime : null}</p>
                  </div>
                  <div class="text-start">
                    <button
                      class="btn my-button text-white py-3 px-3"
                      type="button"
                      onClick={formik.handleSubmit}>
                      Book Appointment
                    </button>
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