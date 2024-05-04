export const traditionVariants = {
  left: {
    initial: { x: "-40px", opacity: 0 },
    inView: { x: 0, opacity: 1 },
  },
  right: {
    initial: { x: "40px", opacity: 0 },
    inView: { x: 0, opacity: 1 },
  },
};
export const broadCastVariants = {
  initial: { y: "30px", opacity: 0 },
  inView: { y: 0, opacity: 1 },
};
export const layoutVariants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};
