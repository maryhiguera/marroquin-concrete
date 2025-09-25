import Stairs1 from '../assets/Stairs1.jpg';
import Stairs2 from '../assets/Stairs2.jpg';
// import Custom1 from '../assets/custom1.jpg';




export function GalleryPage() {
  return (
    <div>
      <h1>Gallery</h1>
      <img src={Stairs1} alt="Stairs" />
      {/* <img src={Custom1} alt="Custom" /> */}
      <img src={Stairs2} alt="Stairs" />
    </div>
  )
}