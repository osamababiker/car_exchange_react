import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Header, Footer } from "../components";

const Login = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const device_name = 'windows';

  const dispatch = useDispatch();
  const { isFetching, error, errorCode } = useSelector((state) => state.user);

  const handleLogin = async (e) => {
    e.preventDefault();
  }

  const handelForgetLink = (e) => {
    e.preventDefault(); 
  }

  return (
    <>
        <Header/>
          <div className="">
          <form className="needs-validation tab-pane fade show active" autoComplete="off" noValidate >
              <div className="mb-3">
                <label className="form-label" htmlFor="si-email">Email Address</label>
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
                <div className="form-check mb-2">
                  <input className="form-check-input" type="checkbox" id="si-remember" />
                  <label className="form-check-label" htmlFor="si-remember">{t('signin_modal_remember_me')}</label>
                </div>
                <span style={{ cursor: "pointer" }} onClick={handelForgetLink} className="fs-sm">
                  {t('signin_modal_forget_password')}
                </span>
              </div>
              <button onClick={handleLogin} disabled={isFetching} className={`btn btn-primary btn-shadow d-block w-100 ${isFetching ? ' btn-disabled ' : ''}`} type="submit">{t('signin_modal_signin_btn')}</button>
              {error && <div className='alert alert-danger mt-2' role="alert">{ errorCode === 401 ? t('signin_modal_error') : t('general_error')  }</div>  }
            </form>
          </div>
        <Footer />
    </>
  )
}

export default Login;