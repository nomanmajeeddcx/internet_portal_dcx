import { Link, useLocation } from "react-router-dom";
import { Star, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 pointer-events-none"

      />

      <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-[18px] relative">
        <div className="h-14 lg:h-[78px] flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 lg:gap-[23px]" onClick={closeDropdown}>
            <div className="size-6 lg:size-[46px] flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e34a11552642a0f234b5d1963b8e9465e86e5471?width=92"
                alt="Dammam Airports Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-black text-sm lg:text-xl font-medium leading-5" >
              Dammam
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" ref={dropdownRef}>
            <Link
              to="/"
              className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${location.pathname === "/"
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={closeDropdown}
            >
              Home
              {location.pathname === "/" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A60A9]" />
              )}
            </Link>
            <Link
              to="/h_v2"
              className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${location.pathname === "/h_v2"
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={closeDropdown}
            >
              Home V2
              {location.pathname === "/h_v2" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A60A9]" />
              )}
            </Link>
            <Link
              to="/h_v3"
              className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${location.pathname === "/h_v3"
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={closeDropdown}
            >
              Home V3
              {location.pathname === "/h_v3" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A60A9]" />
              )}
            </Link>
            <Link
              to="/components"
              className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${location.pathname === "/components"
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={closeDropdown}
            >
              Components
              {location.pathname === "/components" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A60A9]" />
              )}
            </Link>
            <Link
              to="/iconslib"
              className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap ${location.pathname === "/iconslib"
                ? "text-gray-900"
                : "text-gray-600 hover:text-gray-900"
                }`}
              onClick={closeDropdown}
            >
              Icons Lib
              {location.pathname === "/iconslib" && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7A60A9]" />
              )}
            </Link>

            {/* Who we are Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('who-we-are')}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5 py-2"
              >
                Who we are
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'who-we-are' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'who-we-are' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Our Story
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Our Team
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Our Values
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Careers
                  </a>
                </div>
              )}
            </div>

            {/* How we work Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('how-we-work')}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5 py-2"
              >
                How we work
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'how-we-work' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'how-we-work' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Our Process
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Services
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Technology
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Support
                  </a>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button
                onClick={() => toggleDropdown('resources')}
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1.5 py-2"
              >
                Resources
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'resources' ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Dropdown Menu */}
              {openDropdown === 'resources' && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Documentation
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    Blog
                  </a>
                  <a href="#" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors">
                    FAQ
                  </a>
                  <div className="border-t border-gray-100 my-1"></div>
                  <Link
                    to="/components"
                    onClick={closeDropdown}
                    className="block px-4 py-2.5 text-sm text-[#7A60A9] font-medium hover:bg-purple-50 transition-colors"
                  >
                    Components Library
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* No subscription badge */}
          <div className="hidden lg:flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-400" />
            <span className="text-sm font-normal text-gray-600">No subscription</span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpenDropdown(null)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
