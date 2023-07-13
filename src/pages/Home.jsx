import React from 'react';
import { useState, useEffect } from 'react';
import { publicRequest } from '../requestMethod';
import { Header, Footer, Cars } from "../components";

const Home = () => {

  const [carsList, setCarsList] = useState([]);
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await publicRequest.get('/cars');
        setCarsList(res.data);
      } catch (err) {console.log(err)}
    }
    fetchCars();
  },[]);


  return (
    <>
        <Header/>
         <Cars cars={carsList} />
        <Footer />
    </>
  )
}

export default Home;