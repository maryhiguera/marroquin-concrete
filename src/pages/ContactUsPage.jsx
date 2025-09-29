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
  const [statusMessage, setStatusMessage] = useState(""); // ✅ new state

  const SERVICE_ID = "service_cedaenp";
  const TEMPLATE_ID = "template_5se6fum";
  const PUBLIC_KEY = "iEd3bLGVR6ubY4vkE";

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setStatusMessage("✅ Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", service: "", message: "" }); // clear form
          setTimeout(() => setStatusMessage(""), 4000); // hide message after 4s
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again.");
          console.error('FAILED...', error.text);
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
      <div style={{ marginTop: 0 }}>
        <div 
          className="position-relative d-flex justify-content-center align-items-center text-center"
          style={{
            backgroundImage: `url(${Backyard})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "30vh",
            width: "100%",
            marginTop: 0,
          }}
        >
          <div 
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}
          />
          <div className="position-relative text-white" style={{ zIndex: 2 }}>
            <h1 className="display-4 fw-bold">Contact Us</h1>
            <p>Home → Contact Us</p>
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

                {/* ✅ Success / Error Message */}
                {statusMessage && (
                  <div className="alert alert-info text-center fw-bold">{statusMessage}</div>
                )}

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
      </div>
    </main>
  );
}
