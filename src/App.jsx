import React from "react";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer";
import { GalleryPage } from "./pages/GallaryPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { ServicesPage } from "./pages/ServicesPage";
import { Routes, Route, Link, RouterProvider, createBrowserRouter } from "react-router-dom"; 

function Layout() {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/gallery", element: <GalleryPage /> },
  { path: "/services", element: <ServicesPage /> },
  { path: "/contact", element: <ContactUsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
    // <div>
    //   {/* <Header />
    //   <HomePage />
    //   <Footer /> */}
    // </div>
}


export default App;