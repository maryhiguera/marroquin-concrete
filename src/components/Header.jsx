import MarroquinLogo from '../assets/MarroquinLogo.png';
import './Header.css';

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          {/* Logo */}
          <a className="navbar-brand mb-2 mb-lg-0" href="/">
            <img 
              src={MarroquinLogo} 
              alt="Marroquin Logo" 
              className="img-fluid" 
              style={{ maxHeight: "120px" }} 
            />
          </a>

          {/* Hamburger (for mobile) */}
          <button 
            className="navbar-toggler" 
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
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/gallery">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
