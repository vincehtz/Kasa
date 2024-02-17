import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import aboutCover from "../assets/banner-about.png";
import Values from "../components/Values";

function About() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner cover={aboutCover} opacity="0.3" />
        <Values />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default About;
