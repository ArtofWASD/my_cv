import { spring } from "framer-motion";

export const animations = {
  back: {
    initial: {},
    hover: {
      x: -6,
      transition: {
        repeat: Infinity,
        duration: 1,
      },
    },
    tap: {
      scale: 0.9,
    },
    rest: { x: 0 },
  },
  rotate: {
    initial: { rotate: 0 },
    hover: {
      rotate: 360,
      transition: {
        repeat: Infinity,
        duration: 5,
      },
    },
    tap: {
      scale: 0.9,
    },
    rest: {},
  },
  bounce: {
      initial: { scale: 1 },
    hover: {
      scale: 1.3,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
    rest: {scale:1},
  },
};
