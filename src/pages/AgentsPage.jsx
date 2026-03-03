import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { agentData } from "../data/agents";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const AgentsPage = () => {
  const agents = Object.values(agentData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeAgent = agents[currentIndex];

  const nextAgent = () => {
    setCurrentIndex((prev) => (prev + 1) % agents.length);
  };

  const prevAgent = () => {
    setCurrentIndex((prev) => (prev - 1 + agents.length) % agents.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-val-dark overflow-hidden">
      <Header />
      <main className="flex-grow pt-24 relative flex flex-col h-screen">
        {/* Background "AGENTS" Text */}
        <h1 className="absolute left-10 top-1/2 -translate-y-1/2 font-oswald text-[12vw] font-black opacity-[0.03] select-none pointer-events-none vertical-text">
          AGENTS
        </h1>

        {/* Diagonal Background */}
        <div className="absolute inset-0 z-0 opacity-20 bg-[linear-gradient(135deg,#FF4655_40%,#0F1923_40%)]"></div>

        {/* Carousel Content */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-12 relative h-full max-h-[70vh]">
            {/* Agent Info (Left) */}
            <motion.div
              key={`${activeAgent.id}-info`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/3 flex flex-col items-start"
            >
              <span className="text-val-red font-black tracking-[0.3em] text-xs md:text-sm uppercase mb-4 block border-l-4 border-val-red pl-4">
                // {activeAgent.role}
              </span>
              <h2 className="font-oswald text-8xl md:text-[10vw] font-black italic uppercase leading-[0.8] mb-6 text-val-white">
                {activeAgent.name}
              </h2>
              <p className="text-val-grey text-lg max-w-md mb-8 leading-relaxed">
                {activeAgent.tagline}
              </p>

              <Link to={`/agents/${activeAgent.id}`}>
                <button className="px-8 py-3 border border-val-white/20 hover:border-val-red hover:text-val-red transition-all font-bold tracking-widest text-xs">
                  VIEW PROFILE
                </button>
              </Link>
            </motion.div>

            {/* Agent Visual (Center/Right) */}
            <div className="relative w-full lg:w-3/5 h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeAgent.id}
                  src={activeAgent.image}
                  alt={activeAgent.name}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="h-full max-h-[120%] object-contain drop-shadow-[0_0_80px_rgba(255,70,85,0.2)]"
                />
              </AnimatePresence>

              {/* Background Role Text */}
              <h3 className="absolute bottom-0 right-0 font-oswald text-[15vw] font-black text-transparent text-stroke opacity-5 uppercase select-none pointer-events-none">
                {activeAgent.role}
              </h3>
            </div>

            {/* Navigation (Floating) */}
            <div className="absolute bottom-0 left-0 lg:left-auto lg:right-6 flex gap-4 p-4">
              <button
                onClick={prevAgent}
                className="w-16 h-16 border border-white/10 hover:border-val-red group transition-all flex items-center justify-center"
              >
                <svg
                  className="w-6 h-6 transform rotate-180 group-hover:fill-val-red transition-colors"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
              <button
                onClick={nextAgent}
                className="w-16 h-16 border border-white/10 hover:border-val-red group transition-all flex items-center justify-center bg-val-red border-val-red"
              >
                <svg
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="white"
                >
                  <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Ability Detail Bar (Fixed Bottom) */}
        <div className="mt-auto py-10 bg-val-darker/80 backdrop-blur-xl border-t border-white/5 relative z-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {Object.entries(activeAgent.abilities).map(([key, ability]) => (
                <motion.div
                  key={`${activeAgent.id}-${key}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 group"
                >
                  <div className="w-16 h-16 bg-val-white/5 border border-white/10 p-3 group-hover:bg-val-red group-hover:border-val-red transition-all cursor-help relative">
                    <img
                      src={ability.icon}
                      alt={ability.name}
                      className="w-full h-full object-contain brightness-0 invert"
                    />
                    <span className="absolute -top-2 -right-2 bg-val-dark text-val-red text-[8px] font-black w-5 h-5 flex items-center justify-center border border-white/10">
                      {key === "ability1"
                        ? "C"
                        : key === "ability2"
                          ? "Q"
                          : key === "signature"
                            ? "E"
                            : "X"}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-oswald text-lg uppercase leading-tight group-hover:text-val-red transition-colors">
                      {ability.name}
                    </h4>
                    <p className="text-[10px] text-val-grey mt-1 uppercase tracking-wider line-clamp-1 group-hover:line-clamp-none transition-all">
                      {ability.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .text-stroke { -webkit-text-stroke: 1px rgba(236, 232, 225, 0.3); }
        .writing-mode-vertical { writing-mode: vertical-rl; }
      `,
        }}
      />
    </div>
  );
};

export default AgentsPage;
