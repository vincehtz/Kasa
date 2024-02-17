import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Oups from "../components/Oups";

function Error() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Oups />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Error;
