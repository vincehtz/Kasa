import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import homeCover from "../assets/banner-hp.png";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner
          cover={homeCover}
          opacity="0.6"
          title="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
