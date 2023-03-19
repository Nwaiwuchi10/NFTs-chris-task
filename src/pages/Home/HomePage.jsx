import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Card from "../../components/NTFsCards/Card";
import Contact from "../../components/Contact/Contact";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Card />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
