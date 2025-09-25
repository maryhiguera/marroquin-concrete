import { useState } from "react";

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted form data:", formData);
  };

  return (
    <div className="container my-5 d-flex justify-content-center">
      <div className="row w-100 col-lg-10 col-xl-8">
        {/* Left Side: Contact Info + Map */}
        <div className="col-md-5 mb-4">
          <h2 className="text-center text-md-start">Contact Us</h2>
          <p className="text-center text-md-start">
            <strong>Call:</strong> (385) 450-8775 <br />
            <strong>Text:</strong> (801) 361-3315 <br />
            <strong>Email:</strong> Marroquinconcrete@gmail.com
          </p>

          {/* Google Maps Embed */}
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

        {/* Right Side: Form */}
        <div className="col-md-7">
          <h3 className="text-center text-md-start">Send Us a Message</h3>
          <form onSubmit={handleSubmit} className="row g-3">
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
              <label className="form-label">What service do you need?</label>
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

            <div className="col-12 text-center text-md-start">
              <button type="submit" className="btn btn-primary px-4">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
