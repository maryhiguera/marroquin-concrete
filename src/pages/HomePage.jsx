import { ContactUsPage } from "./ContactUsPage.jsx"
import { ServicesPage } from "./ServicesPage.jsx";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";


export function HomePage() {
  return (
    <main>
      <Header/>
      <h1>Welcome to Marroquin Concrete LLC</h1>
      <ServicesPage />
      <ContactUsPage />
      <Footer/>
    </main>
  )
}