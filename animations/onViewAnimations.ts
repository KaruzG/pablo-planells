import { Variants } from "motion";

export const springUp: Variants = {
    whileInView: {
        opacity: 1,
        rotate: 0,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 1.2,
        },
    },
    initial: {
        y: 150,
    },
};

export const springLeft: Variants = {
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 10,
            mass: 0.35,
        },
    },
    initial: {
        opacity: 0,
        x: 500,
    },
};

export const springRight: Variants = {
    whileInView: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            stiffness: 110,
            damping: 10,
            mass: 0.35,
        },
    },
    initial: {
        opacity: 0,
        x: -500,
    },
};