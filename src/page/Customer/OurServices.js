import React from 'react'
import bondit_2 from '../../assets/images/bondit_2.png'
import bondit_4 from '../../assets/images/bondit_4.png'
import bondit_1 from '../../assets/images/bondit_1.png'
import bondit_6 from '../../assets/images/bondit_6.png'
import bondit_3 from '../../assets/images/bondit_3.png'
import bondit_5 from '../../assets/images/bondit_5.png'

function OurServices() {
    return (
        <div>
            <div class="container-fluid services py-5 mb-5">
                <div class="container">
                    <div class="text-center mx-auto pb-5 wow fadeIn" data-wow-delay=".3s" style={{ maxWidth: '600px' }}>
                        <h5 class="text-primary">Our Services</h5>
                        <h1>Services Built Specifically For Your Business</h1>
                    </div>
                    <div class="row g-5 services-inner">
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_2} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Gypsum Plaster</h4>
                                        <p class="mb-4">We offer a variety of gypsum plaster options to suit your desired look and application. Choose from different textures and finishes to create a unique aesthetic.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_4} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Gypsum Plastering</h4>
                                        <p class="mb-4">Our skilled professionals can handle all your plastering needs, ensuring a smooth, flawless finish for walls and ceilings.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_1} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Bond IT</h4>
                                        <p class="mb-4">Our Bond IT product ensures superior adhesion between your gypsum plaster and the substrate, guaranteeing a long-lasting bond.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_6} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Glass Fiber Mesh</h4>
                                        <p class="mb-4">For added strength and crack prevention, we provide high-quality glass fiber mesh to reinforce your plaster application.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_3} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Water Proofing Coating</h4>
                                        <p class="mb-4">Protect your walls and ceilings from moisture damage with our water-proofing coating. Ideal for bathrooms, kitchens, and other high-humidity areas.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
                            <div class="services-item bg-light">
                                <div class="p-4 text-center services-content">
                                    <div class="services-content-icon">
                                        {/* <i class="fa fa-code fa-7x mb-4 text-primary"></i> */}
                                        <img src={bondit_5} className='mb-4 w-50 ' />
                                        <h4 class="mb-3">Gypsum Sealer Primer</h4>
                                        <p class="mb-4">Prepare your surfaces for a perfect finish with our gypsum sealer primer. It promotes better paint adhesion and creates a uniform base coat.</p>
                                        <a href="" class="ms-2"><button type="button" class="px-4 py-sm-3 px-sm-5 btn btn-primary my-button rounded-pill border-0 animated fadeInRight">Read More</button></a>
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

export default OurServices