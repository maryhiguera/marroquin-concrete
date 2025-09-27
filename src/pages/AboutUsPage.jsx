import ConcreteVideo from '../assets/concrete-video.mp4';
import Backyard from '../assets/backyard.png';
import Backyard2 from '../assets/backyard2.png';

export function AboutUsPage() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="position-relative d-flex justify-content-center align-items-center text-center"
        style={{
          backgroundImage: `url(${Backyard})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          width: "100%",
        }}
      >
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 1 }}
        />
        <div className="position-relative text-white" style={{ zIndex: 2 }}>
          <h1 className="display-4 fw-bold">About Marroquin Concrete LLC</h1>
          <p style={{ fontSize: "1.25rem" }}>Home → About Us</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container my-5">
        <div className="row align-items-start g-5">
          {/* Left Column: Image */}
          <div className="col-md-6 text-center">
            <video
              src={ConcreteVideo}
              autoPlay={true}
              loop={true}
              muted={true}
              controls
              className="img-fluid rounded shadow"
              style={{ maxHeight: "670px", objectFit: "cover", width: "100%" }}
            />
          </div>

          {/* Right Column: Company Overview & Contact Button */}
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow">
              <h5 style={{ fontSize: "1.75rem", fontWeight: "bold" }}>Serving Homes & Businesses Across Utah</h5>
              <p style={{ fontSize: "1.20rem" }}>
                We started our company in 2022, but our story goes back much further. With 27 years of experience in concrete work, we’ve built more than just projects—we’ve built lasting relationships in our community. As a family-owned business, we bring the same care, honesty, and attention to detail to every job, whether it’s improving your home or taking on a larger commercial project. Our goal is simple: to provide quality concrete work you can count on, while making the process easy and stress-free from start to finish.
              </p>

              <p style={{ fontSize: "1.20rem" }}>
                From driveways and patios to sidewalks, foundations, and custom concrete designs, we handle a wide variety of projects for both residential and commercial clients. Whether it’s decorative stamping, concrete repair, or large-scale construction preparation, our team brings expertise and precision to every job. We proudly serve communities all across Utah, traveling wherever our clients need us to deliver reliable, high-quality work. No project is too big or small—we’re committed to helping you bring your vision to life with concrete solutions that last.
              </p>

              <div className="text-end">
                <a href="/contact" className="btn btn-danger mb-3 text-uppercase fw-bold">
                  Contact Us →
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4 align-items-center justify-content-center">
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="p-3 border rounded bg-light text-start mb-3">
                <div className="text-center mb-2">
                  <span style={{ fontSize: "3rem", display: "inline-block" }}>🎯</span>
                </div>
                <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Our Mission</h5>
                <p style={{ fontSize: "1.15rem" }}>
                  We aim to provide exceptional concrete solutions for homes and businesses, backed by decades of experience and a commitment to excellence.
                </p>
              </div>

              <div className="p-3 border rounded bg-light text-start">
                <div className="text-center mb-2">
                  <span style={{ fontSize: "3rem", display: "inline-block" }}>⚡️</span>
                </div>
                <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Our Vision</h5>
                <p style={{ fontSize: "1.15rem" }}>
                  We strive to set the standard for reliable, professional concrete services that leave a positive impact on our community.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-md-6 text-center">
            <img 
              src={Backyard2} 
              alt="Backyard" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
