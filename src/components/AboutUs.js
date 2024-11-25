import React from 'react'
import { useLocation } from 'react-router-dom'

function AboutUs() {
    const location = useLocation()
    return (
        <div>
            <div class="container-fluid py-5 my-5">
                <div class="container pt-5">
                    <div class="row g-5">
                        <div class="col-lg-5 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".3s">
                            <div class="h-100 position-relative">
                                <img src="img/about-1.jpg" class="img-fluid w-75 rounded" alt="" style={{ marginBottom: '25%' }} />
                                <div class="position-absolute w-75" style={{ top: '25%', left: '25%' }}>
                                    <img src="img/about-2.jpg" class="img-fluid w-100 rounded" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 col-md-6 col-sm-12 wow fadeIn" data-wow-delay=".5s">
                            <h5 class="nav-header-icon">About Us</h5>
                            <h1 class="mb-4">JKS Gypsum Plaster: Elevating Spaces, Naturally</h1>
                            <p>JKS Gypsum Plaster was established in 2024, building on over a decade of expertise through our parent company, JK Traders. Today, we have evolved into a private limited company under the name JKS Gypsum Plaster, with branches strategically located in Thoothukudi, Hyderabad, and Bangalore.</p>
                            <p class="mb-4">We’re passionate about transforming spaces with the beauty and durability of natural gypsum plaster. Our commitment to quality and innovation has made us a leading provider of premium plaster solutions.</p>
                            {location.pathname === '/about' ? <p>Our mission is to revolutionize the way walls and ceilings are crafted. With a strong commitment to excellence, we deliver products that are eco-friendly, durable, and designed to provide superior finishes. Whether you're building a new home, renovating a commercial space, or working on a large-scale project, JKS Gypsum Plaster ensures smooth, flawless, and crack-resistant results every time.</p> : null}
                            {location.pathname === '/about' ? <p>We are committed to leveraging our rich experience to deliver exceptional products and services to our customers.</p> : null}
                            {location.pathname !== '/about' ? <a href="/about" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs