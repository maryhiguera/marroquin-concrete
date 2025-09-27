import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import Backyard from '../assets/backyard.png';

export function ContactUsPage() {
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
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
          height: "40vh",
          width: "100%",
        }}
      >
        {/* Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}
        />
        {/* Hero Text */}
        <div className="position-relative text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Contact Us</h1>
          <p>Home → Contact Us</p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5">
        <div className="row justify-content-center g-4">
          {/* Left Column: Info + Map */}
          <div className="col-lg-5">
            <h2 className="mb-3 text-center text-lg-start">Contact Us</h2>
            <p className="text-center text-lg-start">
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

          {/* Right Column: Form */}
          <div className="col-lg-7">
            <h3 className="mb-3 text-center text-lg-start">Send Us a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone / Mobile Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Service Needed</label>
                <input
                  type="text"
                  name="service"
                  className="form-control"
                  value={formData.service}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-control"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-12 text-center text-lg-start">
                <button type="submit" className="btn btn-primary px-4">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
