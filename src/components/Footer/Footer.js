import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.css';

const Footer = props => {
  console.log(props);
  let footer = null;
  if (props.location.pathname === '/team') {
    console.log('it is');
    footer = (
      <footer className="mt-5 mb-5 pt-5 teamPage">
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
  } else {
    footer = (
      <footer className="mt-5 mb-5 pt-5 otherPages">
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
  }
  return <React.Fragment>{footer}</React.Fragment>;
};

export default withRouter(Footer);
