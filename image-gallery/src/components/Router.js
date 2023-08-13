// src/components/Router.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery/Gallery';
import ImageView from './ImageView/ImageView';



function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/image/:id" element={<ImageView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;


