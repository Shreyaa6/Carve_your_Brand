'use client'

import { useRef } from 'react'
import { useTransform, motion, useScroll, type MotionValue } from 'framer-motion'
import eComVideo from '../assets/e_com.mp4'
import bankVideo from '../assets/bank.mp4'
import aiVideo from '../assets/ai.mp4'
import healthVideo from '../assets/health.mp4'
import saasVideo from '../assets/saas.mp4'

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A modern, scalable e-commerce solution with advanced features and seamless user experience. Built for brands that demand performance and conversion.',
    video: eComVideo,
    link: '#',
    color: '#ECE4DB', // Porcelain Blush
  },
  {
    title: 'Mobile Banking App',
    description:
      'Secure, user-friendly mobile banking application with biometric authentication and real-time transactions. Trust and clarity at every tap.',
    video: bankVideo,
    link: '#',
    color: '#C4A69B', // Rosewood Dust
  },
  {
    title: 'AI Customer Support',
    description:
      'Intelligent chatbot system that handles customer inquiries 24/7 with high accuracy. Your team, amplified—without the wait.',
    video: aiVideo,
    link: '#',
    color: '#B8AB9C', // Stone Linen
  },
  {
    title: 'Healthcare Management System',
    description:
      'Comprehensive healthcare platform for patient management, appointments, and medical records. Built for care that scales.',
    video: healthVideo,
    link: '#',
    color: '#CFC8BE', // Warm Parchment
  },
  {
    title: 'SaaS Dashboard Platform',
    description:
      'Advanced analytics dashboard with real-time data visualization and custom reporting. Decisions, not guesswork.',
    video: saasVideo,
    link: '#',
    color: '#BAB8A2', // Olive Mist
  },
]

export default function Projects() {
  const container = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="projects" className="relative w-full bg-background" ref={container}>
      {/* Intro */}
      <div className="relative h-[70vh] w-full grid place-content-center px-4">
        <div
          className="absolute inset-0 pointer-events-none opacity-60"
          style={{
            background: 'linear-gradient(to right, #B8AB9C33 1px, transparent 1px), linear-gradient(to bottom, #B8AB9C33 1px, transparent 1px)',
            backgroundSize: '54px 54px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #ECE4DB 70%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 0%, #ECE4DB 70%, transparent 100%)',
          }}
        />
        <h2 className="relative text-4xl md:text-5xl 2xl:text-6xl font-semibold text-center tracking-tight leading-[120%] font-display text-primary">
          Selected work.
          <br />
          <span className="text-accent-stone">Scroll to explore.</span>
        </h2>
      </div>

      {/* Stacking cards */}
      <div className="relative w-full">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05
          return (
            <Card
              key={`p_${i}`}
              i={i}
              title={project.title}
              description={project.description}
              video={project.video}
              link={project.link}
              color={project.color}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          )
        })}
      </div>
    </section>
  )
}

interface CardProps {
  i: number
  title: string
  description: string
  image?: string
  video?: string
  link: string
  color: string
  progress: MotionValue<number>
  range: [number, number]
  targetScale: number
}

function Card({ i, title, description, image, video, link, color, progress, range, targetScale }: CardProps) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale])

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 30}px)`,
        }}
        className="flex flex-col relative -top-[10%] md:-top-[25%] h-[580px] md:h-[560px] w-[92%] max-w-6xl rounded-xl lg:p-10 sm:p-6 p-4 origin-top shadow-2xl"
      >
        <h3 className="text-3xl sm:text-4xl md:text-5xl text-center font-serif italic text-primary font-bold tracking-wide">
          {title}
        </h3>
        <div className="flex flex-col md:flex-row flex-1 mt-5 gap-6 md:gap-10 min-h-0">
          <div className="w-full md:w-[40%] relative md:top-[10%] flex flex-col">
            <p className="text-sm md:text-base text-primary/80 leading-relaxed line-clamp-4 md:line-clamp-none">
              {description}
            </p>
            <span className="flex items-center gap-2 pt-4 mt-4 md:mt-8">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-pointer text-primary font-medium hover:text-primary/80"
              >
                Let's talk
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </div>
          <div className="relative w-full md:w-[60%] flex-1 min-h-[200px] md:h-full rounded-lg overflow-hidden flex-shrink-0 bg-black/20">
            <motion.div className="w-full h-full absolute inset-0" style={{ scale: imageScale }}>
              {video ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain"
                >
                  <source src={video} type="video/mp4" />
                </video>
              ) : (
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-contain"
                />
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
