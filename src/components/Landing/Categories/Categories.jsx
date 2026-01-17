"use client";

import React from "react";
import { categoriesData } from "./categoriesData";
import SectionTitle from "@/components/Shared/SectionTitle";

const Categories = () => {
  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Title */}
        <SectionTitle
          title="Our Collections"
          subtitle="Explore our wide range of electronics, gadgets, and accessories curated just for you."
        />

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {categoriesData.map((category) => (
            <div
              key={category.id}
              className="bg-slate-900 rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-300 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
