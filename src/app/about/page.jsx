const AboutPage = () => {
  return (
    <section className="bg-black min-h-screen text-gray-300">
      {/* Hero Section */}
      <div className="bg-linear-to-b from-gray-900 to-black py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Our Electronics Store
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A modern electronics platform delivering premium gadgets, smart
            devices, and innovative technology for everyday life.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-4">Who We Are</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Our store is a next-generation electronics marketplace focused on
            providing high-quality smartphones, laptops, cameras, gaming
            devices, and smart accessories.
          </p>
          <p className="text-gray-400 leading-relaxed">
            This project demonstrates how modern web technologies can be used to
            build a scalable and user-friendly electronics platform.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="/about/electronics-about.png"
            alt="Electronics Store"
            className="rounded-xl border border-gray-800 shadow-lg max-w-md w-full"
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-white mb-12">
            What We Offer
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Latest Gadgets
              </h3>
              <p className="text-gray-400">
                Smartphones, laptops, tablets, cameras, and wearables from
                trusted global brands.
              </p>
            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Smart Shopping
              </h3>
              <p className="text-gray-400">
                Organized product listings with detailed specifications to help
                users make informed decisions.
              </p>
            </div>

            <div className="bg-black border border-gray-800 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-2">
                Trusted Quality
              </h3>
              <p className="text-gray-400">
                All products are curated to ensure performance, durability, and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
