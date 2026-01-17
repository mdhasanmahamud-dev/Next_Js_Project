"use client" 

import SectionTitle from "@/components/Shared/SectionTitle";
import React from "react";
import TestimonialsCard from "./TestimonialsCard";

const Testimonials = () => {
  return (
    <div  className="py-16 bg-black">
      <SectionTitle
        title="What Our Artists Say"
        subtitle="Hear from our creative community about their experiences"
      />
      <div className="container mx-auto max-w-7xl px-4 mt-10">
        <TestimonialsCard />
      </div>
    </div>
  );
};

export default Testimonials;
