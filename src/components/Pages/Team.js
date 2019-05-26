import React from 'react';
import './Pages.css';

const Team = () => {
  return (
    <main className="p-3 mt-5 team">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="./index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Team
            </li>
          </ol>
        </nav>
        <div className="row align-items-center">
          <div className="col-12 col-md-4 h-100">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus nisi voluptate quis dolores voluptatibus quae excepturi
              porro illum. Cum ipsam ducimus laboriosam excepturi mollitia
              minima, omnis labore voluptates doloribus! Recusandae?
            </p>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
              natus minima modi accusamus commodi porro placeat praesentium
              voluptatem laudantium dolorum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Inventore amet tempora modi
              molestiae enim recusandae?
            </p>
          </div>
          <div className="col-12 col-md-8">
            <img
              className="img-fluid"
              src={require('../../assets/images/img (6).jpg')}
              alt="team"
            />
          </div>
        </div>
        <div className="dflex p-5">
          <h2 className="text-white text-center w-100">Team</h2>
        </div>
        <div className="d-flex flex-row justify-content-center">
          <div className="p-2">
            <img
              src={require('../../assets/images/portrait1.jpg')}
              className="img-thumbnail rounded-circle"
              alt="portrait"
            />
          </div>
          <div className="p-2">
            <img
              src={require('../../assets/images/portrait2.jpg')}
              className="img-thumbnail rounded-circle"
              alt="portrait"
            />
          </div>
          <div className="p-2">
            <img
              src={require('../../assets/images/portrait3.jpg')}
              className="img-thumbnail rounded-circle"
              alt="portrait"
            />
          </div>
          <div className="p-2">
            <img
              src={require('../../assets/images/portrait4.jpg')}
              className="img-thumbnail rounded-circle"
              alt="portrait"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Team;
