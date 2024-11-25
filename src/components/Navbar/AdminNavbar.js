import React from 'react'
import logo from '../../assets/images/logo.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../../config/firebase";

function AdminNavbar() {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <div>
            <div class="container-fluid bg-dark py-2 d-none d-md-flex">
                <div class="container">
                    <div class="d-flex justify-content-round topbar">
                        <div class="top-info">
                            <small class="me-3 text-white"><a href="#"><i class="fas fa-map-marker-alt me-2 nav-header-icon"></i></a>23 Ranking Street, New York</small>
                            <small class="me-3 text-white"><a href="#"><i class="fas fa-envelope me-2 nav-header-icon"></i></a>Email@Example.com</small>
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
                            <img src={logo} style={{ width: 100, height: 70 }} />
                        </a>
                        <button type="button" class="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            {/* <span class="navbar-toggler-icon text-black-50"></span> */}
                            <i class="fa-solid fa-bars" style={{ color: '#f5811e', fontSize: 30 }}></i>
                        </button>
                        <div class="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                            <div class="navbar-nav ms-auto mx-xl-auto p-0">
                                <a href="/dashboard" class="nav-item nav-link active text-primary">Dashboard</a>
                                <a href="/addGallery" class="nav-item nav-link">Add Gallery</a>
                                <a href="project.html" class="nav-item nav-link">Projects</a>
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div class="dropdown-menu rounded">
                                        <a href="blog.html" class="dropdown-item">Our Blog</a>
                                        <a href="team.html" class="dropdown-item">Our Team</a>
                                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                        <a href="404.html" class="dropdown-item">404 Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
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
                                <span class="text-dark">Call: + 0123 456 7890</span>
                            </div>
                            <div class="d-flex align-items-center justify-content-center ms-4 ">
                                {/* <a href="#"><i class="bi bi-search text-white fa-2x"></i> </a> */}
                                {user && <button className="btn btn-danger mx-2" onClick={handleLogout}>
                                    Logout
                                </button>}

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default AdminNavbar