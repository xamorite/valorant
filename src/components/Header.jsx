import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import valorantLogo from "../assets/valorant-logo.png";

const RiotLogo = () => (
  <svg
    viewBox="0 0 185.47 163.51"
    className="h-4 opacity-50 hidden sm:block fill-white"
  >
    <path d="M98.77 0L0 45.74l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74 10.62 60.2 32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.38L98.77 0zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.21-.04.01z" />
  </svg>
);

const navLinks = [
  { to: "/agents", label: "AGENTS" },
  { to: "/weapons", label: "ARSENAL" },
  { to: "/news", label: "NEWS" },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="navbar fixed top-0 left-0 w-full h-20 bg-val-dark/95 flex items-center justify-between px-6 md:px-10 z-[1000] border-b border-val-white/10 backdrop-blur-md">
      <div className="logo flex items-center gap-6">
        <RiotLogo />
        <div className="h-4 w-[1px] bg-white text-white/20 hidden sm:block"></div>
        <Link to="/" className="flex items-center">
          <img src={valorantLogo} alt="Valorant Logo" className="h-8" />
        </Link>
      </div>

      <nav className="nav-links hidden lg:flex gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="text-val-white hover:text-val-red font-bold text-sm tracking-[2px] transition-all"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="nav-right flex items-center gap-5">
        <button className="lang-btn bg-transparent border border-val-white text-val-white px-2.5 py-1.5 cursor-pointer font-bold hidden sm:block uppercase">
          EN
        </button>
        <a
          href="https://playvalorant.com/en-us/platform-selection/"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-nav bg-val-red text-white border-none px-6 py-2.5 font-black cursor-pointer clip-val hover:bg-white hover:text-val-red transition-all uppercase inline-block"
        >
          PLAY NOW
        </a>

        <button
          type="button"
          className="hamburger lg:hidden flex flex-col gap-1.5 cursor-pointer"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          <span
            className={`w-6 h-[3px] bg-val-white transition-transform duration-200 ${
              mobileMenuOpen ? "translate-y-[9px] rotate-45" : ""
            }`}
          ></span>
          <span
            className={`w-6 h-[3px] bg-val-white transition-opacity duration-200 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`w-6 h-[3px] bg-val-white transition-transform duration-200 ${
              mobileMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
            }`}
          ></span>
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <button
            type="button"
            className="fixed inset-0 top-20 bg-black/50 lg:hidden"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          ></button>
          <nav className="fixed top-20 left-0 right-0 bg-val-dark/98 backdrop-blur-xl border-b border-val-white/10 p-8 lg:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-val-white hover:text-val-red font-black text-2xl tracking-[4px] transition-all uppercase flex justify-between items-center group"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                  <span className="w-0 h-[2px] bg-val-red transition-all group-hover:w-8"></span>
                </Link>
              ))}
              <div className="mt-4 pt-6 border-t border-val-white/10">
                <a
                  href="https://playvalorant.com/en-us/platform-selection/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-val-red text-white py-4 font-black text-center clip-val hover:bg-white hover:text-val-red transition-all uppercase block"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  PLAY NOW
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
