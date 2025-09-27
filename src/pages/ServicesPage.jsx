import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';
import Backyard from '../assets/backyard.png';

export function ServicesPage() {
  const headerStyle = {
      backgroundImage: `url(${Backyard})`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      padding: '120px 20px', 
      textAlign: 'center',
      fontSize: '4rem', 
      fontWeight: 'bold',
      textShadow: '2px 2px 6px rgba(0,0,0,0.6)', 
      marginBottom: '40px',
      borderRadius: '12px'
    };

  return (
    <div className="container my-5">
      {/* Page Title */}
      <div style={headerStyle}>
        Our Services
        <p style={{ fontSize: '1.25rem', fontWeight: 'normal' }}>Home → Services</p>
      </div>

      {/* Service Description */}
      <div className="mb-5">
        <h3 className="mb-3">Our Services</h3>
        <p>
          <strong>Residential:</strong> We provide high-quality residential concrete services designed to add durability and beauty to your home. From flatwork and foundations to walls, driveways, patios, sidewalks, and curbs, our team delivers craftsmanship that lasts. Whether you're building new or upgrading your outdoor spaces, we ensure every project is completed with precision and care.
        </p>

        <p>
          <strong>Commercial:</strong> Our commercial concrete services are built to handle projects of any scale with strength and reliability. We specialize in flatwork, footings, walls, curbs, gutters, sidewalks, and large driveways to meet the demands of businesses and developments. With a focus on durability and efficiency, we provide long-lasting solutions tailored to your commercial needs.
        </p>
      </div>

      {/* Images */}
      <div className="row g-4">
        <div className="col-md-6 text-center">
          <img 
            src={Stairs1} 
            alt="Stairs" 
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-6 text-center">
          <img 
            src={Stairs2} 
            alt="Stairs" 
            className="img-fluid rounded shadow"
            style={{ maxHeight: '400px', objectFit: 'cover' }}
          />
        </div>
      </div>
    </div>
  );
}
