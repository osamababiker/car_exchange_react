import React from 'react';

import { Header, Footer } from "../../components";


const NotFound = () => {

  return (
    <>
      <Header />
        <div className="container py-5 mb-lg-3">
            <div className="row justify-content-center pt-lg-4 text-center">
                <div className="col-lg-5 col-md-7 col-sm-9">
                <h1 className="display-404 py-lg-3">404</h1>
                <h2 className="h3 mb-4"> </h2>
                </div>
            </div>
        </div>
      <Footer />
    </>
  );
}

export default NotFound;