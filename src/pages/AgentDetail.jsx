import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { agentData } from "../data/agents";

const AgentDetail = () => {
  const { id } = useParams();
  const agent = agentData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!agent) {
    return (
      <div className="min-h-screen bg-val-dark flex items-center justify-center text-white font-oswald text-4xl uppercase">
        Agent Not Found
      </div>
    );
  }

  return (
    <div className="bg-val-dark text-val-white font-inter">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Background gradient */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#FF4655_30%,#0F1923_60%)] opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-val-dark to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between relative z-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="agent-info flex-1 max-w-[600px] z-[2] text-center lg:text-left"
            >
              <span className="block text-sm font-bold text-val-red tracking-[4px] mb-2 uppercase">
                // {agent.role}
              </span>
              <h1 className="font-oswald text-[70px] md:text-[100px] lg:text-[150px] leading-[0.9] font-black mb-5 uppercase text-val-white">
                {agent.name}
              </h1>
              <p className="text-lg text-val-grey mb-10 max-w-md mx-auto lg:mx-0">
                {agent.tagline}
              </p>
              <div className="flex gap-5 justify-center lg:justify-start">
                <Link to="/agents">
                  <button className="bg-transparent text-val-white border-2 border-val-white px-10 py-4 font-black text-lg cursor-pointer clip-val hover:bg-val-white/10 transition-all uppercase">
                    BACK TO AGENTS
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="agent-visual flex-1 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="max-h-[70vh] lg:max-h-[80vh] object-contain drop-shadow-[0_0_50px_rgba(255,70,85,0.3)]"
              />
            </motion.div>
          </div>
        </section>

        {/* Abilities */}
        <section className="abilities py-24 bg-val-darker">
          <div className="container mx-auto px-5">
            <h2 className="font-oswald text-4xl md:text-5xl text-val-red mb-16 tracking-[2px] uppercase">
              SPECIAL ABILITIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {Object.entries(agent.abilities).map(([key, ability], index) => {
                const bind =
                  key === "ability1"
                    ? "C"
                    : key === "ability2"
                      ? "Q"
                      : key === "signature"
                        ? "E"
                        : "X";
                const isSignature = key === "signature";
                return (
                  <motion.div
                    whileHover={{ y: -10 }}
                    key={key}
                    className={`bg-white/[0.03] rounded p-10 border transition-all duration-300 cursor-pointer ${
                      isSignature
                        ? "bg-val-red/5 border-val-red -translate-y-2.5"
                        : "border-white/[0.05] hover:bg-val-red/5 hover:border-val-red"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-8">
                      <img
                        src={ability.icon}
                        alt={ability.name}
                        className="w-12 h-12 object-contain brightness-0 invert"
                      />
                      <span className="font-oswald text-2xl text-val-grey">
                        {bind}
                      </span>
                    </div>
                    <h3 className="font-oswald text-2xl mb-4 uppercase">
                      {ability.name}
                    </h3>
                    <p className="text-val-grey text-sm">{ability.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="bio py-24">
          <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1 w-full flex items-center justify-center">
              <img
                src={agent.image}
                alt={agent.name}
                className="max-h-[60vh] object-contain drop-shadow-[0_0_40px_rgba(255,70,85,0.15)]"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-oswald text-4xl md:text-5xl mb-10 tracking-[2px] uppercase">
                BIOGRAPHY
              </h2>
              <p className="text-xl text-val-grey mb-10">{agent.tagline}</p>
              <div className="flex gap-10 justify-center lg:justify-start">
                <div className="flex flex-col">
                  <span className="text-[12px] text-val-red font-bold mb-1 uppercase">
                    ORIGIN
                  </span>
                  <span className="font-oswald text-3xl md:text-4xl uppercase">
                    {agent.origin}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-val-red font-bold mb-1 uppercase">
                    ROLE
                  </span>
                  <span className="font-oswald text-3xl md:text-4xl uppercase">
                    {agent.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AgentDetail;
