import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import cookies from 'js-cookie';

import { logout } from "../redux/apiCalls";
import UserAvatar from '../assets/images/user.png';


const SideMenu = ({carsList}) => {

  const { t } = useTranslation();
  const user = useSelector((state) => state.user.currentUser);
  const currentLangCode = cookies.get('i18next') || 'ar';
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async (e) => {
    e.preventDefault(); 
    await logout(dispatch);
    navigate("/");
  } 

  return (
    <aside className="col-lg-4 pt-4 pt-lg-0 pe-xl-5">
        <div className="bg-white rounded-3 shadow-lg pt-1 mb-5 mb-lg-0">
        <div className={`d-md-flex justify-content-between align-items-center text-center p-4 ${currentLangCode === 'ar' ? 'text-md-end': 'text-md-start'}`}>
            <div className="d-md-flex align-items-center">
            <div className="img-thumbnail rounded-circle position-relative flex-shrink-0 mx-auto mb-2 mx-md-0 mb-md-0" style={{ width: "6.375rem" }}>
            <img className="rounded-circle" src={UserAvatar} alt="Susan Gardner" /></div>
            <div className="ps-md-3">
                <h3 className="fs-base mb-0"> {user.name} </h3><span className="text-accent fs-sm"> {user.email} </span>
            </div>
            </div><a className="btn btn-primary d-lg-none mb-2 mt-3 mt-md-0" href="#account-menu" data-bs-toggle="collapse" aria-expanded="false"><i className="ci-menu me-2"></i> {t('account_side_menu_label')} </a>
        </div>
        <div className="d-lg-block collapse" id="account-menu">
            <div className="bg-secondary px-4 py-3">
              <h3 className="fs-sm mb-0 text-muted">{t('account_side_menu_title')}</h3>
            </div>
            <ul className="list-unstyled mb-0">
              <li className="border-bottom mb-0">
                <RouterLink className="nav-link-style d-flex align-items-center px-4 py-3" to="/account/orders">
                  {t('account_side_menu_orders_link')}  
                  <span className="fs-sm text-muted me-auto"></span> <i className="ci-bag opacity-60 me-2"></i> 
                </RouterLink>
              </li>
              <li className="border-bottom mb-0">
                <RouterLink className="nav-link-style d-flex align-items-center px-4 py-3" to="/account/carsList"> 
                  {t('account_side_menu_carsList_link')}  <span className="fs-sm text-muted me-auto">{carsList.quantity}</span> <i className="ci-heart opacity-60 me-2"></i> 
                </RouterLink>
              </li>
              <li className="border-bottom mb-0">
                <RouterLink className="nav-link-style d-flex align-items-center px-4 py-3" to="/account"> 
                  {t('account_side_menu_info_link')} <span className="fs-sm text-muted me-auto"></span><i className="ci-user opacity-60 me-2"></i>
                </RouterLink>
              </li>
              <li className="d-lg-none border-top mb-0">
                <a className="nav-link-style d-flex align-items-center px-4 py-3" onClick={handleLogout} href="#logout"> 
                  {t('account_signout_link')} <i className="ci-sign-out opacity-60 me-2"></i> 
                </a>
              </li>
            </ul>
        </div>
        </div>
    </aside>
  );
}

export default SideMenu;