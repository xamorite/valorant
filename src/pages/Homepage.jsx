import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-val-dark text-val-white font-inter overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[120%] bg-val-red/10 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[80%] bg-blue-500/5 blur-[120px] rounded-full"></div>
          <div className="absolute inset-0 bg-[url('https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png')] bg-no-repeat bg-[right_center] bg-contain opacity-20 lg:opacity-40 translate-x-20"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-val-red font-black tracking-[0.3em] text-sm md:text-base uppercase mb-4 block">
                A 5V5 CHARACTER-BASED TACTICAL SHOOTER
              </span>
              <h1 className="font-oswald text-6xl md:text-9xl font-black italic uppercase leading-[0.9] mb-8">
                DEFY THE <br />
                <span className="text-transparent stroke-text">LIMITS</span>
              </h1>
              <p className="text-val-grey text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
                Blend your style and experience on a global, competitive stage.
                You have 13 rounds to attack and defend your side using sharp
                gunplay and tactical abilities. And, with one life per-round,
                you'll need to think faster than your opponent if you want to
                survive.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/agents">
                  <button className="val-btn-primary group relative px-12 py-5 bg-val-red text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:pr-16">
                    <span className="relative z-10">MEET THE AGENTS</span>
                    <div className="absolute top-0 right-0 h-full w-0 bg-val-dark group-hover:w-full transition-all duration-300 -z-0"></div>
                    <svg
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-4 opacity-0 group-hover:opacity-100 transition-all"
                      viewBox="0 0 24 16"
                      fill="none"
                    >
                      <path
                        d="M16 1L23 8L16 15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M0 8H22"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to="/weapons">
                  <button className="group px-12 py-5 border border-white/20 hover:border-val-red transition-all text-white font-bold uppercase tracking-widest">
                    EXPLORE ARSENAL
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase transform rotate-90 mb-8">
            SCROLL
          </span>
          <div className="w-px h-24 bg-gradient-to-b from-val-red to-transparent"></div>
        </div>
      </section>

      {/* Feature Grid Section */}
      <section className="py-32 relative bg-val-darker overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Feature 1: Agents */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[600px] overflow-hidden border border-white/5 bg-val-dark/50"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"
                  alt="Agents"
                  className="absolute -right-20 -bottom-10 h-[120%] object-contain opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700 scale-105 group-hover:scale-110"
                />
                <img
                  src="https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png"
                  alt="Phoenix"
                  className="absolute -left-10 -bottom-10 h-[100%] object-contain opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-val-dark via-transparent to-transparent"></div>

              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-val-red font-bold text-xs tracking-widest uppercase mb-2 block">
                  POWERED BY RADIANT
                </span>
                <h2 className="font-oswald text-5xl font-black uppercase mb-6">
                  YOUR AGENTS
                </h2>
                <p className="text-val-grey mb-8 max-w-md">
                  More than guns and bullets, you’ll choose an Agent armed with
                  adaptive, swift, and lethal abilities that create
                  opportunities to let your gunplay shine.
                </p>
                <Link
                  to="/agents"
                  className="text-val-white font-bold tracking-widest group/link flex items-center gap-4"
                >
                  VIEW ALL AGENTS
                  <div className="w-12 h-px bg-val-red group-hover/link:w-20 transition-all"></div>
                </Link>
              </div>
            </motion.div>

            {/* Feature 2: Weapons */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group relative h-[600px] overflow-hidden border border-white/5 bg-val-dark/50"
            >
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <img
                  src="https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png"
                  alt="Vandal"
                  className="w-[80%] object-contain opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-700 scale-110 group-hover:scale-125 rotate-[-15deg]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-val-dark via-transparent to-transparent"></div>

              <div className="absolute bottom-12 left-12 right-12">
                <span className="text-val-red font-bold text-xs tracking-widest uppercase mb-2 block">
                  PRECISION ENGINEERING
                </span>
                <h2 className="font-oswald text-5xl font-black uppercase mb-6">
                  THE ARSENAL
                </h2>
                <p className="text-val-grey mb-8 max-w-md">
                  From stealthy sidearms to heavy-duty machine guns, every
                  weapon in Valorant is a tool for precision. Master the recoil,
                  find your rhythm.
                </p>
                <Link
                  to="/weapons"
                  className="text-val-white font-bold tracking-widest group/link flex items-center gap-4"
                >
                  BROWSE WEAPONS
                  <div className="w-12 h-px bg-val-red group-hover/link:w-20 transition-all"></div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Background Vertical Text */}
        <h2 className="absolute top-1/2 right-10 -translate-y-1/2 transform rotate-90 font-oswald text-[15vw] font-black opacity-[0.02] pointer-events-none uppercase whitespace-nowrap">
          TACTICAL BATTLEFIELD
        </h2>
      </section>

      {/* Call to Action */}
      <section className="py-40 bg-val-red text-val-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-val-dark/10 -skew-x-12 translate-x-1/2"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-oswald text-7xl md:text-9xl font-black uppercase mb-12 italic">
            READY TO DEFY?
          </h2>
          <button className="px-20 py-8 bg-val-dark text-white font-black text-2xl uppercase tracking-[0.2em] hover:bg-white hover:text-val-red transition-all">
            PLAY FREE NOW
          </button>
        </div>
      </section>

      <Footer />

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .stroke-text {
          -webkit-text-stroke: 2px white;
        }
      `,
        }}
      />
    </div>
  );
};

export default Homepage;
