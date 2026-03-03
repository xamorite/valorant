import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const newsArticles = [
  {
    id: 1,
    category: "GAME UPDATES",
    date: "MAR 3, 2026",
    title: "VALORANT Patch Notes 12.04",
    description:
      "Patch 12.04 is all about a refreshed quality of life experience.",
    link: "https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-12-04",
    image:
      "https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png",
    featured: true,
  },
  {
    id: 2,
    category: "DEV",
    date: "FEB 27, 2026",
    title: "The Making of a Zeus-inspired VALORANT Skin",
    description:
      "A VALORANT artist's process designing a hypothetical skin for the lightning-wielding god of thunder.",
    link: "https://www.youtube.com/watch?v=KMFHILAsXzo",
    image:
      "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
    featured: false,
  },
  {
    id: 3,
    category: "ESPORTS",
    date: "FEB 23, 2026",
    title: "Masters Santiago: Watch and Earn",
    description:
      "Tune in to the live matches and unlock exclusive Drops while you watch.",
    link: "https://valorantesports.com/en-us/news/masters-santiago-watch-and-earn",
    image:
      "https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/fullportrait.png",
    featured: false,
  },
  {
    id: 4,
    category: "ESPORTS",
    date: "FEB 21, 2026",
    title: "Masters Santiago Merch Collection",
    description:
      "Celebrate Masters Santiago with a limited-edition merch drop. Get it before it's gone.",
    link: "https://valorantesports.com/en-us/news/masters-santiago-merch-collection",
    image:
      "https://media.valorant-api.com/agents/320b2a48-4d9b-a075-30f1-1f93a9b638fa/fullportrait.png",
    featured: false,
  },
  {
    id: 5,
    category: "ESPORTS",
    date: "FEB 20, 2026",
    title: "Masters Santiago: Everything You Need To Know",
    description:
      "Get the full rundown on the first global event of the 2026 VCT season!",
    link: "https://valorantesports.com/en-us/news/masters-santiago-everything-you-need-to-know",
    image:
      "https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/fullportrait.png",
    featured: false,
  },
  {
    id: 6,
    category: "ESPORTS",
    date: "FEB 18, 2026",
    title: "Masters Santiago: Skirmish Series",
    description:
      "Attending Masters Santiago? Find out more about the new on-site competition taking place on select days of the event!",
    link: "https://valorantesports.com/en-us/news/masters-santiago-skirmish-series",
    image:
      "https://media.valorant-api.com/agents/a3bfb853-43b2-7238-a4f1-ad90e9e46bcc/fullportrait.png",
    featured: false,
  },
  {
    id: 7,
    category: "ESPORTS",
    date: "FEB 17, 2026",
    title: "Masters Santiago: Know Before You Go",
    description:
      "Find out about all the updates, activities, and activations we'll have at Masters Santiago!",
    link: "https://valorantesports.com/en-us/news/masters-santiago-know-before-you-go",
    image:
      "https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-b099415b2b27/fullportrait.png",
    featured: false,
  },
  {
    id: 8,
    category: "GAME UPDATES",
    date: "FEB 17, 2026",
    title: "VALORANT Patch Notes 12.03",
    description: "Modes updates, Gekko changes, and more.",
    link: "https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-12-03",
    image:
      "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
    featured: false,
  },
  {
    id: 9,
    category: "ESPORTS",
    date: "FEB 16, 2026",
    title: "Masters Santiago: Pick'Ems powered by AWS",
    description:
      "Pick'Ems kicks off on February 19 on the website and in the client. Lock in your picks and get ready!",
    link: "https://valorantesports.com/en-us/news/masters-santiago-pickems-powered-by-aws",
    image:
      "https://media.valorant-api.com/agents/569fdd95-4d10-43ab-ca70-79becc718b46/fullportrait.png",
    featured: false,
  },
  {
    id: 10,
    category: "ESPORTS",
    date: "FEB 13, 2026",
    title: "Introducing the 2026 VCT Season Capsule!",
    description:
      "The Season Capsule offers fans a unique way to represent their region while supporting every team in the league through an equal revenue split across the VCT.",
    link: "https://valorantesports.com/en-us/news/introducing-the-2026-vct-season-capsule",
    image:
      "https://media.valorant-api.com/agents/6f2a04ca-43e0-be17-7f36-b3908627744d/fullportrait.png",
    featured: false,
  },
  {
    id: 11,
    category: "GAME UPDATES",
    date: "FEB 3, 2026",
    title: "VALORANT Patch Notes 12.02",
    description: "Adjustments to Harbor and Reyna, and more.",
    link: "https://playvalorant.com/en-us/news/game-updates/valorant-patch-notes-12-02",
    image:
      "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
    featured: false,
  },
  {
    id: 12,
    category: "GAME UPDATES",
    date: "FEB 3, 2026",
    title: "No One Fights Like A Family // Year of the Horse MV",
    description:
      "Fortune turns. Momentum swings. One round can change everything. No one fights like family.",
    link: "https://www.youtube.com/watch?v=Qyfxpx0S3c0",
    image:
      "https://media.valorant-api.com/agents/707eab51-4836-f488-046a-cda6bf494b52/fullportrait.png",
    featured: false,
  },
];

