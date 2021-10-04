import React from "react";
import img from "../../images/teacher.jpg";

// this variable  will show the about page

const About = () => {
  return (
    <div>
      <div className="d-lg-flex justify-content-evenly align-items-center my-5 text-center">
        <div className="w-md-50 mx-5 mx-md-2">
          <h3 className="text-primary text-center">World Class Facilities</h3>
          <p className="fw-bold text-center">
            The concept of our coaching center consists of all programs of SSC
            and HSC in our academy.We have best teachers among the Dhaka
            city.They are so caring and want to teach student.{" "}
          </p>
        </div>
        <div className="w-md-50">
          <img className="w-75 mx-auto" src={img} alt="" />
        </div>
      </div>
      <div>
        <h1 className="text-primary text-center mb-4">Testimonials about center</h1>
        <div className="d-lg-flex mb-4">
          <div className="border border-dark">
            <p className="text-center p-3">
              My younger son returns happy with all activites happening in your
              center. He always share me how he learn a lot of methods from your teachers.
            </p>
            <h4 className="text-primary text-center">-Shah Ali</h4>
          </div>
          <div className="border border-dark">
            <p className="text-center p-3">
              My brother used to fail in Chemistry always. But beacuse of your
              center's teaching method now he get 80% marks in each and every
              subject.We are so happy for him.
            </p>
            <h4 className="text-primary text-center">-Shayla Afrin</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
