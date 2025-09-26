import { ContactUsPage } from "./ContactUsPage.jsx"
import { ServicesPage } from "./ServicesPage.jsx";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { AboutUsPage } from "./AboutUsPage.jsx";
export function HomePage() {
  return (
    <main>
      <div>
        <div>
          <p>Welcome to Marroquin Concrete LLC</p>
          <h1>Your Trusted Partner for Quality Concrete Solutions in Utah</h1>
          <button><a href="/about">More About Us</a></button>
        </div>
        <ServicesPage />
        <ContactUsPage />
      </div>
    </main>
  )
}