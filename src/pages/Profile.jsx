import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer, SideMenu, Cars, CarForm } from "../components";

const Profile = () => { 
  
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
    <Header/>
    <div className="container pb-5 mb-2 mb-md-4 my-4">
      <div className="row">
        <SideMenu />
        <section className="col-lg-8">
            <CarForm user={user}/>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile;