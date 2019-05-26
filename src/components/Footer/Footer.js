import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="mt-5 mb-5 pt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">&copy; 2019 Some Portfolio</div>
          <div className="col-12 col-md-3">
            Some No., Some Street, Some Town, Some Country
          </div>
          <div className="col-12 col-md-3">info@fakemail.com</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
