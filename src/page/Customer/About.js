import React, { useState } from "react";
import AboutUs from '../../components/AboutUs'
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // For modal functionality
import { expertiseData } from "../../data/expertiseData";
function About() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState(null)

  const handleShowModal = (index) => {
    setShowModal(true)
    setImage(index)
  }
  const handleCloseModal = () => setShowModal(false);
  return (
    <div>
      <AboutUs />
      <div class="container-fluid blog py-5 mb-5">
        <div class="container">
          <h1 className='text-center'>Our Building Expertise in Gypsum Plastering</h1>
          <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>

          </div>
          <div class="row g-5 justify-content-center">
            {expertiseData.map((expertise) => (
              <div class="col-lg-6 col-xl-4 wow fadeIn expertise-card" data-wow-delay=".3s" key={expertise.id} onClick={() => handleShowModal(expertise)}>
                <div class="blog-item position-relative bg-light rounded shadow pb-3 mb-5 bg-white rounded">
                  <img src={expertise?.img} class="img-fluid w-100 rounded-top h-25" alt="" />
                  <div class="blog-content text-center position-relative px-3" style={{ marginTop: '25px' }}>
                    <h5 class="">{expertise.title}</h5>
                  </div>
                </div>
              </div>
            ))}


            <div>
              {showModal && (
                <div
                  className="modal fade show"
                  tabIndex="-1"
                  style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                  aria-labelledby="staticBackdropLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                          {image?.title}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          onClick={handleCloseModal}
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div class="row">
                          <div class="col-sm-12">
                            <img src={image?.img} class="img-fluid w-100 rounded-top" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleCloseModal}
                        >
                          Close
                        </button>

                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About