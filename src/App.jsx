import React from "react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { GalleryPage } from "./pages/GallaryPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom"; 

function Layout() {
  return (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="about" element={<AboutUsPage />} />
        </Route>
      </Routes></BrowserRouter>
  )
}



export default App;