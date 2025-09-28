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
          height: "30vh",
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

          {/* Right Column: Company Overview & Contact and Gallery Button */}
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
                <a 
                  href="/contact" 
                  className="btn btn-danger btn-sm me-2 text-uppercase fw-bold"
                >
                  Contact Us →
                </a>
                <a 
                  href="/gallery" 
                  className="btn btn-primary btn-sm text-uppercase fw-bold"
                >
                  View Our Work →
                </a>
              </div>
            </div>
          </div>
        </div>

       <div className="container my-5">
          <div 
            className="border rounded shadow p-4 mx-auto d-flex align-items-center" 
            style={{ maxWidth: "1200px", backgroundColor: "#f8f9fa" }}
          >
            <div className="row w-100 g-4 align-items-start">
              {/* Left Column: Mission & Vision */}
              <div className="col-md-6 d-flex flex-column justify-content-start">
                <div className="p-3 border rounded bg-white text-start mb-3 flex-grow-1 d-flex flex-column justify-content-center">
                  <div className="text-center mb-2">
                    <span style={{ fontSize: "3rem", display: "inline-block" }}>🎯</span>
                  </div>
                  <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Our Mission</h5>
                  <p style={{ fontSize: "1.15rem" }}>
                    We aim to provide exceptional concrete solutions for homes and businesses, backed by decades of experience and a commitment to excellence.
                  </p>
                </div>

                <div className="p-3 border rounded bg-white text-start flex-grow-1 d-flex flex-column justify-content-center">
                  <div className="text-center mb-2">
                    <span style={{ fontSize: "3rem", display: "inline-block" }}>⚡️</span>
                  </div>
                  <h5 style={{ fontSize: "1.5rem", fontWeight: "bold", textAlign: "center" }}>Our Vision</h5>
                  <p style={{ fontSize: "1.15rem" }}>
                    We strive to set the standard for reliable, professional concrete services that leave a positive impact on our community.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="col-md-6 d-flex justify-content-center align-items-start">
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
        {/* Might use in the future  */}
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
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#fefbfbff", marginBottom: "20px" }}>
            Get in touch today!
          </h1>
          <a 
            href="/contact" 
            className="btn btn-danger btn-lg text-uppercase fw-bold"
            style={{ fontSize: "1.25rem" }}
          >
            Contact Us →
          </a>
        </div>

      </div>
    </div>
  );
}
