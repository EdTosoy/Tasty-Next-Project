import About from "components/About";
import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
    </div>
  );
}
