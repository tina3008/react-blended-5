import {  Header,Loader } from 'components';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { getUserInfo } from 'service/opencagedataApi.js';

const HomePage = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates.jsx'));
export const App = () => {
  useEffect(() => {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos) {
   
getUserInfo(pos.coords);
    
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  navigator.geolocation.getCurrentPosition(success, error, options);
},[])
 
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rates" element={<Rates />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
