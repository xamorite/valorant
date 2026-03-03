import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import jinx404 from "../assets/jinx-404.png";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-val-dark overflow-hidden">
      <Header />
      <main className="flex-grow flex flex-col justify-center relative pt-20">
        {/* Background Large Outlined Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h1 className="text-[25vw] font-black text-transparent text-stroke opacity-10 leading-none">
            404
          </h1>
        </div>

        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between z-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-xl text-center lg:text-left"
          >
            <span className="text-val-red font-bold tracking-[4px] block mb-4">
              // ERROR
            </span>
            <h2 className="font-oswald text-6xl md:text-8xl font-black mb-6 uppercase">
              PAGE NOT FOUND
            </h2>
            <p className="text-val-grey text-lg mb-10">
              It looks like the Jinx has been here. The page you are looking for
              has been blown up, moved, or never existed in the first place.
            </p>

            <Link
              to="/"
              className="inline-block bg-val-white text-val-dark px-10 py-4 font-black text-lg clip-val hover:bg-val-red hover:text-white transition-all uppercase"
            >
              BACK TO HOME
            </Link>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative mt-12 lg:mt-0"
          >
            {/* Character Art (Jinx Style) */}
            <img
              src={jinx404}
              alt="Jinx 404"
              className="max-h-[70vh] object-contain drop-shadow-[0_0_50px_rgba(77,77,255,0.3)]"
            />
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#4D4DFF] blur-[120px] rounded-full opacity-50 z-[-1]"></div>
          </motion.div>
        </div>

        {/* Bottom Decorative Cards (News Style) */}
        <div className="container mx-auto px-6 mt-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-4 flex items-center gap-4 hover:border-val-red transition-all cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/10 shrink-0"></div>
                <div>
                  <span className="text-val-red text-[10px] font-bold block">
                    NEWS
                  </span>
                  <p className="text-xs font-bold leading-tight line-clamp-2">
                    LATEST PATCH NOTES AND RECENT GAME UPDATES v{i}.0
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;
