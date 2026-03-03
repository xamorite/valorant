document.addEventListener("DOMContentLoaded", () => {
  // Parallax Effect for Hero Background
  const hero = document.querySelector(".hero");
  const bg = document.querySelector(".parallax-bg");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY;
    if (bg) {
      bg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      // In a real implementation, we'd toggle a mobile-specific menu
      // For now, let's just log or do a simple alert/overlay
      console.log("Mobile menu clicked");
    });
  }

  // Ability Cards Interactivity
  const abilityCards = document.querySelectorAll(".ability-card");

  abilityCards.forEach((card) => {
    card.addEventListener("click", () => {
      // Remove active class from all
      abilityCards.forEach((c) => c.classList.remove("active"));
      // Add to clicked
      card.classList.add("active");

      // Log for verification
      const ability = card.getAttribute("data-ability");
      console.log(`Selected ability: ${ability}`);
    });
  });

  // Reveal animations on scroll
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".ability-card, .bio-content").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
  });

  // Agent Data for Agents Page
  const agentData = {
    phoenix: {
      name: "PHOENIX",
      origin: "UNITED KINGDOM",
      abilities: {
        basic: {
          name: "CURVEBALL",
          desc: "EQUIP a flare orb that takes a curving path and detonates shortly after throwing.",
          icon: "images/icon_ability_curveball.png",
        },
        signature: {
          name: "HOT HANDS",
          desc: "EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground.",
          icon: "images/icon_ability_hot_hands.png",
        },
        ultimate: {
          name: "RUN IT BACK",
          desc: "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will respawn Phoenix at this location.",
          icon: "images/icon_ability_run_it_back.png",
        },
      },
    },
    jett: {
      name: "JETT",
      origin: "SOUTH KOREA",
      abilities: {
        basic: {
          name: "CLOUDBURST",
          desc: "INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface.",
          icon: "images/ability-cloudburst.png",
        },
        signature: {
          name: "TAILWIND",
          desc: "INSTANTLY impel Jett in the direction she is moving. If Jett is standing still, she will impel forward.",
          icon: "images/ability-tailwind.png",
        },
        ultimate: {
          name: "BLADE STORM",
          desc: "EQUIP a set of highly accurate throwing knives that recharge on killing an opponent.",
          icon: "images/ability-bladestorm.png",
        },
      },
    },
    sova: {
      name: "SOVA",
      origin: "RUSSIA",
      abilities: {
        basic: {
          name: "OWL DRONE",
          desc: "EQUIP an owl drone. FIRE to deploy and take control of movement of the drone.",
          icon: "images/icon_ability_owl_drone.png",
        },
        signature: {
          name: "RECON BOLT",
          desc: "EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies.",
          icon: "images/icon_ability_recon_bolt.png",
        },
        ultimate: {
          name: "HUNTER'S FURY",
          desc: "EQUIP a bow with three long-range, wall-piercing energy blasts.",
          icon: "images/icon_ability_hunters_fury.png",
        },
      },
    },
    sage: {
      name: "SAGE",
      origin: "CHINA",
      abilities: {
        basic: {
          name: "SLOW ORB",
          desc: "EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing.",
          icon: "images/icon_ability_slow_orb.png",
        },
        signature: {
          name: "HEALING ORB",
          desc: "EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time.",
          icon: "images/icon_ability_healing_orb.png",
        },
        ultimate: {
          name: "RESURRECTION",
          desc: "EQUIP a resurrection ability. FIRE with your crosshairs over a dead ally to begin resurrecting them.",
          icon: "images/icon_ability_resurrection.png",
        },
      },
    },
  };

  // Agent Selection Logic
  const agentCards = document.querySelectorAll(".agent-select-card");
  if (agentCards.length > 0) {
    agentCards.forEach((card) => {
      card.addEventListener("click", () => {
        const agentKey = card.getAttribute("data-agent");
        if (!agentKey || agentKey === "jett") return; // Jett redirects to her own page

        // Update UI: Card Active State
        agentCards.forEach((c) => {
          c.classList.remove(
            "flex-[1.5]",
            "bg-val-white",
            "border-val-red",
            "select-active",
          );
          c.classList.add("flex-1", "bg-white/5", "border-white/10");
          const textElements = c.querySelectorAll(".agent-card-text");
          textElements.forEach((t) => {
            t.classList.remove("text-val-red", "text-val-dark/60");
            t.classList.add("opacity-20");
          });
          const img = c.querySelector("img");
          if (img) img.classList.remove("scale-110");
        });

        card.classList.remove("flex-1", "bg-white/5", "border-white/10");
        card.classList.add(
          "flex-[1.5]",
          "bg-val-white",
          "border-val-red",
          "select-active",
        );
        const activeText = card.querySelectorAll(".agent-card-text");
        activeText.forEach((t) => {
          t.classList.remove("opacity-20");
          if (t.classList.contains("font-oswald"))
            t.classList.add("text-val-red");
          else t.classList.add("text-val-dark/60");
        });
        const activeImg = card.querySelector("img");
        if (activeImg) activeImg.classList.add("scale-110");

        // Update Ability Bar
        const data = agentData[agentKey];
        if (data) {
          document.getElementById("ability-name-basic").textContent =
            data.abilities.basic.name;
          document.getElementById("ability-desc-basic").textContent =
            data.abilities.basic.desc;
          document.getElementById("ability-icon-basic").src =
            data.abilities.basic.icon;

          document.getElementById("ability-name-signature").textContent =
            data.abilities.signature.name;
          document.getElementById("ability-desc-signature").textContent =
            data.abilities.signature.desc;
          document.getElementById("ability-icon-signature").src =
            data.abilities.signature.icon;

          document.getElementById("ability-name-ultimate").textContent =
            data.abilities.ultimate.name;
          document.getElementById("ability-desc-ultimate").textContent =
            data.abilities.ultimate.desc;
          document.getElementById("ability-icon-ultimate").src =
            data.abilities.ultimate.icon;
        }
      });
    });
  }

  // Update revealed elements
  window.addEventListener("scroll", () => {
    document.querySelectorAll(".reveal").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  });
});
