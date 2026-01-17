const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Logo */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">MyStore</h1>
          <p className="text-sm text-gray-400">
            Your one-stop shop for amazing products. Quality and satisfaction
            guaranteed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-blue-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/items" className="hover:text-blue-500 transition">
                Products
              </a>
            </li>
        
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h2 className="text-white font-semibold mb-2">Contact Us</h2>
          <p className="text-sm mb-2">Email: support@mystore.com</p>
          <p className="text-sm mb-2">Phone: +880 1234 567890</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-blue-500 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
