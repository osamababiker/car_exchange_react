import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../redux/apiCalls";
import { useNavigate } from "react-router-dom";

import { SideMenu, CarForm } from "../components";

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
    <div className="container pb-5 mb-2 mb-md-4">
      <div className="row">
        <SideMenu carsList={carsList}/>
        <section className="col-lg-8">
            <div className="d-none d-lg-flex justify-content-between align-items-center pt-lg-3 pb-4 pb-lg-5 mb-lg-3">
              <h6 className="fs-base text-light mb-0"> {t('account_update_profile_label')} :</h6>
              <a className="btn btn-primary btn-sm" href="#logout" onClick={handleLogout}> {t('account_signout_link')} <i className="ci-sign-out me-2"></i></a>
            </div>
            <CarForm user={user}/>
        </section>
      </div>
    </div> 
  );
}

export default Profile;