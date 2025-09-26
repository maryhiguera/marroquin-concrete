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
      <div style={headerStyle}>
        Gallery
      </div>

      <div className="row g-4">
        {[Stairs1, Custom1, Stairs2, Backyard, Custom3, Custom4, Tenniscourt, Prep, Prep2, Concrete, Sidehouse, Foundation].map((img, index) => (
          <div className="col-md-4 col-sm-6" key={index}>
            <img src={img} alt={`Gallery ${index}`} className="img-fluid rounded shadow" />
          </div>
        ))}
      </div>
    </div>
  );
}
