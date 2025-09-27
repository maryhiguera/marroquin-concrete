import { ContactUsPage } from "./ContactUsPage.jsx";
import { ServicesPage } from "./ServicesPage.jsx";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { AboutUsPage } from "./AboutUsPage.jsx";
import Backyard from '../assets/Backyard.png';
import Sidehouse from '../assets/sidehouse.png';
import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';

export function HomePage() {
  return (
    <main>
      <div 
        className="position-relative d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${Backyard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "75vh",
          width: "100%",
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", 
            zIndex: 1
          }}
        ></div>

        <div className="position-relative text-center text-white" style={{ zIndex: 2, padding: "0 20px" }}>
          <p className="lead mb-2 text-uppercase fw-bold text-white">
            Marroquin Concrete LLC
          </p>
          <h1 className="display-4 fw-bold mb-4 text-white">
            Your Trusted Partner for
            <br />
            Quality Concrete Solutions in Utah
          </h1>
          <a 
            href="/about" 
            className="btn btn-danger text-uppercase fw-bold" 
            style={{ 
              padding: "1.25rem 2.5rem",
              fontSize: "1rem"
            }}
          >
            More About Us →
          </a>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-4">
          {/* Text Column */}
          <div className="col-lg-5">
            <div className="p-4 bg-light rounded shadow text-center text-lg-start">
              <h3 className="fw-bold mb-3 text-uppercase" style={{ fontSize: "1.75rem" }}>
                About Marroquin Concrete LLC
              </h3>
              <p style={{ fontSize: "1.125rem" }}>
                We started our company in 2022, but our story goes back much further. With 27 years of experience in concrete work, we’ve built more than just projects—we’ve built lasting relationships in our community. As a family-owned business, we bring the same care, honesty, and attention to detail to every job, whether it’s improving your home or taking on a larger commercial project. Our goal is simple: to provide quality concrete work you can count on, while making the process easy and stress-free from start to finish.
              </p>
              <a href="/about" className="btn btn-danger text-uppercase fw-bold mt-3">
                Learn More →
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div className="col-lg-5 text-center">
            <img 
              src={Sidehouse} 
              alt="Side House" 
              className="img-fluid rounded shadow" 
              style={{ maxWidth: "700%", height: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

    <div className="container my-5" style={{ fontSize: "1.2rem" }}>
        <h3 className="mb-4 text-center" style={{ fontSize: "3rem", fontWeight: "bold" }}>Our Services</h3>
        
        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Residential:</strong> We provide high-quality residential concrete services designed to add durability and beauty to your home. From flatwork and foundations to walls, driveways, patios, sidewalks, and curbs, our team delivers craftsmanship that lasts. Whether you're building new or upgrading your outdoor spaces, we ensure every project is completed with precision and care.
        </p>

        <p style={{ marginBottom: "1.5rem" }}>
          <strong>Commercial:</strong> Our commercial concrete services are built to handle projects of any scale with strength and reliability. We specialize in flatwork, footings, walls, curbs, gutters, sidewalks, and large driveways to meet the demands of businesses and developments. With a focus on durability and efficiency, we provide long-lasting solutions tailored to your commercial needs.
        </p>

        {/* Bootstrap Row for Images */}
        <div className="row g-4 mt-3">
          <div className="col-md-6">
            <img 
              src={Stairs1} 
              alt="Stairs" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
          <div className="col-md-6">
            <img 
              src={Stairs2} 
              alt="Stairs" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </div>


      <ContactUsPage />
    </main>
  );
}
