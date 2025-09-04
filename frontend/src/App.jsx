import React, { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "antd/dist/reset.css";
import Navbar from "./components/Navbar/Navbar";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import Footer from "./components/Footer/Footer";
import MainLayout from "./pages/MainLayout";
import Reviews from "./pages/Reviews/Reviews";
import useHashScroll from "./hooks/useHashScroll";
import ToastMessage from "./components/toast/toast";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import AntdThemeContext from "./context/AntdThemeContext";
import Loader from "./components/Loader/Loader";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

const AppContent = () => {
  useHashScroll();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <ToastMessage />
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
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ThemeProvider>
      <AntdThemeContext>
        <AppContent />
      </AntdThemeContext>
    </ThemeProvider>
  );
}

export default App;
