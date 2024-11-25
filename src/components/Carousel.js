import React from 'react'
import cal from '../assets/images/carousel-3.jpeg';
import cal2 from '../assets/images/carousel-4.jpeg';
function Carousel() {
    return (
        <div>
            <div class="container-fluid px-0">
                <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active" aria-current="true" aria-label="First slide"></li>
                        <li data-bs-target="#carouselId" data-bs-slide-to="1" aria-label="Second slide"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src={cal} alt="First slide" style={{ width: '100%' }} />
                            <div class="carousel-caption">
                                <div class="container carousel-content">
                                    <h6 class="text-white h4 animated fadeInUp">Best Building Solution</h6>
                                    <h1 class="text-white display-1 mb-4 animated fadeInRight">Making your vision become a reality.</h1>
                                    <p class="mb-4 text-white fs-5 animated fadeInDown">Transform your interiors effortlessly with JKS Gypsum Plaster — the choice of professionals and homeowners alike.</p>
                                    <a href="" class="me-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                    <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src={cal2} class="img-fluid" alt="Second slide" style={{ width: '100%' }} />
                            <div class="carousel-caption">
                                <div class="container carousel-content">
                                    <h6 class="text-white h4 animated fadeInUp">Build Your Dream</h6>
                                    <h1 class="text-white display-1 mb-4 animated fadeInLeft">Premium Gypsum Plaster for Stunning Interiors</h1>
                                    <p class="mb-4 text-white fs-5 animated fadeInDown">With a commitment to excellence, innovation, and sustainability, our products deliver unparalleled durability, smooth application, and superior finishes for walls and ceilings.</p>
                                    <a href="" class="me-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn1 animated fadeInLeft">Read More</button></a>
                                    <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary rounded-pill carousel-content-btn2 animated fadeInRight">Contact Us</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Carousel