import { FaShippingFast, FaHeadset, FaLock, FaSyncAlt } from "react-icons/fa";

export const featuresData = [
  {
    id: 1,
    icon: <FaShippingFast size={36} className="text-blue-600" />,
    title: "Fast Delivery",
    description:
      "Get your electronics delivered quickly and safely to your doorstep.",
  },
  {
    id: 2,
    icon: <FaHeadset size={36} className="text-blue-600" />,
    title: "24/7 Support",
    description:
      "Our dedicated support team is always ready to assist you anytime.",
  },
  {
    id: 3,
    icon: <FaLock size={36} className="text-blue-600" />,
    title: "Secure Payment",
    description: "Shop with confidence with our fully secure payment options.",
  },
  {
    id: 4,
    icon: <FaSyncAlt size={36} className="text-blue-600" />,
    title: "Easy Returns",
    description:
      "Hassle-free returns within 7 days of delivery for your convenience.",
  },
];
