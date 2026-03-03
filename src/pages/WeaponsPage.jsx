import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { weaponData } from "../data/weapons";

const WeaponsPage = () => {
  const [category, setCategory] = useState("ALL");
  const weapons = Object.values(weaponData);

  const categories = [
    "ALL",
    "SIDEARMS",
    "SMGS",
    "SHOTGUNS",
    "RIFLES",
    "SNIPERS",
    "HEAVY",
  ];

  return (
    <div className="min-h-screen flex flex-col bg-val-white text-val-dark font-inter overflow-hidden">
      <Header />
      <main className="flex-grow pt-24 relative flex flex-col">
        {/* Large Background Text */}
        <h1 className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-oswald text-[20vw] font-black opacity-[0.05] vertical-text select-none pointer-events-none">
          WEAPONS
        </h1>

        <div className="container mx-auto px-6 py-10 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <span className="text-val-red font-bold tracking-[4px] block mb-2">
                // ARSENAL
              </span>
              <h2 className="font-oswald text-6xl font-black uppercase tracking-tight">
                CHOOSE YOUR <span className="text-val-red">WEAPON</span>
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1 text-[10px] font-black tracking-widest border transition-all ${
                    category === cat
                      ? "bg-val-dark text-white border-val-dark"
                      : "bg-transparent text-val-dark/40 border-val-dark/10 hover:border-val-red hover:text-val-red"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Weapons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {weapons.map((weapon) => (
              <Link
                to={`/weapons/${weapon.id}`}
                key={weapon.id}
                className="group relative bg-[#111] p-12 overflow-hidden cursor-pointer"
              >
                <div className="absolute left-6 top-6 flex flex-col">
                  <span className="text-val-red font-black text-[10px] tracking-widest">
                    {weapon.category}
                  </span>
                  <h3 className="font-oswald text-4xl text-white font-black group-hover:text-val-red transition-colors">
                    {weapon.name}
                  </h3>
                </div>
                <div className="absolute right-6 top-6 bg-white/10 px-3 py-1 text-white/40 text-[10px] font-bold">
                  {weapon.price}
                </div>

                <motion.img
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  src={weapon.image}
                  alt={weapon.name}
                  className="w-full h-48 object-contain mt-12 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                />

                <div className="mt-8 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">
                    View Details
                  </span>
                  <div className="w-8 h-8 rounded-full bg-val-red flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                    </svg>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-val-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default WeaponsPage;
