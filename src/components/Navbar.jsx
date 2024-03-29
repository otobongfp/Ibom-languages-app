import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-[90000]">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="font-bold"
          >
            Ibom Languages Project
          </Link>
        </div>
        <div className="flex lg:hidden">
          {mobileMenuOpen ? (
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to={"/contact"}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contribute <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <div
        className={`bg-white h-[79vh] absolute w-full p-6 lg-hidden transition-all duration-100 delay-100 flex flex-col justify-between ${
          mobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <div className="divide-y divide-gray-500/10">
          <div className="space-y-2 ">
            {navigation.map((item) => (
              <Link
                onClick={() => setMobileMenuOpen(false)}
                key={item.name}
                to={item.path}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="py-6 self-center">
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
          >
            Contribute
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
