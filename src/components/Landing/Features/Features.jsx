import SectionTitle from "@/components/Shared/SectionTitle";
import { featuresData } from "./featuresData";

const Features = () => {
  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <SectionTitle
          title="Why Choose Us"
          subtitle="We provide top-notch electronics, excellent service, and a seamless shopping experience."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-slate-800 rounded-xl p-6 flex flex-col items-center text-center hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
