import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <h1>ACCUEIL</h1>
        <Banner />
        <Gallery />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
