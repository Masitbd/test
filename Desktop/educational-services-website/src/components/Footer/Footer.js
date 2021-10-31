import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white page-footer font-small blue pt-4  ">
      <div className="container-fluid text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase">Address</h5>
            <p>
              Borgergade 12 <br /> 1300 København K. <br /> +45 33 18 79 00
            </p>
          </div>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Contact Us</h5>
            <p>
              Mandag til torsdag 9-16 <br />
              Fredag 9-14
            </p>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="text-uppercase">Find Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.linkedin.com/company/studieskolen/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/studieskolen/">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com/Studieskolen">Twitter</a>
              </li>
              <li>
                <a href="https://www.instagram.com/studieskolen/">Instrgram</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        2021 Copyright © studieskolen.dk
      </div>
    </footer>
  );
};

export default Footer;
