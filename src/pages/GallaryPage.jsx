import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';
import Custom1 from '../assets/custom1.jpg';
import Backyard from '../assets/backyard.png';
import Custom3 from '../assets/custom3.png';
import Custom4 from '../assets/custom4.png';
import Tenniscourt from '../assets/tenniscourt.jpg';
import Prep from '../assets/prep.jpg';
import Prep2 from '../assets/prep2.jpg';
import Concrete from '../assets/concrete.png';
import Sidehouse from '../assets/sidehouse.png';
import Foundation from '../assets/foundation.png';

export function GalleryPage() {
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
          <h1 className="display-4 fw-bold">Gallery</h1>
          <p>Home → Gallery</p>
        </div>
      </div>

      {/* Gallery Images */}
      <div className="container-fluid my-5 px-5">
        <div className="row g-4">
          {[Stairs1, Custom1, Stairs2, Backyard, Custom3, Custom4, Tenniscourt, Prep, Prep2, Concrete, Sidehouse, Foundation].map((img, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <img src={img} alt={`Gallery ${index}`} className="img-fluid rounded shadow" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
