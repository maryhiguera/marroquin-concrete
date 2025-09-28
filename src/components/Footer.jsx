import MarroquinLogo from '../assets/MarroquinLogo.png';

export function Footer() {
  return (
    <footer className="bg-light text-dark py-5 mt-auto w-100">
      <div className="container text-center">

        {/* Top Section */}
        <div className="row justify-content-center g-4">
          {/* Logo / Info */}
          <div className="col-md-3">
            <img 
              src={MarroquinLogo} 
              alt="Marroquin Logo" 
              className="img-fluid mb-3"
              style={{ maxWidth: "180px" }} // slightly smaller for consistency
            />
            <p className="mb-0 fs-6">
              Look no further, our team is here to help.
              <br />
              Contact us today for a <a href="/contact">free estimate!</a>
            </p>
          </div>

          {/* Menu */}
          <div className="col-md-3">
            <h2 className="h5 mb-3 fw-bold" style={{ fontSize: "1.5rem" }}>Menu</h2>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/" className="text-dark text-decoration-none fs-6">Home</a></li>
              <li><a href="/about" className="text-dark text-decoration-none fs-6">About Us</a></li>
              <li><a href="/services" className="text-dark text-decoration-none fs-6">Services</a></li>
              <li><a href="/gallery" className="text-dark text-decoration-none fs-6">Gallery</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none fs-6">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3">
            <h2 className="h5 mb-3 fw-bold" style={{ fontSize: "1.5rem" }}>Our Services</h2>
            <p className="mb-2 fs-6"><a href="/services" className="text-dark text-decoration-none">Residential Services</a></p>
            <p className="mb-0 fs-6"><a href="/services" className="text-dark text-decoration-none">Commercial Services</a></p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3">
            <h2 className="h5 mb-3 fw-bold" style={{ fontSize: "1.5rem" }}>Get in Touch</h2>
            <p className="mb-2 fs-6"><strong>Email:</strong> Marroquinconcrete@gmail.com</p>
            <p className="mb-2 fs-6"><strong>Call:</strong> (385) 450-8775</p>
            <p className="mb-0 fs-6"><strong>Text:</strong> (801) 361-3315</p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex flex-column align-items-center justify-content-center pt-4 border-top border-secondary mt-4">
          <p className="mb-0 fs-7 text-center">
            © 2025 Marroquin Concrete LLC. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
