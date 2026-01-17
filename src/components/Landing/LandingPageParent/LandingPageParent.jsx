import React from "react";
import Banner from "../Hero/Banner";
import Features from "../Features/Features";
import Categories from "../Categories/Categories";
import Testimonials from "../Testimonials/Testimonials";
import MostPopular from "../MostPopular/MostPopular";
import Newsletter from "../Newsletter/Newsletter";

const LandingPageParent = () => {
  return (
    <div>
      <Banner />
      <MostPopular />
      <Features />
      <Categories />
      <Testimonials />
      <Newsletter/>
    </div>
  );
};

export default LandingPageParent;
