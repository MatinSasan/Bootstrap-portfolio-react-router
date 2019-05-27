import React from 'react';

const Contact = () => {
  return (
    <main className="p-3 mt-5">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="./index.html">Home</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
        <h1 className="p-5 w-100 text-center">Contact us</h1>
        <div className="d-flex justify-content-center">
          <form className="w-75" action="" method="POST">
            <div className="form-group row">
              <label className="col-sm-2" for="subject">
                Subject
              </label>
              <input
                type="text"
                className="form-control col-sm-10"
                name="subject"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-2" for="name">
                Name
              </label>
              <input
                type="text"
                className="form-control col-sm-10"
                name="name"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-2" for="email">
                Your email
              </label>
              <input
                type="email"
                className="form-control col-sm-10"
                name="_replyto"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-2" for="name">
                Content
              </label>
              <textarea
                className="form-control col-sm-10"
                name="content"
                rows="3"
              />
            </div>
            <div className="form-group row">
              <button className="btn btn-primary col-12" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
