import React, { Component } from 'react'

class About extends Component {

    render() {

        return (

            <div>

     <section id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
         <div class="aboutImg">
          <img src="/images/pic9.jpg" class="img-fluid" data-aos="fade-right"   data-aos-duration="1000" alt=""/>
         </div>
        </div>
        <div class="col-lg-7">
        <div class="aboutContent">
          <h1 data-aos="flip-right"  data-aos-duration="1000">About Me.</h1>
          <h3  data-aos="flip-left"  data-aos-duration="1000">web designer adn graphic designer</h3>
          <p  data-aos="flip-down"  data-aos-duration="1000">Lorem ipsum <b>dolor sit amet</b> consectetur 
            adipisicing elit. Nihil modi repellat minus!
             Beatae officia earum natus iusto maxime eos 
             iure vitae, facilis saepe. Illum quis aut 
             accusamus libero molestias, error unde quam,
              et numquam delectus adipisci excepturi quo
               quibusdam? Nostrum.</p>

               <div class="progress" >
                 <div class="pro-valuel">
                   <p>HTML / CSS <span class="text-white float-right">95%</span></p>
                 </div>
               </div>
               <div class="progress">
                 <div class="pro-value2">
                   <p>javascript <span class="text-white float-right">98%</span></p>
                 </div>
               </div>
               <div class="progress">
                 <div class="pro-value3">
                   <p>React Js And Bootstrap <span class="text-white float-right">100%</span></p>
                 </div>
               </div>
               <div class="progress">
                 <div class="pro-value4">
                   <p>Python <span class="text-white float-right">90%</span></p>
                 </div>
               </div>
               <button  data-aos="flip-right"  data-aos-duration="1000" type="button" class="btn3">DOWNLOAD C.V</button>
               <button  data-aos="fade-down-left"  data-aos-duration="1000"  type="button" class="btn4">Contact Us</button>
        </div>
        </div>
      </div>
    </div>
  </section>
                
 </div>
        )
    }
}

export default About;
