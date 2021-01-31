import About from "components/About";
import App from "components/App";
import Contact from "components/Contact";
import Footer from "components/Footer";
import Hero from "components/Hero";
import Menu from "components/Menu";
import Services from "components/Services";
import { DarkModeContext, DarkModeProvider } from "../ContextAPI/darkMode";
import React, { useContext } from "react";
import Header from "../components/Header";

export default function HomePage() {
  const { darkmode } = useContext(DarkModeContext);
  console.log(darkmode);
  return (
    <div className={darkmode ? `dark text-gray-400 bg-DarkModegreen` : `text-gray-600`}>
      <Header />
      <Hero />
      <About />
      <Services />
      <Menu />
      <App />
      <Contact />
      <Footer />
    </div>
  );
}
