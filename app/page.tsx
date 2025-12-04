
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/cards";
import Footer from "./components/footer";
import About from "./components/about";
import Reviews from "./components/reviews";
import Credenciada from "./components/credenciada";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <About />
      <Credenciada />
      <Reviews />
      <Footer />
    </>
  );
}
