import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import CustomCursor from './components/CustomCursor/CustomCursor';
import Footer from './components/Footer/Footer';
import MainLayout from './pages/MainLayout';
import Reviews from './pages/Reviews';
import useHashScroll from './hooks/useHashScroll';
import './App.css';

function App() {
  useHashScroll();

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
