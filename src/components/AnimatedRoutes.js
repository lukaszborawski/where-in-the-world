import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Countries from '../pages/Countries';
import CountryDetail from '../pages/CountryDetail';
import { AnimatePresence } from 'framer-motion';

const AnimatedRoutes = () => {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/where-in-the-world' element={<Countries />} />
        <Route path='/where-in-the-world/country/:id' element={<CountryDetail />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;