import React from 'react';
import { useTranslation } from "react-i18next";
import { Link as RouterLink , useNavigate} from 'react-router-dom';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useEffect } from 'react';

import EnFlag from '../assets/images/flags/en.png';
import ArFlag from '../assets/images/flags/ar.png';


const Header = () => {
  
  const { t } = useTranslation();
  const languages = [
    {code: 'en',name: 'English',country_code: 'gb',dir: 'ltr'},
    { code: 'ar',name: 'العربية',country_code: 'sa',dir: 'rtl'}, 
  ];

  const currentLangCode = cookies.get('i18next') || 'ar';
  const currentLang = languages.find(lang => lang.code === currentLangCode);

  const navigate = useNavigate();
  useEffect(() => {
    document.body.dir = currentLang.dir;
    if(currentLang.code === 'ar')  
      document.body.style.fontFamily = 'Tajawal, sans-serif';
  }, [currentLang]);

  return (  
    <header className="shadow-sm">
      <div className="topbar topbar-dark bg-dark">
        <div className="container"> 
          <div>
            <div className="topbar-text dropdown disable-autohide">
              <a className="topbar-link dropdown-toggle" href="#home" data-bs-toggle="dropdown">
                <img className={`${currentLang === 'ar' ? 'ms-2' : 'me-2'}`} src={currentLangCode === 'ar' ? ArFlag : EnFlag} width="20" alt={ currentLangCode === 'ar' ? t('arabic') : t('english') } /> { currentLangCode === 'ar' ? t('arabic') : t('english') }  
              </a> 
              <ul className={`dropdown-menu my-1 ${currentLangCode === 'ar' ? "text-right" : ""}`}>
                <li><button className="dropdown-item pb-1" onClick={() => i18next.changeLanguage('en')}><img className="me-2" src={EnFlag} width="20" alt={ t('english') } /> { t('english') } </button></li>
                <li><button className="dropdown-item pb-1" onClick={() => i18next.changeLanguage('ar')}><img className="me-2" src={ArFlag} width="20" alt={ t('arabic') } /> { t('arabic') } </button></li>
              </ul>
            </div>
            <div className={`topbar-text text-nowrap d-none d-md-inline-block border-light ms-3 ${currentLangCode === 'ar' ? 'border-end pe-3' : 'border-start ps-3'}`}><span className={`text-muted ${currentLangCode === 'ar' ? 'ms-1' : 'me-1'}`}> { t('avilable_24') } </span><a className="topbar-link" dir='ltr' href='tel:971565963410'> 971565963410 </a></div>
          </div>
          <div className={`topbar-text dropdown d-md-none  ${currentLangCode === 'ar' ? 'me-auto' : 'ms-auto'}`}><a className="topbar-link dropdown-toggle" href="/" data-bs-toggle="dropdown"> { t('main_menu_whishlist_link') }  </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#signin-modal" data-bs-toggle="modal">
                  <i className="ci-heart text-muted me-2"></i> { t('main_menu_whishlist_link') } ( 4 ) 
                </a>
              </li>
            </ul>
          </div>
          <div className="d-none d-md-block ms-3 text-nowrap">
            <a className="topbar-link d-none d-md-inline-block" href="#signin-modal" data-bs-toggle="modal">
              <i className="ci-heart mt-n1"></i> { t('main_menu_whishlist_link') } ( 4 )
            </a>
          </div>
        </div>
      </div>
      <div className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <RouterLink className="navbar-brand d-none d-sm-block me-3 flex-shrink-0" to="/">
              <img src="" width="142" alt={ t('site_name') } />
            </RouterLink>
            <RouterLink className="navbar-brand d-sm-none me-2" to="/">
              <img src="" width="74" alt={ t('site_name') } />
            </RouterLink>
            <div className="input-group d-none d-lg-flex flex-nowrap mx-4"><i className="ci-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
              <input onChange={(e) => navigate(`/shop/${e.target.value}`)} className="form-control top-search-bar rounded-start w-100" type="text" placeholder={ t('top_header_search_placeholder') } />
            </div>
            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"><span className="navbar-toggler-icon"></span></button><a className="navbar-tool navbar-stuck-toggler" href="/"><span className="navbar-tool-tooltip">Toggle menu</span>
                <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-menu"></i></div></a>
                <RouterLink className="navbar-tool ms-1 ms-lg-0 me-n1 me-lg-2" to="/login">
                  <div className="navbar-tool-icon-box"><i className="navbar-tool-icon ci-user"></i></div>
                  <div className="navbar-tool-text ms-n3"><small> {t('top_header_signin_link')} </small> {t('top_header_account_link')} </div>
                </RouterLink>
              <div className={`navbar-tool dropdown ${currentLangCode === 'ar' ? 'me-3' : 'ms-3'}`}>
                <RouterLink className='navbar-tool-icon-box bg-secondary dropdown-toggle' to='/cart'>
                  <span className="navbar-tool-label">4</span><i className="navbar-tool-icon ci-cart"></i>
                </RouterLink>
                <RouterLink className='navbar-tool-text' to='/cart'>
                  <small>{t('top_header_cart_link')}</small> 600 { t('aed') }
                </RouterLink>
                <div className={`dropdown-menu ${currentLangCode === 'ar' ? 'dropdown-menu-start' : 'dropdown-menu-end'}`}> 
                  <div className="widget widget-cart px-3 pt-2 pb-3" style={{ width: "20rem" }}>

                    <div  style={{ height: "15rem" }} data-simplebar data-simplebar-auto-hide="false">

                    </div>

                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                      <div className="fs-sm me-2 py-2"><span className="text-muted"> {t('top_header_cart_total')} : </span><span className="text-accent fs-base ms-1"> 600 { t('aed') } </span></div>
                    </div>
                      <RouterLink className='btn btn-primary btn-sm d-block w-100' to='/checkout'>
                        {t('top_header_cart_checkout_link')} <i className="ci-card me-2 fs-base align-middle"></i>
                      </RouterLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;