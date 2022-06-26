import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Carousel from 'react-bootstrap/Carousel'
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import NavbarHome from "./NavbarHome";
import HomeCarousel from "./HomeCarousel";
import HomeCollapse from "./HomeCollapse";

import HomeContact from './HomeContact';

const Home = () => {


    return (

      <div class="">
      <NavbarHome/>

{/*
<HomeCollapse/>
   first code
      <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
              <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://img.naidunia.com/naidunia/indian_armed_forces_16_05_2019.jpg" width="428" height="428" alt="logo" style={{float:'center'}} />
              </div>

                  <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1 " >
                      <a href="/login" class="btn btn-primary btn-lg active " role="button" aria-pressed="true">User Login</a><br /><br />

                      <a href="/register" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">User Register</a>
                  </div>
          </div>
      </div>*/}
      <div className="container ta">

      <div class="row">

        <div class="col-lg-6">
          <h1 class="big-heading">Login to fill Form Online</h1>
{/*<button class="login-btn" >User Login</button>
<button class="login-btn" >User Register</button>
<a href="/login" class="btn btn-primary btn-lg active " role="button" aria-pressed="true">User Login</a><br /><br />

<a href="/register" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">User Register</a>
*/}
</div>

<div class="col-lg-6">
{/*npm install @mui/icons-material*/}
<a href="/login" class="btn btn-lg btn-outline-primary my-2 my-sm-0" type="submit"><LoginIcon />User Login</a><br /><br />
<a href='/register' class="btn btn-lg btn-outline-primary my-2 my-sm-0" type="submit"><HowToRegIcon />User Register</a>
     </div>

      {/*  <div class="col-lg-6">
          <img class="title-image" src="https://img.naidunia.com/naidunia/indian_armed_forces_16_05_2019.jpg" alt="iphone-mockup" />
        </div>*/}
      </div>

      </div>
      <HomeCarousel/>
    {/*  <Carousel variant="dark">
        <Carousel.Item>
          <img
            className=" "
            src="https://apsainik.org.in/assets/img/sainiklogo.png" width={900} height={50}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Second slide&bg=eee"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=e5e5e5"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>{/**/}

      <div className='colored-section' id='rti'>
      <div class="container ">
      <div class="container ">
      <div class="container al-p ">
<strong  className='contact-h bot-pad'>Procedure for Seeking Information</strong><br /><br />
      <p class="about-hos"> Required information may be asked through an application along with IPO/DD for a sum of Rs 10/- in favors of Director, Department of Sainik Welfare, Puducherry.</p>
</div></div>

</div>

</div>
<HomeContact/>

      </div>

    )
}

export default Home
{/*
<div class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
          alt="Sample image" />
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
            <p class="lead fw-normal mb-0 me-3">Sign in with</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-linkedin-in"></i>
            </button>
          </div>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0">Or</p>
          </div>


          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid email address" />
            <label class="form-label" for="form3Example3">Email address</label>
          </div>

          <div class="form-outline mb-3">
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            <label class="form-label" for="form3Example4">Password</label>
          </div>

          <div class="d-flex justify-content-between align-items-center">
            <div class="form-check mb-0">
              <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
              <label class="form-check-label" for="form2Example3">
                Remember me
              </label>
            </div>
            <a href="#!" class="text-body">Forgot password?</a>
          </div>

          <div class="text-center text-lg-start mt-4 pt-2">
            <button type="button" class="btn btn-primary btn-lg"
              style="padding-left: 2.5rem; padding-right: 2.5rem;">Login</button>
            <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                class="link-danger">Register</a></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>

    <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </div>
</div>
*/}
