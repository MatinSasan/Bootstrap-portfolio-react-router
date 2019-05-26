import React from 'react';
import './Pages.css';

const Index = () => {
  return (
    <main className="p-3 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
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
          <div className="col-12 col-md-6">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (3).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">Photo by Adrianna Calvo</h5>
            </div>
          </div>
          <div className="col-12">
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
          <div className="col-12 col-md-6">
            <img
              className="img-fluid pt-3 pb-3"
              src={require('../../assets/images/img (2).jpg')}
              alt="some pic"
            />
            <div className="img-desc">
              <h5 className="p-5 mt-5 text-center">Photo by Tim Savage</h5>
            </div>
          </div>
          <div className="col-12 col-md-6">
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

export default Index;
