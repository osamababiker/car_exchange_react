import React from 'react';

import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls"; 

import { Header, Footer } from "../components";

const Login = () => {

  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const device_name = 'windows';

  const dispatch = useDispatch();
  const { isFetching, error, errorCode } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault(); 
    await login(dispatch, {email, password, device_name}); 
  }

  return (
    <>
        <Header/>
          <div className="container my-4">
            <div className="row">
              <div className="mx-auto col-10 col-md-8 col-lg-6 my-4">
                <form className="needs-validation" autoComplete="off" noValidate >
                <div className="mb-3">
                  <label className="form-label" htmlFor="si-email">{t('signin_modal_email_label')}</label>
                  <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="email" id="si-email" placeholder={t('signin_modal_email_placeholder')} required />
                  <div className="invalid-feedback"></div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="si-password">{t('signin_modal_password_label')}</label>
                  <div className="password-toggle">
                    <input onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder={t('signin_modal_password_placeholder')} type="password" id="si-password" required />
                    <label className="password-toggle-btn" aria-label="Show/hide password">
                      <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                    </label>
                  </div>
                </div>
                <div className="mb-3 d-flex flex-wrap justify-content-between">
                  <RouterLink to="/register">
                    <span style={{ cursor: "pointer" }} className="fs-sm">
                      {t('sign_in_create_account')}
                    </span>
                  </RouterLink>
                </div>
                <button onClick={handleLogin} disabled={isFetching} className={`btn btn-primary btn-shadow d-block w-100 ${isFetching ? ' btn-disabled ' : ''}`} type="submit">{t('signin_modal_signin_btn')}</button>
                {error && <div className='alert alert-danger mt-2' role="alert">{ errorCode === 401 ? t('signin_modal_error') : t('general_error')  }</div>  }
              </form>
              </div>
            </div>
          </div>
        <Footer />
    </>
  )
}

export default Login;