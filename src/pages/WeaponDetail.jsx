import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { weaponData } from "../data/weapons";
import {
  Activity,
  Shield,
  Crosshair,
  Zap,
  Package,
  Archive,
} from "lucide-react";

const WeaponDetail = () => {
  const { id } = useParams();
  const weapon = weaponData[id];

  if (!weapon) {
    return (
      <div className="min-h-screen bg-val-dark flex items-center justify-center text-white font-oswald text-4xl uppercase">
        Weapon Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-val-white text-val-dark font-inter overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24 relative">
        {/* Diagonal Accents */}
        <div className="absolute right-[-10%] top-0 h-full w-[40%] bg-val-dark z-0 clip-path-[polygon(20%_0%,100%_0%,100%_100%,0%_100%)]"></div>

        <div className="container mx-auto px-6 py-12 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Left Side: Stats and Info */}
            <div className="flex-1 space-y-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
              >
                <Link
                  to="/weapons"
                  className="text-val-red font-bold text-xs tracking-[2px] hover:underline mb-8 inline-block flex items-center gap-2"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-val-red transform rotate-180"
                  >
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                  </svg>
                  BACK TO ARSENAL
                </Link>
                <span className="text-val-red font-black text-sm tracking-[4px] block mb-2 uppercase">
                  // {weapon.category}
                </span>
                <h1 className="font-oswald text-[120px] leading-[0.8] font-black uppercase mb-8">
                  {weapon.name}
                </h1>

                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-val-dark text-white px-4 py-2 font-black text-xl uppercase tracking-widest">
                    {weapon.price}
                  </div>
                  <div className="h-8 w-[1px] bg-val-dark/20"></div>
                  <span className="text-val-dark/60 font-bold uppercase tracking-widest text-xs">
                    Primary Weapon
                  </span>
                </div>

                <p className="text-lg leading-relaxed text-val-dark/80 max-w-lg mb-12">
                  {weapon.description}
                </p>
              </motion.div>

              {/* Technical Stats Grid */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="grid grid-cols-2 md:grid-cols-3 gap-8"
              >
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Fire Rate
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.fireRate}
                  </span>
                </div>
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Activity size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Run Speed
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.runSpeed}
                  </span>
                </div>
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Shield size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Penetration
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.wallPen}
                  </span>
                </div>
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Package size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Magazine
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.magazine}
                  </span>
                </div>
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Reload
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.reloadSpeed}
                  </span>
                </div>
                <div className="stat-item">
                  <div className="flex items-center gap-2 text-val-red mb-1">
                    <Zap size={14} />
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      Equip
                    </span>
                  </div>
                  <span className="font-oswald text-2xl uppercase">
                    {weapon.stats.equipSpeed}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Side: Weapon Visual and Damage */}
            <div className="flex-1 flex flex-col items-center lg:items-end w-full">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative w-full flex justify-center mb-20"
              >
                <img
                  src={weapon.image}
                  alt={weapon.name}
                  className="max-h-[50vh] object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.5)] z-10"
                />
                <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-oswald text-[15vw] font-black text-transparent text-stroke opacity-10 uppercase select-none pointer-events-none">
                  {weapon.category}
                </h1>
              </motion.div>

              {/* Damage Diagram */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-val-dark p-8 w-full max-w-md border-l-4 border-val-red"
              >
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-white font-oswald text-xl uppercase tracking-widest">
                    Damage Breakdown
                  </h3>
                  <span className="text-val-grey text-[10px] font-bold uppercase tracking-widest">
                    Short Range (0-15m)
                  </span>
                </div>

                <div className="flex items-center gap-12">
                  <div className="relative">
                    {/* Simple Character Skeleton */}
                    <div className="w-16 h-32 border border-white/20 relative rounded-sm">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-val-red rounded-full"></div>
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-8 h-12 border border-white/40"></div>
                      <div className="absolute top-22 left-1/2 -translate-x-1/2 w-8 h-10 border-x border-white/20"></div>
                    </div>
                  </div>
                  <div className="flex-grow space-y-4">
                    <div className="flex justify-between items-center bg-white/5 p-3">
                      <span className="text-val-grey text-[10px] font-black uppercase">
                        Head
                      </span>
                      <span className="text-val-red font-oswald text-xl">
                        {weapon.damage.head.close}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3">
                      <span className="text-val-grey text-[10px] font-black uppercase">
                        Body
                      </span>
                      <span className="text-white font-oswald text-xl">
                        {weapon.damage.body.close}
                      </span>
                    </div>
                    <div className="flex justify-between items-center bg-white/5 p-3">
                      <span className="text-val-grey text-[10px] font-black uppercase">
                        Leg
                      </span>
                      <span className="text-white font-oswald text-xl">
                        {weapon.damage.leg.close}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skins Section */}
        <section className="bg-val-dark/5 py-20 mt-12 border-t border-val-dark/5">
          <div className="container mx-auto px-6">
            <h3 className="font-oswald text-3xl uppercase mb-10 tracking-tight">
              Available{" "}
              <span className="text-val-red text-transparent text-stroke">
                Skins
              </span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {weapon.skins.map((skin, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="bg-val-dark h-40 flex items-center justify-center p-8 mb-4 border-b-2 border-transparent group-hover:border-val-red transition-all overflow-hidden">
                    <img
                      src={skin.image}
                      alt={skin.name}
                      className="max-h-full object-contain group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-val-dark/40 group-hover:text-val-red transition-colors">
                    {skin.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WeaponDetail;
