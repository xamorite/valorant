export const weaponData = {
  spectre: {
    id: "spectre",
    name: "SPECTRE",
    category: "SMGS",
    price: "1,600 VP",
    tagline:
      "When in doubt, the Spectre is your best friend. Versatile and reliable.",
    description:
      "The Spectre is a silenced submachine gun that excels at short-to-medium range combat. Its high fire rate and manageable recoil make it a favorite for eco-rounds.",
    image:
      "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
    stats: {
      fireRate: "13.33/sec",
      runSpeed: "5.73 m/sec",
      equipSpeed: "0.75 sec",
      reloadSpeed: "2.25 sec",
      magazine: "30",
      wallPen: "Medium",
    },
    damage: {
      head: { close: "78", med: "66", far: "54" },
      body: { close: "26", med: "22", far: "18" },
      leg: { close: "22", med: "18", far: "15" },
    },
    skins: [
      {
        name: "Default",
        image:
          "https://media.valorant-api.com/weapons/462080d1-4035-2937-7c09-27aa2a5c27a7/displayicon.png",
      },
      {
        name: "Singularity",
        image:
          "https://media.valorant-api.com/weaponskins/0eab3e5c-4de4-e221-34fb-2ab435c89eb6/displayicon.png",
      },
      {
        name: "RGX 11z Pro",
        image:
          "https://media.valorant-api.com/weaponskins/4f0c9544-469c-0c62-df2e-95b15d6f2333/displayicon.png",
      },
    ],
  },
  vandal: {
    id: "vandal",
    name: "VANDAL",
    category: "RIFLES",
    price: "2,900 VP",
    tagline:
      "The Vandal is a high-power rifle that rewards precision with one-tap headshots at any range.",
    description:
      "The Vandal is most effective at long ranges. Its high recoil is compensated by its ability to kill with a single headshot regardless of distance.",
    image:
      "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
    stats: {
      fireRate: "9.75/sec",
      runSpeed: "5.4 m/sec",
      equipSpeed: "1.0 sec",
      reloadSpeed: "2.5 sec",
      magazine: "25",
      wallPen: "Medium",
    },
    damage: {
      head: { close: "160", med: "160", far: "160" },
      body: { close: "40", med: "40", far: "40" },
      leg: { close: "34", med: "34", far: "34" },
    },
    skins: [
      {
        name: "Default",
        image:
          "https://media.valorant-api.com/weapons/9c82e19d-4575-0200-1a81-3eacf00cf872/displayicon.png",
      },
      {
        name: "Reaver",
        image:
          "https://media.valorant-api.com/weaponskins/30388628-42f0-606c-82c0-73ad43de997f/displayicon.png",
      },
      {
        name: "Prime",
        image:
          "https://media.valorant-api.com/weaponskins/b9ee2457-481c-6776-3f5b-0ca8e8f90c89/displayicon.png",
      },
    ],
  },
  phantom: {
    id: "phantom",
    name: "PHANTOM",
    category: "RIFLES",
    price: "2,900 VP",
    tagline:
      "The Phantom is a silenced, fast-firing rifle that excels at shorter ranges and spray control.",
    description:
      "The Phantom's silencer hides tracers and reduces noise, making it perfect for lurking. Its damage drops off at longer distances but it has a superior fire rate.",
    image:
      "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
    stats: {
      fireRate: "11/sec",
      runSpeed: "5.4 m/sec",
      equipSpeed: "1.0 sec",
      reloadSpeed: "2.5 sec",
      magazine: "30",
      wallPen: "Medium",
    },
    damage: {
      head: { close: "156", med: "140", far: "124" },
      body: { close: "39", med: "35", far: "31" },
      leg: { close: "33", med: "29", far: "26" },
    },
    skins: [
      {
        name: "Default",
        image:
          "https://media.valorant-api.com/weapons/ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a/displayicon.png",
      },
      {
        name: "Oni",
        image:
          "https://media.valorant-api.com/weaponskins/36791b03-452d-8dad-0091-898cc28d2196/displayicon.png",
      },
    ],
  },
  operator: {
    id: "operator",
    name: "OPERATOR",
    category: "SNIPER RIFLES",
    price: "4,700 VP",
    tagline:
      "The Operator is a bolt-action sniper rifle with high damage, capable of killing with one shot to the body.",
    description:
      "The ultimate risk-reward weapon. Extremely slow to fire and reload, but devastatingly powerful. Best for holding long angles.",
    image:
      "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png",
    stats: {
      fireRate: "0.6/sec",
      runSpeed: "5.13 m/sec",
      equipSpeed: "1.5 sec",
      reloadSpeed: "3.7 sec",
      magazine: "5",
      wallPen: "High",
    },
    damage: {
      head: { close: "255", med: "255", far: "255" },
      body: { close: "150", med: "150", far: "150" },
      leg: { close: "120", med: "120", far: "120" },
    },
    skins: [
      {
        name: "Default",
        image:
          "https://media.valorant-api.com/weapons/a03b24d3-4319-996d-0f8c-94bbfba1dfc7/displayicon.png",
      },
      {
        name: "Elderflame",
        image:
          "https://media.valorant-api.com/weaponskins/d722313d-43cb-b38d-7841-75880a3ed2cb/displayicon.png",
      },
    ],
  },
};
