import React from "react";

const Footer = () => {
  return (
    <footer className="footer py-20 pb-10 bg-black mt-auto">
      <div className="container mx-auto px-5">
        <div className="footer-top flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          <img
            src="/src/assets/valorant-logo.png"
            alt="Valorant Logo"
            className="h-6"
          />
          <div className="social-links flex gap-5">
            <a
              href="#"
              className="text-val-white hover:text-val-red font-bold text-[12px] uppercase transition-all"
            >
              TWITTER
            </a>
            <a
              href="#"
              className="text-val-white hover:text-val-red font-bold text-[12px] uppercase transition-all"
            >
              INSTAGRAM
            </a>
            <a
              href="#"
              className="text-val-white hover:text-val-red font-bold text-[12px] uppercase transition-all"
            >
              YOUTUBE
            </a>
            <a
              href="#"
              className="text-val-white hover:text-val-red font-bold text-[12px] uppercase transition-all"
            >
              DISCORD
            </a>
          </div>
        </div>
        <hr className="footer-hr border-none border-t border-white/10 mb-10" />
        <div className="footer-bottom flex flex-col md:flex-row justify-between items-center gap-8 text-val-grey text-[10px] text-center md:text-left">
          <p>
            &copy; 2026 RIOT GAMES, INC. RIOT GAMES, VALORANT, AND ANY
            ASSOCIATED LOGOS ARE TRADEMARKS, SERVICE MARKS, AND/OR REGISTERED
            TRADEMARKS OF RIOT GAMES, INC.
          </p>
          <div className="footer-links flex gap-5">
            <a
              href="#"
              className="text-val-grey hover:text-val-white transition-all"
            >
              PRIVACY POLICY
            </a>
            <a
              href="#"
              className="text-val-grey hover:text-val-white transition-all"
            >
              TERMS OF SERVICE
            </a>
            <a
              href="#"
              className="text-val-grey hover:text-val-white transition-all"
            >
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
