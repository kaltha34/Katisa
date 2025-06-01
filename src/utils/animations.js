/**
 * Animation utility functions and presets for Framer Motion
 */

/**
 * Standard fade-in animation
 */
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

/**
 * Fade in with slight upward movement
 */
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 }
};

/**
 * Fade in with slight downward movement
 */
export const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

/**
 * Fade in from left side
 */
export const fadeInLeft = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
  transition: { duration: 0.5 }
};

/**
 * Fade in from right side
 */
export const fadeInRight = {
  initial: { opacity: 0, x: 20 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 20 },
  transition: { duration: 0.5 }
};

/**
 * Scale up animation
 */
export const scaleUp = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.5 }
};

/**
 * Scale down animation
 */
export const scaleDown = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.1 },
  transition: { duration: 0.5 }
};

/**
 * Staggered children animation
 * @param {number} staggerChildren - Delay between each child animation
 * @returns {Object} - Framer motion animation object
 */
export const staggerContainer = (staggerChildren = 0.1) => ({
  initial: {},
  animate: {
    transition: {
      staggerChildren
    }
  }
});

/**
 * Page transition animation
 */
export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.4 }
};

/**
 * Button hover animation
 */
export const buttonHover = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

/**
 * Card hover animation
 */
export const cardHover = {
  whileHover: { y: -5, transition: { duration: 0.2 } },
  whileTap: { y: 0 }
};

/**
 * Creates a custom animation with specified parameters
 * @param {Object} params - Animation parameters
 * @returns {Object} - Framer motion animation object
 */
export const createAnimation = ({
  initialOpacity = 0,
  animateOpacity = 1,
  initialX = 0,
  animateX = 0,
  initialY = 0,
  animateY = 0,
  initialScale = 1,
  animateScale = 1,
  duration = 0.5,
  delay = 0,
  ease = "easeOut"
}) => ({
  initial: { opacity: initialOpacity, x: initialX, y: initialY, scale: initialScale },
  animate: { 
    opacity: animateOpacity, 
    x: animateX, 
    y: animateY, 
    scale: animateScale,
    transition: { duration, delay, ease }
  }
});