const categoryColors = {
  "GAME UPDATES": "text-emerald-400",
  DEV: "text-purple-400",
  ESPORTS: "text-amber-400",
};

const NewsPage = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const filters = ["ALL", "GAME UPDATES", "ESPORTS", "DEV"];

  const filteredArticles =
    activeFilter === "ALL"
      ? newsArticles
      : newsArticles.filter((a) => a.category === activeFilter);

  const featured = newsArticles[0];
  const restArticles =
    activeFilter === "ALL" ? filteredArticles.slice(1) : filteredArticles;

  return (
    <div className="min-h-screen flex flex-col bg-val-dark text-white font-inter overflow-x-hidden">
      <Header />
      <main className="flex-grow pt-24 relative">
        {/* Background text */}
        <h1 className="absolute right-[-5%] top-20 font-oswald text-[18vw] font-black opacity-[0.02] uppercase select-none pointer-events-none leading-none">
          NEWS
        </h1>

        <div className="container mx-auto px-6 py-10 relative z-10">
          {/* Page Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
            <div>
              <span className="text-val-red font-bold tracking-[4px] block mb-2">
                // LATEST
              </span>
              <h2 className="font-oswald text-6xl font-black uppercase tracking-tight">
                NEWS & <span className="text-val-red">UPDATES</span>
              </h2>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-4">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1 text-[10px] font-black tracking-widest border transition-all ${
                    activeFilter === filter
                      ? "bg-val-white text-val-dark border-val-white"
                      : "bg-transparent text-val-white/40 border-val-white/10 hover:border-val-red hover:text-val-red"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Article */}
          {activeFilter === "ALL" && (
            <motion.a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="group relative block h-[500px] overflow-hidden mb-16 border border-white/5 bg-val-darker"
            >
              {/* Background image */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-val-dark via-val-dark/80 to-transparent z-10"></div>
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-[80%] object-contain opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-700"
                />
              </div>

              {/* Content */}
              <div className="absolute bottom-16 left-16 right-16 z-20">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className={`${
                      categoryColors[featured.category] || "text-val-red"
                    } font-black text-[10px] tracking-widest uppercase`}
                  >
                    {featured.category}
                  </span>
                  <span className="text-val-grey text-[10px] font-bold">
                    {featured.date}
                  </span>
                </div>
                <h3 className="font-oswald text-5xl font-black uppercase mb-4 group-hover:text-val-red transition-colors leading-tight">
                  {featured.title}
                </h3>
                <p className="text-val-grey text-lg max-w-2xl mb-6">
                  {featured.description}
                </p>
                <span className="text-val-white font-bold tracking-widest text-sm flex items-center gap-4">
                  READ MORE
                  <div className="w-12 h-px bg-val-red group-hover:w-20 transition-all"></div>
                </span>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-val-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.a>
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restArticles.map((article, idx) => (
              <motion.a
                key={article.id}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                className="group relative bg-val-darker border border-white/5 overflow-hidden hover:border-val-red/30 transition-all"
              >
                {/* Article Image */}
                <div className="relative h-52 bg-black/50 overflow-hidden flex items-center justify-center">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="max-h-full object-contain opacity-40 group-hover:opacity-60 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-val-darker via-transparent to-transparent"></div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`${
                        categoryColors[article.category] || "text-val-red"
                      } font-black text-[9px] tracking-widest uppercase`}
                    >
                      {article.category}
                    </span>
                    <span className="text-val-grey text-[9px] font-bold">
                      {article.date}
                    </span>
                  </div>
                  <h4 className="font-oswald text-xl font-black uppercase mb-3 group-hover:text-val-red transition-colors leading-tight line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-val-grey text-sm line-clamp-2 mb-4">
                    {article.description}
                  </p>
                  <span className="text-val-white/50 font-bold tracking-widest text-[10px] flex items-center gap-3 group-hover:text-val-red transition-colors">
                    READ MORE
                    <div className="w-6 h-px bg-val-red group-hover:w-10 transition-all"></div>
                  </span>
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-val-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsPage;
