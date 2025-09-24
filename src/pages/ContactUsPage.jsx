import { useState } from 'react'


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
    <div>
      <div>
        <h2>Contact Us</h2>
        <p><strong>Call</strong> (385) 450-8775 <strong>or text</strong> (801) 361-3315</p>
        <p><strong>Email</strong> Marroquinconcrete@gmail.com</p>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required />
          </label>

          <label>
            Email Address:
            <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required />
          </label>

          <label>
            Phone / Mobile Number:
            <input 
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required />
          </label>

          <label>
            What service do you need?
            <input
            type="text"
            name="service"
            value={formData.service}
            onChange={handleChange}
            />
          </label>

          <label>
            Message: 
            <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}