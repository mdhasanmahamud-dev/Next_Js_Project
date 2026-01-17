"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // cookie check
  useEffect(() => {
    const loggedIn = document.cookie.includes("auth=true");
    setIsLoggedIn(loggedIn);
  }, []);

  // logout handler
  const handleLogout = () => {
    document.cookie = "auth=; path=/; max-age=0";
    setIsLoggedIn(false);
    router.push("/login");
  };

  const centerLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="sticky top-0 left-0 w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          ElectroHub
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {centerLinks.map((link) => (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium ${
                  pathname === link.path
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Login / Logout */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-red-600 text-white font-medium"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="px-4 py-2 rounded-md bg-blue-700 text-white font-medium"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <ul className="flex flex-col px-6 py-4">
            {centerLinks.map((link) => (
              <li key={link.path} className="border-b border-black">
                <Link
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-center text-black py-3"
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="pt-4">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="block w-full text-center px-4 py-2 rounded-md bg-red-600 text-white"
                >
                  Logout
                </button>
              ) : (
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block text-center px-4 py-2 rounded-md bg-blue-600 text-white"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
