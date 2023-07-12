import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { Header, Footer } from "../components";

const Register = () => {

  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");
  const device_name = 'windows'; 

  const dispatch = useDispatch();
  const { isFetching, error, errorCode } = useSelector((state) => state.user);

  const handelRegister = (e) => {
    e.preventDefault();
    register(dispatch, {
      name,
      phone,
      email,
      password,
      password_confirmation,
      device_name
    });
  }

  return (
    <>
        <Header/>
          <div className="">
          <form className="needs-validation tab-pane fade" autoComplete="off" noValidate id="signup-tab">
              <div className="mb-3">
                <label className="form-label" htmlFor="su-name">{t('signin_modal_name_label')}</label>
                <input className="form-control" onChange={(e) => setName(e.target.value)} type="text" id="su-name" placeholder={t('signin_modal_name_placeholder')} required />
                <div className="invalid-feedback"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="su-email">{t('signin_modal_email_label')}</label>
                <input className="form-control" onChange={(e) => setEmail(e.target.value)}  type="email" id="su-email" placeholder={t('signin_modal_email_placeholder')} required />
                <div className="invalid-feedback"></div>
              </div>
              <div className="mb-3">
                <label htmlFor="su-email">{t('signin_modal_phone_label')}</label>
                <input className="form-control" onChange={(e) => setPhone(e.target.value)}  type="tel" id="su-phone" placeholder={t('signin_modal_phone_placeholder')} required />
                <div className="invalid-feedback"></div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password">{t('signin_modal_password_label')}</label>
                <div className="password-toggle">
                  <input className="form-control" onChange={(e) => setPassword(e.target.value)}  placeholder={t('signin_modal_password_placeholder')} type="password" id="su-password" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check"  type="checkbox" /><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="su-password-confirm">{t('signin_modal_confirm_password_label')}</label>
                <div className="password-toggle">
                  <input className="form-control" onChange={(e) => setPasswordConfirmation(e.target.value)}  type="password" placeholder={t('signin_modal_confirm_password_placeholder')} id="su-password-confirm" required />
                  <label className="password-toggle-btn" aria-label="Show/hide password">
                    <input className="password-toggle-check" type="checkbox" /><span className="password-toggle-indicator"></span>
                  </label>
                </div>
              </div>
              <button onClick={handelRegister} disabled={isFetching}  className={`btn btn-primary btn-shadow d-block w-100 ${isFetching ? ' btn-disabled ' : ''}`} type="submit">{t('signin_modal_signup_btn')}</button>
              {error && <div className='alert alert-danger mt-2' role="alert">{ errorCode === 401 ? t('signin_modal_error') : t('general_error')  }</div>  }
            </form>
          </div>
        <Footer />
    </>
  )
}

export default Register;