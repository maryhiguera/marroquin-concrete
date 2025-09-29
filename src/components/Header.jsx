import MarroquinLogo from '../assets/MarroquinLogo.png';
import './Header.css';

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg shadow-sm custom-navbar" style={{ backgroundColor: "#030303ff" }}>
        <div className="container d-flex flex-column flex-lg-row align-items-center">

          {/* Logo */}
          <a className="navbar-brand mb-2 mb-lg-0" href="/">
            <img 
              src={MarroquinLogo} 
              alt="Marroquin Logo" 
              className="img-fluid" 
              style={{ maxHeight: "90px" }}   
            />
          </a>

          {/* Call Us Button (mobile only, centered under logo) */}
          <div className="d-lg-none mb-2 text-center">
            <a 
              href="tel:+13854500775" 
              style={{ 
                display: "inline-block",
                borderRadius: "20px",
                backgroundColor: "#ea1313ff",
                padding: "6px 14px",
                color: "white",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "14px"
              }}
            >
              Call Us Now
            </a>
          </div>

          {/* Hamburger (for mobile) */}
          <button 
            className="navbar-toggler navbar-dark" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-uppercase fw-bold d-flex gap-3">
              <li className="nav-item">
                <a className="nav-link text-light" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Call Us Button (desktop only, stays right) */}
          <div className="d-none d-lg-block ms-auto" style={{ borderRadius: "20px", backgroundColor: "#ea1313ff", padding: "5px 10px" }}>
            <a href="tel:+13854500775" style={{ color: "white", textDecoration: "none" }}>Call Us Now</a>
          </div>

        </div>
      </nav>
    </header>
  );
}
