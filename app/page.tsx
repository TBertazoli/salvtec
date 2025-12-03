import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/cards";
import Footer from "./components/footer";
import About from "./components/about";
import Servicos from "./components/servicos";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
      <About />
      {/* <Servicos /> */}
      <Footer />
    </>
  );
}
