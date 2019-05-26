import React from 'react';

const Portfolio = () => {
  return (
    <main className="p-3 mt-5">
      <div className="container">
        <div className="button-group filters-button-group">
          <button className="btn btn-link is-checked" data-filter="*">
            show all
          </button>
          <button className="btn btn-link" data-filter=".portrait">
            Portrait
          </button>
          <button className="btn btn-link" data-filter=".landscape">
            Landscape
          </button>
        </div>
        <div className="row grid">
          <div className="col-12 col-md-6 element-item landscape">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (4).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">
                Photo by by Luis Quintero
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-6 element-item landscape">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (3).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">Photo by Adrianna Calvo</h5>
            </div>
          </div>
          <div className="col-12 element-item landscape">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (1).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">
                Photo by The Lazy Artist Gallery
              </h5>
            </div>
          </div>
          <div className="col-12 col-md-6 element-item portrait">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (2).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">Photo by Tim Savage</h5>
            </div>
          </div>
          <div className="col-12 col-md-6 element-item">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (5).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">Photo by Engin Akyurt</h5>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
