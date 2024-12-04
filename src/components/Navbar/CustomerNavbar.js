import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';

function CustomerNavbar() {
    const navigate = useNavigate();
    const location = useLocation()
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
            <div class="container-fluid bg-dark py-2 d-none d-md-flex">
                <div class="container">
                    <div class="d-flex justify-content-round topbar">
                        <div class="top-info">
                            <small class="me-3 text-white"><a href="#"><i class="fas fa-map-marker-alt me-2 nav-header-icon"></i></a>No. 5D/484, NGO Colony, Tuticorin</small>
                            <small class="me-3 text-white"><a href="#"><i class="fas fa-envelope me-2 nav-header-icon"></i></a> jksgypsumplaster@gmail.com</small>
                        </div>
                        <div id="note" class="text-white d-none d-xl-flex"><small>Note : We help you to build your dream</small></div>
                        <div class="top-link">
                            <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle"><i class="fab fa-instagram text-dark"></i></a>
                            <a href="" class="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i class="fab fa-youtube text-dark"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container-fluid bg-light">
                <div class="container">
                    <nav class="navbar navbar-dark navbar-expand-lg py-0">
                        <a href="index.html" class="navbar-brand">
                            {/* <h1 class="text-white fw-bold d-block">High<span class="text-secondary">Tech</span> </h1> */}
                            <img src={logo} style={{ width: 140, height: 70 }} />
                        </a>
                        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            {/* <span class="navbar-toggler-icon text-black-50"></span> */}
                            <i class="fa-solid fa-bars" style={{ color: '#f5811e', fontSize: 30 }}></i>
                        </button>
                        <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div class="navbar-nav ms-auto mx-xl-auto p-0">
                                <a href="/" class={`nav-item nav-link ${location.pathname === '/' ? 'active' : null}`}>Home</a>
                                <a href="/about" class={`nav-item nav-link ms-2 ${location.pathname === '/about' ? 'active' : null}`}>About</a>
                                <a href="/" class="nav-item nav-link  ms-2">Services</a>
                                <a href="/" class="nav-item nav-link  ms-2">Projects</a>
                                <a href="/" class="nav-item nav-link  ms-2">Contact</a>
                                {isMobile ? <a href="/dealership" class="ms-2"><button type="button" class="px-4 py-sm-3 mb-2 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">DealerShip</button></a> : null}
                            </div>
                        </div>
                        <div class="d-none d-xl-flex flex-shirink-0">
                            <div id="phone-tada" class="d-flex align-items-center justify-content-center me-4">
                                <a href="" class="position-relative animated tada infinite">
                                    <i class="fa fa-phone-alt text-dark fa-2x"></i>
                                    <div class="position-absolute" style={{ top: '-7px', left: '20px' }}>
                                        <span><i class="fa fa-comment-dots text-dark"></i></span>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column pe-4 border-end">
                                <span class="text-dark">Have any questions?</span>
                                <span class="text-dark">Call: + +91 90808 10258</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-center ms-4 ">
                                {location.pathname === '/dealership' ? null : <a href="/dealership" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">DealerShip</button></a>}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default CustomerNavbar