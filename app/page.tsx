import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import Card from "./components/cards";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Card />
    </>
  );
}
