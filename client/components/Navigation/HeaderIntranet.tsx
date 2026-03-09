import { Link, useLocation } from "react-router-dom";
import { Star, ChevronDown, X, Menu } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown((prev) => (prev === name ? null : name));
  };

  // Update closeAll to also reset mobile dropdown
  const closeAll = () => {
    setOpenDropdown(null);
    setOpenMobileDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuOpen) {
      setOpenDropdown(null);
    }
  }, [mobileMenuOpen]);


  const Whoweare = ["Our Story", "Our Team", "Our Values", "Careers"];
  const navItems = [
    { label: "Home", path: "/", hasDropdown: false },
    { label: "Who we are", hasDropdown: true, items: Whoweare },
    { label: "How we work", hasDropdown: true, items: Whoweare },
    { label: "Resources", hasDropdown: true, items: Whoweare },
  ];

  return (
    <>
      <header className="bg-white">
        <div className="relative z-40 w-full px-8">
          <div className="h-[78px] flex items-center justify-between">
            <div className="flex flex-row items-center gap-6 xl:gap-8">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 lg:gap-[23px]" onClick={closeAll}>
                <div className="size-[46px] flex-shrink-0">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/e34a11552642a0f234b5d1963b8e9465e86e5471?width=92"
                    alt="Dammam Airports Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-black hidden lg:block text-sm lg:text-xl font-medium leading-5">
                  Dammam Airports
                </span>
              </Link>

              {/* Desktop Navigation — hidden on mobile, visible on lg+ */}
              <nav
                className="hidden lg:flex items-center gap-2 lg:gap-8"
                ref={dropdownRef}
              >
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <div key={item.label} className="relative">
                      <button
                        onClick={() => item.hasDropdown && toggleDropdown(item.label)}
                        onMouseDown={(e) => e.preventDefault()}
                        className={`text-sm font-medium transition-colors relative pb-1 whitespace-nowrap flex items-end gap-1.5
                          ${isActive ? "text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
                      >
                        {!item.hasDropdown ? (
                          <Link to={item.path!} onClick={closeAll}>{item.label}</Link>
                        ) : (
                          item.label
                        )}
                        {item.hasDropdown && (
                          <ChevronDown
                            className={`size-4 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                          />
                        )}
                        {isActive && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#4f6bec]" />
                        )}
                      </button>

                      {item.hasDropdown && openDropdown === item.label && (
                        <div className="absolute top-full left-0 mt-0 w-56 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                          {item.items?.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={`/${dropdownItem.toLowerCase().replace(/\s/g, "-")}`}
                              onClick={closeAll}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                            >
                              {dropdownItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Subscription badge — desktop only */}
            <div className="hidden lg:flex items-center gap-2">
              <Star className="w-4 h-4 text-gray-400" />
              <span className="text-sm font-normal text-gray-600">No subscription</span>
            </div>

            {/* Mobile menu toggle — visible only on mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={closeAll}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden
          ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 h-[78px] border-b border-gray-100">
          <span className="text-base font-semibold text-gray-900">Menu</span>
          <button
            onClick={closeAll}
            className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Drawer Nav Items */}
        <nav className="px-4 py-4 flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            const isDropdownOpen = openMobileDropdown === item.label; // ← own state

            return (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleMobileDropdown(item.label)} // ← own handler
                    className={`w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium transition-colors
              ${isDropdownOpen ? "bg-gray-50 text-[#4f6bec]" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`size-4 transition-transform flex-shrink-0 ${isDropdownOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link
                    to={item.path!}
                    onClick={closeAll}
                    className={`w-full flex items-center px-3 py-3 rounded-lg text-sm font-medium transition-colors
              ${isActive ? "bg-[#4f6bec]/10 text-[#4f6bec]" : "text-gray-700 hover:bg-gray-50"}`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && isDropdownOpen && (
                  <div className="flex flex-col gap-0.5">
                    {item.items?.map((dropdownItem, index) => (
                      <Link
                        key={index}
                        to={`/${dropdownItem.toLowerCase().replace(/\s/g, "-")}`}
                        onClick={closeAll}
                        className="block px-3 py-2.5 text-sm text-gray-600 hover:text-[#4f6bec] hover:bg-gray-50 rounded-md transition-colors"
                      >
                        {dropdownItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Drawer Footer */}
        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">No subscription</span>
          </div>
        </div>
      </div>
    </>
  );
}