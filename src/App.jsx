import About from "./components/About";
import Hero from "./components/Hero";
import Nabvbar from "./components/Navbar";


export default function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden ">
      <Nabvbar />
      <Hero/>

      <About />
    </main>
  )
}
