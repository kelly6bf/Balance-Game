export const firstAnswerMotions = {
  enter: {
    x: 1000,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    display: "none",
  },
};

export const secondAnswerMotions = {
  enter: {
    x: -1000,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    display: "none",
  },
};
