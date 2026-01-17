"use client";

import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <div className="py-16 bg-gray-900">
      <div className="container mx-auto px-4 text-center text-white">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join Our Newsletter
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Stay updated with our latest news, articles, and special offers. Enter
          your email below to subscribe.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubscribe}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border border-slate-200 sm:flex-1 placeholder:italic placeholder:text-white px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-gray-500 text-sm mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
