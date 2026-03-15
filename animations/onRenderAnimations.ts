import { Variants } from 'motion';

interface AnimationVariants {
    duration?: number;
    delay?: number;
}

export const fadeIn = (options?: AnimationVariants): Variants => {
    return {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { duration: options?.duration ?? 2, delay: options?.delay ?? 0 }
        }
    };
};