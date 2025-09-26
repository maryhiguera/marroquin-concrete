import MarroquinLogo from '../assets/MarroquinLogo.png';

export function Footer() {
  return (
    <footer className="bg-dark text-light py-5 mt-auto w-100">
      <div className="container">
        <div className="row align-items-start g-4">
          {/* Logo / Info */}
          <div className="col-md-3 text-md-start text-center">
            <img 
              src={MarroquinLogo} 
              alt="Marroquin Logo" 
              className="img-fluid mb-3"
              style={{ maxWidth: "220px" }} // slightly larger logo
            />
            <p className="mb-0">Quality Concrete Services in Utah</p>
          </div>

          {/* Menu */}
          <div className="col-md-3 d-flex flex-column justify-content-start h-100 text-center text-md-start">
            <h2 className="h5 mb-3">Menu</h2>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 d-flex flex-column justify-content-start h-100 text-center text-md-start">
            <h2 className="h5 mb-3">Our Services</h2>
            <p className="mb-2">Residential Services</p>
            <p className="mb-0">Commercial Services</p>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 d-flex flex-column justify-content-start h-100 text-center text-md-start">
            <h2 className="h5 mb-3">Get in Touch</h2>
            <p className="mb-2">Email: info@marroquinconcrete.com</p>
            <p className="mb-2">Call: (385) 450-8775</p>
            <p className="mb-0">Text: (801) 361-3315</p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="text-center pt-4 border-top border-secondary mt-4">
          <p className="mb-0">
            © 2025 Marroquin Concrete LLC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
