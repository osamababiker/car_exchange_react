import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

import { Header, Footer, SideMenu, CarForm } from "../components";

const Profile = () => { 

  const { t } = useTranslation();
  const carsList = useSelector(state => state.carsList.currentList); 
  const user = useSelector((state) => state.user.currentUser);
  
  const dispatch = useDispatch(); 
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault(); 
    await logout(dispatch);
    navigate("/"); 
  } 

  return (
    <>
    <Header/>
    <div className="container pb-5 mb-2 mb-md-4 my-4">
      <div className="row">
        <SideMenu carsList={carsList}/>
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