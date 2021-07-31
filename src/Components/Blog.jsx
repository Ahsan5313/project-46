import React, { Component } from 'react'

class Blog extends Component {

    render() {

        return (

            <div>
                 <section id="blog">
      <div class="container">
        <div class="blogHeading">
          <h2 data-aos="zoom-out-down" data-aos-duration="1000">our blog</h2>
        </div>
        <div class="row">
          <div class="col-lg-4" >
            <div class="card" data-aos="fade-right"   data-aos-duration="1000">
              <img src="/images/pic5.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="card-body">
             <div class="cardContent">
              <h5>web design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Est ipsa vero tempora ?</p>

                  <a href="#">Read More</a>
             </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card" data-aos="fade-up"   data-aos-duration="1000">
              <img src="/images/pic3.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="card-body">
             <div class="cardContent">
              <h5>web design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Est ipsa vero tempora ?</p>

                  <a href="#">Read More</a>
             </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="card" data-aos="fade-left"   data-aos-duration="1000">
              <img src="/images/pic4.jpg" class="img-fluid" alt=""/>
            </div>
            <div class="card-body">
             <div class="cardContent">
              <h5>web design</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 Est ipsa vero tempora ?</p>

                  <a href="#">Read More</a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
/

    <section id="contact">
      <div class="container">
        <div class="contactHeader">
          <h2>Contact Us.</h2>   
        </div>
        <div class="row ">
          <div class="col-lg-4" data-aos="fade-right"   data-aos-duration="1000">
            <div class="addressIcon">
              <i class="fas fa-location-arrow"></i>
            </div>
            <div class="addressContent">
              <h3>Address</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-down"   data-aos-duration="1000">
            <div class="addressIcon">
              <i class="fas fa-envelope-square"></i>
            </div>
            <div class="addressContent">
              <h3>Email</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-right"   data-aos-duration="1000">
            <div class="addressIcon">
              <i class="fas fa-phone"></i>
            </div>
            <div class="addressContent">
              <h3>Phone</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
    
        <div class="row mt-4">
          <div class="col-lg-6">
            <form >
              <input type="text" placeholder='Name' class="form-control" />
            </form>
          </div>
          <div class="col-lg-6">
            <form >
              <input type="email" placeholder='Email' class="form-control" />
            </form>
          </div>
          <div class="col-lg-12 mt-4">
            <form >
              <textarea class="form-control" placeholder="Message" name="" id="" cols="30" rows="10"/>
            </form>
          </div>
        </div>

        </div>
        </section>



            </div>
        )
    }
}
export default Blog