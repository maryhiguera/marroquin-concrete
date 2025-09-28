import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Backyard from '../assets/Backyard.png';
import Sidehouse from '../assets/sidehouse.png';
import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';
import Steps from '../assets/steps.png';

export function HomePage() {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const SERVICE_ID = "service_ql4glo9";
  const TEMPLATE_ID = "template_ya3gwrv";
  const PUBLIC_KEY = "Sq7MTirsQd3zhzX3N";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(
        () => console.log("SUCCESS!"),
        (error) => console.log("FAILED...", error.text)
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main>

      {/* Hero Section */}
      <div 
        className="position-relative d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${Backyard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "80vh",
          width: "100%",
        }}
      >
        <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }} />
        <div className="position-relative text-white px-3" style={{ zIndex: 2 }}>
          <p className="lead mb-2 text-uppercase fw-bold">Marroquin Concrete LLC</p>
          <h1 className="display-4 fw-bold mb-4">
            Your Trusted Partner for
            <br />
            Quality Concrete Solutions in Utah
          </h1>
          <a 
            href="/about" 
            className="btn btn-danger text-uppercase fw-bold"
            style={{ padding: "1.25rem 2.5rem", fontSize: "1rem" }}
          >
            More About Us →
          </a>
        </div>
      </div>

      {/* About Section */}
      <div className="container my-5">
        <div className="row justify-content-center align-items-center g-4">
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
          <div className="col-lg-5 text-center">
            <img 
              src={Sidehouse} 
              alt="Side House" 
              className="img-fluid rounded shadow" 
              style={{ width: "100%", maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      <div className="container my-5 p-4 border rounded shadow bg-light">
        {/* Title */}
        <h3 className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          Our Services
        </h3>

        {/* Paragraphs */}
        <p className="text-center mb-3" style={{ fontSize: "1.15rem" }}>
          <strong>Residential:</strong> We provide high-quality residential concrete services designed to add durability and beauty to your home. From flatwork and foundations to walls, driveways, patios, sidewalks, and curbs, our team delivers craftsmanship that lasts. Whether you're building new or upgrading your outdoor spaces, we ensure every project is completed with precision and care.
        </p>

        <p className="text-center mb-4" style={{ fontSize: "1.15rem" }}>
          <strong>Commercial:</strong> Our commercial concrete services are built to handle projects of any scale with strength and reliability. We specialize in flatwork, footings, walls, curbs, gutters, sidewalks, and large driveways to meet the demands of businesses and developments. With a focus on durability and efficiency, we provide long-lasting solutions tailored to your commercial needs.
        </p>

        <div className="row g-4 justify-content-center">
          <div className="col-md-4 text-center">
            <img 
              src={Stairs1} 
              alt="Stairs" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-4 text-center">
            <img 
              src={Steps} 
              alt="Steps" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-4 text-center">
            <img 
              src={Stairs2} 
              alt="Stairs" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5 d-flex justify-content-center">
        <div className="row w-100 justify-content-center g-4">
          <div className="col-12 col-lg-5">
            <h2 className="mb-3 text-center text-lg-start" style={{ fontSize: "2rem", fontWeight: "bold" }}>Contact Us</h2>
            <p className="text-center text-lg-start" style={{ fontSize: "1.15rem" }}>
              <strong>Call:</strong> (385) 450-8775 <br />
              <strong>Text:</strong> (801) 361-3315 <br />
              <strong>Email:</strong> Marroquinconcrete@gmail.com
            </p>
            <div className="mt-4">
              <iframe
                title="Utah County Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48221.056152056166!2d-111.7613939!3d40.2989478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d83b9f3c51b07%3A0xe0d9a0545cf70d4d!2sUtah%20County%2C%20UT!5e0!3m2!1sen!2sus!4v1695518352785!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-12 col-lg-7 d-flex justify-content-center">
            <div className="p-4 border rounded shadow bg-light w-100">
              <h3 className="mb-3 text-center" style={{ fontSize: "1.75rem", fontWeight: "bold" }}>Send Us a Message</h3>
              <form ref={form} onSubmit={sendEmail} className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: "1.1rem" }}>Full Name</label>
                  <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: "1.1rem" }}>Email Address</label>
                  <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: "1.1rem" }}>Phone / Mobile Number</label>
                  <input type="tel" name="phone" className="form-control" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" style={{ fontSize: "1.1rem" }}>Service Needed</label>
                  <input type="text" name="service" className="form-control" value={formData.service} onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label" style={{ fontSize: "1.1rem" }}>Message</label>
                  <textarea name="message" className="form-control" rows="5" value={formData.message} onChange={handleChange} required />
                </div>
                <div className="col-12 text-center">
                  <button type="submit" className="btn btn-danger px-5 fw-bold" style={{ fontSize: "1.15rem" }}>Submit</button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>

    </main>
  );
}
