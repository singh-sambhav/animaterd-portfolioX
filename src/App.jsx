import "./App.scss"
import { Navbar } from "./components/Navbar";
import Hero from "./components/hero/Hero";


const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'>Parallax</section>
    <section>services</section>
    <section>Parallax</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'>Contact</section>
  </div>;
};

export default App;
