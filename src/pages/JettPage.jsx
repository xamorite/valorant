import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const JettPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-val-dark text-val-white font-inter">
      <Header />
      <main>
        <section className="hero relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <div className="w-full h-full bg-[linear-gradient(135deg,#FF4655_20%,#0F1923_60%)] opacity-60"></div>
          </div>
          <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-between">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="agent-info flex-1 max-w-[600px] z-[2] text-center lg:text-left"
            >
              <span className="role-tag block text-sm font-bold text-val-white tracking-[4px] mb-2 uppercase">
                // DUELIST
              </span>
              <h1 className="agent-name font-oswald text-[70px] md:text-[100px] lg:text-[150px] leading-[0.9] font-black mb-5 bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent text-stroke uppercase">
                JETT
              </h1>
              <p className="agent-tagline text-lg text-val-grey mb-10 max-w-md mx-auto lg:mx-0">
                Representing her home country of South Korea, Jett's agile and
                evasive fighting style lets her take risks no one else can. She
                runs circles around every skirmish, cutting enemies before they
                even know what hit them.
              </p>
              <div className="hero-actions flex gap-5 justify-center lg:justify-start">
                <button className="bg-val-red text-white border-none px-10 py-4 font-black text-lg cursor-pointer clip-val uppercase">
                  LEARN MORE
                </button>
                <button className="bg-transparent text-val-white border-2 border-val-white px-10 py-4 font-black text-lg cursor-pointer clip-val hover:bg-val-white/10 transition-all uppercase">
                  BECOME A PRO
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="agent-visual flex-1 flex justify-center lg:justify-end relative mt-12 lg:mt-0"
            >
              <img
                src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"
                alt="Jett Character Art"
                className="jett-art max-h-[70vh] lg:max-h-[80vh] object-contain drop-shadow-[0_0_50px_rgba(0,240,255,0.2)] animate-float"
              />
            </motion.div>
          </div>
        </section>

        <section className="abilities py-24 bg-val-darker">
          <div className="container mx-auto px-5">
            <h2 className="font-oswald text-4xl md:text-5xl text-val-red mb-16 tracking-[2px] uppercase">
              SPECIAL ABILITIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  id: "cloudburst",
                  bind: "C",
                  name: "CLOUDBURST",
                  desc: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact.",
                  icon: "/src/assets/ability-cloudburst.png",
                },
                {
                  id: "updraft",
                  bind: "Q",
                  name: "UPDRAFT",
                  desc: "INSTANTLY impel Jett high into the air.",
                  icon: "/src/assets/ability-updraft.png",
                },
                {
                  id: "tailwind",
                  bind: "E",
                  name: "TAILWIND",
                  desc: "INSTANTLY impel Jett in the direction she is moving. If standing still, she will impel forward.",
                  icon: "/src/assets/ability-tailwind.png",
                  active: true,
                },
                {
                  id: "bladestorm",
                  bind: "X",
                  name: "BLADE STORM",
                  desc: "EQUIP a set of highly accurate throwing knives that recharge on killing an opponent.",
                  icon: "/src/assets/ability-bladestorm.png",
                },
              ].map((ability) => (
                <motion.div
                  whileHover={{ y: -10 }}
                  key={ability.id}
                  className={`bg-white/[0.03] rounded p-10 border transition-all duration-300 cursor-pointer ${ability.active ? "bg-val-red/5 border-val-red -translate-y-2.5" : "border-white/[0.05] hover:bg-val-red/5 hover:border-val-red"}`}
                >
                  <div className="flex justify-between items-center mb-8">
                    <img
                      src={ability.icon}
                      alt={ability.name}
                      className="w-12 h-12 object-contain"
                    />
                    <span className="font-oswald text-2xl text-val-grey">
                      {ability.bind}
                    </span>
                  </div>
                  <h3 className="font-oswald text-2xl mb-4 uppercase">
                    {ability.name}
                  </h3>
                  <p className="text-val-grey text-sm">{ability.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bio py-24">
          <div className="container mx-auto px-5 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="flex-1 w-full">
              <img
                src="https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png"
                alt="Jett"
                className="max-h-[50vh] object-contain drop-shadow-[0_0_40px_rgba(0,240,255,0.15)]"
              />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h2 className="font-oswald text-4xl md:text-5xl mb-10 tracking-[2px] uppercase">
                BIOGRAPHY
              </h2>
              <p className="text-xl text-val-grey mb-10">
                From the streets of Seoul to the battlefields of VALORANT, Jett
                is the ultimate speedster. Her agility isn't just for show; it's
                a weapon that keeps her one step ahead of the competition.
              </p>
              <div className="flex gap-10 justify-center lg:justify-start">
                <div className="flex flex-col">
                  <span className="text-[12px] text-val-red font-bold mb-1 uppercase">
                    ORIGIN
                  </span>
                  <span className="font-oswald text-3xl md:text-4xl uppercase">
                    SOUTH KOREA
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] text-val-red font-bold mb-1 uppercase">
                    ROLE
                  </span>
                  <span className="font-oswald text-3xl md:text-4xl uppercase">
                    DUELIST
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

export default JettPage;
