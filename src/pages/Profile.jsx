import React from 'react';
import { useSelector } from 'react-redux';

import { Header, Footer, SideMenu, CarForm } from "../components";

const Profile = () => { 

  const carsList = useSelector(state => state.carsList.currentList);
  const user = useSelector((state) => state.user.currentUser);

  return (
    <>
    <Header/>
    <div className="container pb-5 mb-2 mb-md-4 my-4">
      <div className="row">
        <SideMenu carsList={carsList}/>
        <section className="col-lg-8">
            <div className="row">
              <div className="col-md-6">
          
              </div>
            </div>
            <CarForm user={user}/>
        </section>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile;