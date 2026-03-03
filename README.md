# VALORANT // Agent Concept

A premium, Figma-inspired Valorant fan site built with React, featuring agent profiles, weapon arsenals, and the latest news — all powered by the [Valorant API](https://valorant-api.com/).

## Features

- **Homepage** — Cinematic hero section with Jett, feature cards linking to Agents and Arsenal
- **Agents Carousel** — Browse all agents (Jett, Phoenix, Sage, Sova, Reyna, Cypher, Killjoy) with transparent portraits and ability previews
- **Agent Detail Pages** — Dynamic `/agents/:id` routes with hero, abilities, and biography for every agent
- **Arsenal** — Weapon listing with category filters, linking to individual weapon detail pages
- **Weapon Detail Pages** — Stats, damage breakdown, and available skins for each weapon
- **News** — 12 real articles from the official Valorant news feed with category filtering (Game Updates, Esports, Dev)
- **404 Page** — Custom Jinx-themed error page

## Tech Stack

| Technology       | Purpose                                   |
| ---------------- | ----------------------------------------- |
| React 18         | UI framework                              |
| React Router DOM | Client-side routing                       |
| Framer Motion    | Animations & transitions                  |
| Tailwind CSS     | Utility-first styling                     |
| Vite             | Build tool & dev server                   |
| Lucide React     | Icon library                              |
| Valorant API     | Agent portraits, weapon images, skin data |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Design

UI inspired by the official [Valorant website](https://playvalorant.com) and Figma concept designs, featuring:

- Dark tactical aesthetic with red (#FF4655) accent color
- Oswald + Inter typography
- Diagonal clip-path elements and grayscale-to-color hover effects
- Responsive layout across all breakpoints

## Project Structure

```
src/
├── components/    # Header, Footer
├── data/          # agents.js, weapons.js
├── pages/         # Homepage, AgentsPage, AgentDetail, WeaponsPage, WeaponDetail, NewsPage, JettPage, NotFoundPage
├── assets/        # Local images (ability icons, logos)
├── index.css      # Global styles & Tailwind config
└── main.jsx       # Router & entry point
```

## License

This is a fan project. VALORANT and all related assets are property of Riot Games, Inc.

---

Built by [xamorite](https://xamorite.netlify.app)
