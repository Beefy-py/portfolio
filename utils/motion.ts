import { Variants } from "framer-motion";

// Scroll-triggered fade variants, replacing the old AOS data-aos attributes
// (data-aos="fade-up" -> fadeIn("up"), data-aos-delay="200" -> fadeIn("up", 200)).

export type FadeDirection = "up" | "down" | "left" | "right";

const OFFSET = 24;

const offsetFor = (direction: FadeDirection): { x?: number; y?: number } => {
  switch (direction) {
    case "up":
      return { y: OFFSET };
    case "down":
      return { y: -OFFSET };
    case "left":
      return { x: OFFSET };
    case "right":
      return { x: -OFFSET };
  }
};

export const fadeIn = (direction: FadeDirection, delayMs = 0): Variants => ({
  hidden: {
    opacity: 0,
    ...offsetFor(direction),
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delayMs / 1000,
      ease: "easeOut",
    },
  },
});

// once: true mirrors AOS's default `once: true` init option (animate in, then stay put).
export const fadeInViewport = { once: true, amount: 0.2 };
