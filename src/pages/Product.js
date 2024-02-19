import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FlashCard from "../components/FlashCard";

function Product() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <FlashCard />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Product;
