
import About from "./components/about";
import Hero from "./components/hero";
import NavBar from "./components/navBar";

export default function Home() {
  return (
   <div className="mr-24 ml-24">
    <NavBar/>
    <Hero/>
    <About/>
   </div>
  );
}
