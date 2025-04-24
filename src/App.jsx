import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nabvbar from "./components/Navbar";
import Story from "./components/Story";


export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Nabvbar />
      <Hero/>

      <About />
      <Features />
      <Story />
      <Contact/>
      <Footer/>
    </main>
  )
}
