import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';
import Backyard from '../assets/backyard.png';
import Steps from '../assets/steps.png';

export function ServicesPage() {
  return (
    <div style={{ marginTop: 0 }}>

      {/* Hero Section */}
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
        {/* Overlay */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}
        />
        {/* Hero Text */}
        <div className="position-relative text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">Our Services</h1>
          <p>Home → Our Services</p>
        </div>
      </div>

      {/* Bordered Container */}
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
      <div
          className="d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1635789146064-ffa7966c32e3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            height: "200px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
          }}
        >
          <h2 className="text-white">Get Your Free Estimate Today!</h2>
          <p className="text-white"><a href="/contact" style={{ color: "white", textDecoration: "underline" }}>Contact us to discuss your project and get a no-obligation quote.➡️</a></p>
      </div>
    </div>
  );
}
