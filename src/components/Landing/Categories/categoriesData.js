import {
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaHome,
  FaGamepad,
  FaCamera,
  FaBorderNone,
} from "react-icons/fa";
import { MdWatch } from "react-icons/md"; // Watch icon

export const categoriesData = [
  {
    id: 1,
    name: "Smartphones",
    description:
      "Latest smartphones from top brands with cutting-edge features.",
    icon: <FaMobileAlt size={40} className="text-blue-500" />,
  },
  {
    id: 2,
    name: "Laptops",
    description: "High-performance laptops for work, gaming, and creativity.",
    icon: <FaLaptop size={40} className="text-green-500" />,
  },
  {
    id: 3,
    name: "Headphones & Audio",
    description:
      "Premium headphones, speakers, and audio devices for immersive sound.",
    icon: <FaHeadphones size={40} className="text-pink-500" />,
  },
  {
    id: 4,
    name: "Smart Home",
    description: "Smart devices to make your home convenient and automated.",
    icon: <FaHome size={40} className="text-yellow-500" />,
  },
  {
    id: 5,
    name: "Gaming",
    description:
      "Consoles, accessories, and gear to level up your gaming setup.",
    icon: <FaGamepad size={40} className="text-red-500" />,
  },
  {
    id: 6,
    name: "Wearables",
    description:
      "Smartwatches and fitness trackers to stay connected and healthy.",
    icon: <MdWatch size={40} className="text-purple-500" />, // fixed here
  },
  {
    id: 7,
    name: "Cameras",
    description: "DSLRs, mirrorless, and action cameras for perfect shots.",
    icon: <FaCamera size={40} className="text-orange-500" />,
  },
  {
    id: 8,
    name: "Drones",
    description: "High-tech drones for aerial photography and recreation.",
    icon: <FaBorderNone size={40} className="text-teal-500" />,
  },
];
