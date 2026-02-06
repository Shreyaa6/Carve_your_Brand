import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';

interface TextAnimationProps {
    text: string;
    classname?: string;
    variants?: Variants;
    direction?: 'left' | 'right' | 'up' | 'down';
    letterAnime?: boolean;
    lineAnime?: boolean;
    as?: React.ElementType;
}

const TextAnimation: React.FC<TextAnimationProps> = ({
    text,
    classname = '',
    variants,
    direction = 'up',
    letterAnime = false,
    lineAnime = false,
    as: Component = 'div',
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    // Default variants if not provided
    const defaultVariants: Variants = {
        hidden: {
            opacity: 0,
            y: direction === 'down' ? -20 : direction === 'up' ? 20 : 0,
            x: direction === 'right' ? -20 : direction === 'left' ? 20 : 0,
            filter: 'blur(10px)',
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const computedVariants = variants || defaultVariants;

    // Stagger children
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    if (letterAnime) {
        const letters = text.split('');
        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="inline-block" // Ensure container allows inline block
                >
                    {letters.map((letter, index) => (
                        <motion.span key={index} variants={computedVariants} className="inline-block whitespace-pre">
                            {letter}
                        </motion.span>
                    ))}
                </motion.span>
            </Component>
        );
    }

    if (lineAnime) {
        // Basic word/line splitting (simplified as words for responsive lines)
        const words = text.split(' ');
        return (
            <Component ref={ref} className={classname}>
                <motion.span
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="inline-block"
                >
                    {words.map((word, index) => (
                        <span key={index} className="inline-block mr-[0.25em] whitespace-nowrap">
                            <motion.span variants={computedVariants} className="inline-block">
                                {word}
                            </motion.span>
                        </span>
                    ))}
                </motion.span>
            </Component>
        );
    }

    // Default block animation
    return (
        <Component ref={ref} className={classname}>
            <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={computedVariants}
            >
                {text}
            </motion.div>
        </Component>
    );
};

export default TextAnimation;
