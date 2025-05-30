import Introduction from "./Introduction"
import About from "./About"
import Skills from "./Skills"
import Projects from "./Projects"
import ContactMe from "./ContactMe"
import Footer from "../components/Footer"

export default function Main({}) {
  return (
    <div className="pt-24">
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  )
}