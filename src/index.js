import {React, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom'; 

import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';

import i18n from 'i18next';
import HttpApi from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import App from './App';
import LoadingImage from './assets/images/capsule-loading.svg';
import 'bootstrap/dist/js/bootstrap.js';


i18n
.use(initReactI18next)
.use(LanguageDetector)
.use(HttpApi)
.init({
  supportedLngs: ['ar', 'en'],
  fallbackLng: "en",
  detection: {
    order: ['path', 'cookie', 'htmlTag', 'localStorage', 'subdomain'],
    caches: ['cookie']
  },
  backend: {
    loadPath: '/locales/{{lng}}/translation.json',
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const loadingMarkup = (
  <div>
    <img 
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
      }}
      src={LoadingImage}  alt="Loading Icon" 
    />
  </div> 
);


root.render(
  <Suspense fallback={loadingMarkup}>
    <HashRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </HashRouter> 
  </Suspense> 
);

