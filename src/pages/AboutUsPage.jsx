import ConcreteVideo from '../assets/concrete-video.mp4';
import Backyard2 from '../assets/backyard2.png';

export function AboutUsPage() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">About Marroquin Concrete LLC</h1>

      <div className="row align-items-center g-5">
        {/* Left Column: Image and Mission/Vision */}
        <div className="col-md-6">
          <img src={Backyard2} alt="Backyard" className="img-fluid rounded shadow mb-4" />

          <div className="p-3 border rounded bg-light mb-3">
            <h5>Our Mission</h5>
            <p>
              We aim to provide exceptional concrete solutions for homes and businesses, backed by decades of experience and a commitment to excellence.
            </p>
          </div>

          <div className="p-3 border rounded bg-light">
            <h5>Our Vision</h5>
            <p>
              We strive to set the standard for reliable, professional concrete services that leave a positive impact on our community.
            </p>
          </div>
        </div>

        {/* Right Column: Company Overview, Video, and Contact Link */}
        <div className="col-md-6">
          <p>
            We started our company in 2022, but our story goes back much further. With 27 years of experience in concrete work, we’ve built more than just projects—we’ve built lasting relationships in our community. As a family-owned business, we bring the same care, honesty, and attention to detail to every job, whether it’s improving your home or taking on a larger commercial project. Our goal is simple: to provide quality concrete work you can count on, while making the process easy and stress-free from start to finish.
          </p>

          <p>
            From driveways and patios to sidewalks, foundations, and custom concrete designs, we handle a wide variety of projects for both residential and commercial clients. Whether it’s decorative stamping, concrete repair, or large-scale construction preparation, our team brings expertise and precision to every job. We proudly serve communities all across Utah, traveling wherever our clients need us to deliver reliable, high-quality work. No project is too big or small—we’re committed to helping you bring your vision to life with concrete solutions that last.
          </p>

          <video 
            src={ConcreteVideo} 
            autoPlay 
            loop 
            muted 
            controls
            className="img-fluid rounded shadow mb-3"
          />

          <p>
            <a href="/contact" className="btn btn-primary">Contact Us →</a>
          </p>
        </div>
      </div>
    </div>
  );
}

