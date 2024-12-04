import React from 'react'
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <div class="container-fluid footer bg-default wow fadeIn" data-wow-delay=".3s">
            <div class="container pt-5 pb-4">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <a href="/">
                            <img src={logo} style={{ width: 140, height: 70 }} />
                        </a>
                        <p class="mt-4 text-dark">We’re passionate about transforming spaces with the beauty and durability of natural gypsum plaster. Our commitment to quality and innovation has made us a leading provider of premium plaster solutions.</p>
                        <div class="d-flex hightech-link">
                            <a href="#" class="btn-light nav-fill btn btn-square rounded-circle me-2"><i class="fab fa-instagram text-primary"></i></a>
                            <a href="#" class="btn-light nav-fill btn btn-square rounded-circle me-0"><i class="fab fa-youtube text-primary"></i></a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <p class="h3 nav-header-icon">Short Link</p>
                        <div class="mt-4 d-flex flex-column short-link">
                            <a href='/about' class="mb-2 text-white"><i class="fas fa-angle-right nav-header-icon me-2"></i>About us</a>
                            <a href='/about' class="mb-2 text-white"><i class="fas fa-angle-right nav-header-icon me-2"></i>Contact us</a>
                            <a href='#' class="mb-2 text-white"><i class="fas fa-angle-right nav-header-icon me-2"></i>Our Services</a>
                            <a href='#' class="mb-2 text-white"><i class="fas fa-angle-right nav-header-icon me-2"></i>Our Projects</a>
                            <a href='/dealership' class="mb-2 text-white"><i class="fas fa-angle-right nav-header-icon me-2"></i>DealerShip</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <p class="h3 nav-header-icon">Help Link</p>
                        <div class="mt-4 d-flex flex-column help-link">
                            <a class="mb-2 text-dark"><i class="fas fa-angle-right nav-header-icon me-2"></i>Terms Of use</a>
                            <a href="#" class="mb-2 text-dark"><i class="fas fa-angle-right nav-header-icon me-2"></i>Privacy Policy</a>
                            <a href="#" class="mb-2 text-dark"><i class="fas fa-angle-right nav-header-icon me-2"></i>Helps</a>
                            <a href="#" class="mb-2 text-dark"><i class="fas fa-angle-right nav-header-icon me-2"></i>FQAs</a>
                            <a href="#" class="mb-2 text-dark"><i class="fas fa-angle-right nav-header-icon me-2"></i>Contact</a>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <p class="h3 nav-header-icon">Contact Us</p>
                        <div class="text-white mt-4 d-flex flex-column contact-link">
                            <p class="pb-1 text-dark border-primary text-center" style={{marginLeft: -80}}><i class="fas fa-map-marker-alt nav-header-icon me-2"></i> No. 5D/484, NGO Colony,<br/> Tuticorin - 628005.</p>
                            <p class="py-1 text-dark border-primary text-center" style={{marginLeft: -130}}><i class="fas fa-phone-alt nav-header-icon me-2"></i> +91 90808 10258</p>
                            <p class="py-1 text-dark border-primary text-center" style={{marginLeft: -40}}><i class="fas fa-envelope nav-header-icon me-2"></i> jksgypsumplaster@gmail.com</p>
                        </div>
                    </div>
                </div>
                <hr class="text-light mt-5 mb-4" />
                <div class="row">
                    <div class="col-md-6 text-center text-md-start">
                        <span class="text-dark"><a href="/" class="nav-header-icon fw-bold"><i class="fas fa-copyright me-2 nav-header-icon"></i>Jks Traders</a>, All right reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer