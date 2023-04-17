import Button from "@restart/ui/esm/Button";
import React from "react";
import { Form } from "react-bootstrap";

const Footer = () => {
  return (
   <div>
     <div className="text-start mt-5 ">
      <div
        style={{ backgroundColor: "#323232" }}
        className="row gap-5 mx-0 text-light align-items-center justify-content-around"
      >
        <div className="col-lg-6 row justify-content-center text-start mx-0 mt-4 mt-lg-0">
          <div className="col-lg-3 col-4">
            <p className="fw-bold text-secondary mb-3">SERVICES</p>
            <p style={{ fontSize: '14px' }}>Branding</p>
            <p style={{ fontSize: '14px' }}>Marketing</p>
            <p style={{ fontSize: '14px' }}>Advertisement</p>
          </div>
          <div className="col-lg-3 col-4">
            <p className="fw-bold text-secondary mb-3">COMPANY</p>
            <p style={{ fontSize: '14px' }}>About us</p>
            <p style={{ fontSize: '14px' }}>Contact</p>
            <p style={{ fontSize: '14px' }}>Jobs</p>
          </div>
          <div className="col-lg-3 col-4">
            <p className="fw-bold text-secondary mb-3">LEGAL</p>
            <p style={{ fontSize: '14px' }}>Terms of use</p>
            <p style={{ fontSize: '14px' }}>Privacy policy</p>
            <p style={{ fontSize: '14px' }}>Cookie policy</p>
          </div>

        </div>
        
        <div className="col-lg-5 mt-lg-3">
          <Form action="https://formspree.io/f/mpzeodew" method="POST">
            <h3 className="fw-bolder">FeedBack</h3>
            <Form.Group className="my-2">
              <Form.Control name="Name" type="text" placeholder="Name" />
            </Form.Group>

            <Form.Group className="mt-3">
              <Form.Control name="phone" type="number" placeholder="Phone Number" />
            </Form.Group>

            <Form.Group className="mt-3 ">
              <Form.Control name="message" type="text" style={{ height: '150px'}}  placeholder="Message" />
            </Form.Group>
            <Button className="btn btn-dark px-4 mt-4 " type="submit">
              Submit
            </Button>
          </Form>
        </div>
        <div className=" text-center mb-2" > © 2023 All rights reserved. First Choice Medical Center</div>
      </div>
      

    </div>

    
   </div>
  );
};

export default Footer;
