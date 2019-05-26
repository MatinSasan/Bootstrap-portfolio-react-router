import React from 'react';

const Contact = () => {
  return (
    <main class="p-3 mt-5">
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="./index.html">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Contact
            </li>
          </ol>
        </nav>
        <h1 class="p-5 w-100 text-center">Contact us</h1>
        <div class="d-flex justify-content-center">
          <form class="w-75" action="" method="POST">
            <div class="form-group row">
              <label class="col-sm-2" for="subject">
                Subject
              </label>
              <input
                type="text"
                class="form-control col-sm-10"
                name="subject"
              />
            </div>
            <div class="form-group row">
              <label class="col-sm-2" for="name">
                Name
              </label>
              <input type="text" class="form-control col-sm-10" name="name" />
            </div>
            <div class="form-group row">
              <label class="col-sm-2" for="email">
                Your email
              </label>
              <input
                type="email"
                class="form-control col-sm-10"
                name="_replyto"
              />
            </div>
            <div class="form-group row">
              <label class="col-sm-2" for="name">
                Content
              </label>
              <textarea
                class="form-control col-sm-10"
                name="content"
                rows="3"
              />
            </div>
            <div class="form-group row">
              <button class="btn btn-primary col-12" type="submit">
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
