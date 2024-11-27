import React from 'react'

function ContactUs() {
    return (
        <div>
            <div class="container-fluid py-5 mt-5">
                <div class="container py-5">
                    <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{maxWidth: '600px'}}>
                        <h5 class="text-primary">Get In Touch</h5>
                        <h1 class="mb-3">Contact us for dealership opportunities</h1>
                        <p class="mb-2">The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                    </div>
                    <div class="contact-detail position-relative p-3">
                        <div class="row g-5 mb-5 justify-content-center">
                            <div class="col-xl-4 col-sm-5 col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div class="d-flex bg-light p-3 rounded">
                                    <div class="flex-shrink-0 btn-square my-button rounded-circle" style={{width: '64px', height: '64px'}}>
                                        <i class="fas fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                        <h4 class="text-primary">Address</h4>
                                        <a href="https://goo.gl/maps/Zd4BCynmTb98ivUJ6" target="_blank" class="h5">No. 5D/484, NGO Colony, Tuticorin - 628005.</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <div class="d-flex bg-light p-3 rounded">
                                    <div class="flex-shrink-0 btn-square my-button rounded-circle" style={{width: '64px', height: '64px'}}>
                                        <i class="fa fa-phone text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                        <h4 class="text-primary">Call Us</h4>
                                        <a class="h5" href="tel:+919080810258" target="_blank">+91 90808 10258</a><br />
                                        <a class="h5" href="tel:+918123360699" target="_blank">+91 81233 60699</a><br />
                                        <a class="h5" href="tel:+04613588818" target="_blank">0461 358 8818</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 wow fadeIn" data-wow-delay=".7s">
                                <div class="d-flex bg-light p-3 rounded">
                                    <div class="flex-shrink-0 btn-square my-button rounded-circle" style={{width: '64px', height: '64px'}}>
                                        <i class="fa fa-envelope text-white"></i>
                                    </div>
                                    <div class="ms-3">
                                        <h4 class="text-primary">Email Us</h4>
                                        <a class="h5" href="mailto:info@example.com" target="_blank" style={{wordBreak: 'break-word'}}>jksgypsumplaster@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row g-5">
                            <div class="col-lg-6 wow fadeIn" data-wow-delay=".3s">
                                <div class="p-4 h-100 rounded contact-map">
                                    <iframe class="rounded w-100 h-100" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Ganesh%20Nagar%20Rd%20%26%20NGO%20Colony%202%20Rd&zoom=15&maptype=roadmap"></iframe>
                                </div>
                            </div>
                            <div class="col-lg-6 wow fadeIn" data-wow-delay=".5s">
                                <div class="p-4 rounded contact-form">
                                    <div class="mb-4">
                                        <input type="text" class="form-control border-0 py-3" placeholder="Your Name"/>
                                    </div>
                                    <div class="mb-4">
                                        <input type="email" class="form-control border-0 py-3" placeholder="Your Email"/>
                                    </div>
                                    <div class="mb-4">
                                        <input type="text" class="form-control border-0 py-3" placeholder="Project"/>
                                    </div>
                                    <div class="mb-4">
                                        <textarea class="w-100 form-control border-0 py-3" rows="6" cols="10" placeholder="Message"></textarea>
                                    </div>
                                    <div class="text-start">
                                        <button class="btn bg-dark text-white py-3 px-5" type="button">Get Quotation</button>
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

export default ContactUs