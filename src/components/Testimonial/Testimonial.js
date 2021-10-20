import React from "react";
// import TestimonialImage from './../../../src/assests/images/grp.jpg';
import { faHeart, faStethoscope, faUserMd, faAmbulance } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Testimonial.css'

const Testimonial = () => {
  return (
    <div>
      <div className="container">
        <div className="row my-4 py-4">
          <div className="col-md-3 d-flex justify-content-center align-items-center">
            <h1 className="fw-bold animate__bounce">Why <br /> We <br /> Special</h1>
          </div>
          <div className="col-md-9">
            <div className="row">
              <div className="col-md-4">
                <h5 className=" fw-bold">Intensive Care</h5>
                <p className="text-muted">
                  We care for all kinds of paitient who are serious paitient we give them intensive care.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Non-Professional services</h5>
                <p className="text-muted">
             Ours care is  like a mother's care for her baby, We give them treatment most loveable way. 
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">24 Hours service</h5>
                <p className="text-muted">
                We give service all day long, whole day there are doctors ,nurses and healthcare workers for giving at most care for the paitient.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <h5 className="fw-bold">Best Medical Care</h5>
                <p className="text-muted">
                 Here we give best medical care, by which paitient can save theeir lives.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">High Qualified  doctors</h5>
                <p className="text-muted">
                  With the help of doctors paotient can  get best services, and live healthy life.
                </p>
              </div>
              <div className="col-md-4">
                <h5 className="fw-bold">Dedicated patient care</h5>
                <p className="text-muted">
                 Best operation theatre and 
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img className="img-fluid" src='https://i.ibb.co/0r5PsLQ/Group-of-doctors-standing-at-hospital-building-Team-of-practitioners-and-ambulance-car-in-background.jpg' alt="" />
        </div>

        <section>
          <div className="container-fluid">
            <div className="row mt-3 mb-4">
              <div className="col-md-3  bg-testimonial">
                <div className="text-center p-5">
                  <span className="icon"> <FontAwesomeIcon icon={faHeart} /></span>
                  <h2>Heart Rate</h2>
                  <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                </div>
              </div>
              <div className="col-md-3 bg-testimonial-cng">
                <div className="text-center  p-5">
                  <span className="icon"><FontAwesomeIcon icon={faStethoscope} /></span>
                  <h2>Medical Counseling</h2>
                  <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                </div>
              </div>
              <div className="col-md-3 bg-testimonial">
                <div className="text-center  p-5">
                  <span className="icon"><FontAwesomeIcon icon={faUserMd} /></span>
                  <h2>Qualified Doctors</h2>
                  <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                </div>

              </div>
              <div className="col-md-3 bg-testimonial-cng">
                <div className="text-center  p-5">
                  <span className="icon"><FontAwesomeIcon icon={faAmbulance} /></span>
                  <h2>Emergency Services</h2>
                  <p>Duis autem vel eum iriure dolor in hendr erit in vulpt feugiat nulla facilisis utate velit esse molestie consequat</p>
                </div>

              </div>
            </div>
          </div>
        </section>



      </div>
    </div>
  );
};

export default Testimonial;
