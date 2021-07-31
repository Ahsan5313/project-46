import React, { Component } from 'react'

class Services extends Component {

    render() {

        return (
            <div>

            <section id="services">
                <div class="container">
                <div class="row">
                <div class="col-12">
                    <h1>Services</h1>
                </div>
                </div>
                <div class="services">
                <div class="row">
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-right"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-desktop"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>web design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 py-lg-0 py-sm-3">
                    <div class="card" data-aos="fade-up"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-mobile-alt"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>fully responsive</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-left"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-code"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>development</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row py-5">
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-right"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-desktop"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>web design</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4 py-lg-0 py-sm-3">
                    <div class="card" data-aos="fade-down"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-mobile-alt"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>fully responsive</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="col-lg-4">
                    <div class="card" data-aos="fade-left"   data-aos-duration="1000">
                        <div class="card-body">
                        <div class="circle">
                            <span><i class="fas fa-code"></i></span>
                        </div>
                        <div class="servicesContent">
                        <h4>development</h4>
                        <p>Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Expedita ipsum unde est 
                            aut. Illo, dignissimos ex distinctio aperiam
                            porro exercitationem.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
            </section>

      

            <section id="filter">
                <div class="container">
                <h1>More Services</h1>
                <div class="control">
                <ul>
                    <li  data-aos="fade-down-right"  data-aos-duration="1000" class="button active"  data-filter="filter">All</li>
                    <li  data-aos="fade-up-left"  data-aos-duration="1000" class="button active"  data-filter="Brand">Brand</li>
                    <li  data-aos="fade-down-right"  data-aos-duration="1000" class="button active"  data-filter="Design">Design</li>
                    <li  data-aos="fade-down-left"  data-aos-duration="1000" class="button active"  data-filter="Graphic">Graphic</li>
                </ul>
                </div>
                <div class="row">
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-right"   data-aos-duration="1000">
                    <img src="/images/pic3.jpg" class="img-fluid filter Brand Design Graphic" alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-up"   data-aos-duration="1000">
                    <img src="/images/pic5.jpg" class="img-fluid filter Brand Design Graphic" alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-left"   data-aos-duration="1000">
                    <img src="/images/pic4.jpg" class="img-fluid filter Brand Design" alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                </div>
                <div class="row pt-5">
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-right"   data-aos-duration="1000">
                    <img src="/images/pic3.jpg" class="img-fluid filter Design" alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-down"   data-aos-duration="1000">
                    <img src="/images/pic5.jpg" class="img-fluid filter" alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="imgFilter" data-aos="fade-left"   data-aos-duration="1000">
                    <img src="/images/pic4.jpg" class="img-fluid filter " alt=""/>
                    <span>
                        <i class="fas fa-plus" data-toggle="modal" data-target="#portfoliomodal"></i>
                    </span>
                    </div>
                </div>
                </div>
                </div>
            </section>

            


            <div class="portfolio modal fade mt-5" id="portfoliomodal" aria-hidden="true" role="dialog">
                <div class="modal-dialog modal-md" role="document">
                <div class="modal-content text-center">
                    <div class="modal-body text-center">
                    <div class="container-fluid py-3">
                        <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <img src="/images/pic4.jpg" class="img-fluid rounded" alt=""/>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

        

            <div class="portfolio modal fade mt-5" id="portfoliomodal" aria-hidden="true" role="dialog">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content text-center">
        <div class="modal-body text-center">
          <div class="container-fluid py-3">
            <div class="row justify-content-center">
              <div class="col-lg-12">
                <img src="/images/pic4.jpg" class="img-fluid rounded" alt=""/>
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
}
export default Services;