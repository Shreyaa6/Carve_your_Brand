import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'
import sgi1 from '../assets/sgi1.mov'
import kiddo1 from '../assets/kiddo1.mov'
 
import pulseVideo from '../assets/pulse.mov'
import mimzerImg from '../assets/mimzer.png'
import ot1 from '../assets/ot1.jpeg'
 
import tess1 from '../assets/tess1.png'
import mandapamImg from '../assets/mandapam.png'
import auraImg from '../assets/Aura.png'
import dhImg from '../assets/dh.jpg'
import riv1 from '../assets/riv1.png'
 
import hiraethImg from '../assets/hiraeth.png'

type ProjectMedia =
    | { type: 'video'; src: string }
    | { type: 'image'; src: string }

type ProjectSpec = {
    id: string
    title: string
    category: string
    year: string
    color: string
    media: ProjectMedia
    tagline: string
    problem: string
    solution: string
    keyCapabilities: string[]
    whyItMatters: string
    domains: string
}

const projects: ProjectSpec[] = [
    {
        id: 'sri-gangotri-industries',
        title: 'Sri Gangotri Industries',
        category: 'Agriculture & Agro Products',
        year: '2024',
        color: '#565449',
        media: { type: 'video', src: sgi1 },
        tagline: 'Digital foundation for a multi-state agro supplier with 50+ registered products.',
        problem:
            'Strong operations and product quality, but no digital system to communicate scale, credibility, or multi-state reach to government buyers and distributors.',
        solution:
            'We created a structured brand and web presence that showcases products, operations and government capabilities in a compliance-friendly, trust-led way.',
        keyCapabilities: [
            'Professional digital identity aligned with government expectations',
            'Structured product catalogue for 50+ SKUs',
            'Sections for government supply, compliance and distribution network',
            'Scalable information architecture for new products and regions',
        ],
        whyItMatters:
            'Tenders, distributors and partners now see the real scale of the business at a glance, which directly supports growth and market expansion.',
        domains: 'Digital strategy · B2B websites · Information architecture',
    },
    {
        id: 'kiddo',
        title: 'Kiddo',
        category: 'Quick Commerce / Baby & Mother Care',
        year: '2024',
        color: '#E8E6E1',
        media: { type: 'video', src: kiddo1 },
        tagline: 'A Q‑commerce platform for baby and mother care essentials built around trust and speed.',
        problem:
            'Building a quick commerce platform for baby and mother products required very high trust, real‑time logistics, and two synchronized apps for customers and riders.',
        solution:
            'We designed a consumer app and rider app that work together to deliver essentials fast, with a Try & Buy feature that reduces hesitation around sensitive purchases.',
        keyCapabilities: [
            'Consumer app with category‑wise browsing, search and tracking',
            'Rider app for order assignment, routing and live status',
            'Try & Buy flow aligned with delivery operations',
            'Architecture tuned for real‑time orders and scale',
        ],
        whyItMatters:
            'Kiddo shows how quick commerce can feel trustworthy in a sensitive category while still moving fast at scale.',
        domains: 'Product strategy · Quick commerce · Mobile UX',
    },
    {
        id: 'pulse',
        title: 'Pulse',
        category: 'Digital Media / News',
        year: '2024',
        color: '#D8CFBC',
        media: { type: 'video', src: pulseVideo },
        tagline: 'A subscription‑based news app designed for Nagaland, built to scale beyond it.',
        problem:
            'The media house needed a digital platform that could prioritise regional news, manage subscriptions and give editors, advertisers and admins clear control.',
        solution:
            'We delivered a consumer news app plus role‑based dashboard for editors, advertisers and admins, with analytics for content, ads and subscriptions.',
        keyCapabilities: [
            'Local‑first news feed with national and global sections',
            'Subscription‑based access and user management',
            'Role‑based dashboard for editorial, ads and admin',
            'Analytics for users, reach, engagement and monetisation',
        ],
        whyItMatters:
            'Pulse strengthens regional journalism with a sustainable subscription model and full operational visibility for the media house.',
        domains: 'Digital media · Subscription platforms · Admin UX',
    },
    {
        id: 'mimzer',
        title: 'Mimzer',
        category: 'D2C / FMCG (Tea & Wellness)',
        year: '2025',
        color: '#E6E6FA',
        media: { type: 'image', src: mimzerImg },
        tagline: 'A lean D2C e‑commerce launch for a wellness‑focused tea brand.',
        problem:
            'A new tea brand entering a crowded market with no digital footprint, small catalogue and strong competition from players like Blue Tea.',
        solution:
            'We built a conversion‑ready e‑commerce store that highlights benefits of 4 tea variants, builds trust and makes first purchase as simple as possible.',
        keyCapabilities: [
            'Mobile‑first storefront optimised for quick decisions',
            'Benefit‑driven product pages with clear usage and ingredients',
            'Simple cart and checkout with trust‑led UX',
            'Content and structure ready for future product expansion',
        ],
        whyItMatters:
            'Mimzer proves that early‑stage D2C growth is about clarity and trust, not bloated feature sets.',
        domains: 'D2C e‑commerce · Conversion design · Brand positioning',
    },
    {
        id: 'one-thing',
        title: 'One Thing',
        category: 'Productivity · Founders & Builders',
        year: '2024',
        color: '#E8E6E1',
        media: { type: 'image', src: ot1 },
        tagline: 'A daily focus system that helps founders stop overthinking and start executing.',
        problem:
            'Founders juggle too many tools, lists and goals, creating cognitive overload and poor follow‑through on what truly matters.',
        solution:
            'One Thing reduces the entire system to a single daily question: did you complete the one most important thing today? If not, it asks why.',
        keyCapabilities: [
            'One‑question‑per‑day interaction model',
            'Reflection‑based accountability instead of guilt',
            'Habit‑forming, low‑noise UX',
            'No metrics, streaks or dopamine loops',
        ],
        whyItMatters:
            'The product shifts focus from hustle and busyness to clarity, self‑awareness and long‑term execution.',
        domains: 'Product thinking · Behavioural design · UX minimalism',
    },
    {
        id: 'tesseract',
        title: 'Tesseract',
        category: 'Developer Tools · Repos & PRs',
        year: '2024',
        color: '#1A1A1A',
        media: { type: 'image', src: tess1 },
        tagline: 'Unified repository and pull‑request visibility across organisations.',
        problem:
            'Engineering teams working across many orgs and repos struggle with scattered PRs, context switching and no single place to see what’s moving.',
        solution:
            'Tesseract brings repositories and pull requests from multiple organisations into one operational dashboard for organisers and maintainers.',
        keyCapabilities: [
            'Cross‑org repository organisation',
            'Centralised pull‑request tracking',
            'Unified workspace for organisers and maintainers',
            'Real‑time visibility into development workflows',
        ],
        whyItMatters:
            'It reduces operational friction and makes code review at scale feel deliberate instead of reactive.',
        domains: 'Developer tools · System design · Dashboard UX',
    },
    {
        id: 'mandapam',
        title: 'Mandapam',
        category: 'All‑in‑One Wedding Platform',
        year: '2024',
        color: '#D8CFBC',
        media: { type: 'image', src: mandapamImg },
        tagline: 'A single digital ecosystem for venues, vendors and wedding planning.',
        problem:
            'Families plan weddings across fragmented tools, spreadsheets and WhatsApp threads, making vendors, timelines and decisions hard to manage.',
        solution:
            'Mandapam centralises venue discovery, vendor management and wedding assets into one coordinated platform.',
        keyCapabilities: [
            'Venue discovery and booking',
            'Vendor and listing management',
            'Unified planning workflow for families',
            'Scalable marketplace foundation for partners',
        ],
        whyItMatters:
            'It turns wedding planning from a chaotic coordination problem into a guided digital journey.',
        domains: 'Marketplace design · Booking systems · Large‑scale UX',
    },
    {
        id: 'cafe-aura',
        title: 'Café Aura',
        category: 'Custom Booking Website',
        year: '2024',
        color: '#565449',
        media: { type: 'image', src: auraImg },
        tagline: 'A café website with a custom time‑slot booking system that matches real operations.',
        problem:
            'Generic booking widgets don’t reflect how cafés actually manage tables, timing and ambience.',
        solution:
            'We designed a brand‑aligned booking flow with custom time‑based reservations and a mobile‑first UX.',
        keyCapabilities: [
            'Tailored time‑slot reservation logic',
            'Mobile‑first booking experience',
            'Clean, modern brand presentation',
            'Owner‑friendly content and structure',
        ],
        whyItMatters:
            'The system reduces booking conflicts while making the café feel more considered and premium online.',
        domains: 'Web UX · Booking logic · Small‑business systems',
    },
    {
        id: 'rivisha',
        title: 'Rivisha',
        category: 'Reusable Café Booking Architecture',
        year: '2024',
        color: '#E8E6E1',
        media: { type: 'image', src: riv1 },
        tagline: 'A reusable café booking framework that can be adapted for future venues.',
        problem:
            'Most café websites are built as one‑offs; every new brand means rebuilding booking, UX and performance from scratch.',
        solution:
            'Rivisha generalises the café booking system into a modular frontend and booking architecture that can be reused.',
        keyCapabilities: [
            'Custom time‑slot booking with reusable components',
            'Modular frontend structure for rapid adaptation',
            'Performance‑optimised experience',
            'Foundation for future cafés on the same stack',
        ],
        whyItMatters:
            'New cafés can launch faster with a proven UX and less engineering overhead.',
        domains: 'Reusable systems · Frontend architecture · Performance',
    },
    {
        id: 'dharohar',
        title: 'Dharohar',
        category: 'Cultural Heritage & Community',
        year: '2024',
        color: '#E6E6FA',
        media: { type: 'image', src: dhImg },
        tagline: 'A digital space for heritage, monuments, arts and community conversation.',
        problem:
            'Cultural knowledge is scattered across formats and platforms, making it hard to explore, contribute to, or discuss in one place.',
        solution:
            'Dharohar centralises discovery, contribution and conversation around heritage, places, monuments, art and culture.',
        keyCapabilities: [
            'Discovery by place, monument, art and culture',
            'User‑generated content and discussion threads',
            'Profile and community management',
            'Tools for ongoing cultural engagement',
        ],
        whyItMatters:
            'It helps preserve and surface cultural knowledge while enabling real community dialogue around it.',
        domains: 'Content platforms · Community UX · Information architecture',
    },
    {
        id: 'hiraeth',
        title: 'Hiraeth',
        category: 'AI‑Powered Travel Planning',
        year: '2024',
        color: '#2d3a2d',
        media: { type: 'image', src: hiraethImg },
        tagline: 'An AI‑driven travel planner for trips that feel intentional, not generic.',
        problem:
            'Planning trips manually is time‑consuming and often produces generic, copy‑paste itineraries.',
        solution:
            'Hiraeth uses AI to generate personalised itineraries and recommendations, with an eye toward end‑to‑end trip structure and future integrations.',
        keyCapabilities: [
            'AI‑generated itineraries based on user preferences',
            'Personalised recommendations and trip flows',
            'End‑to‑end trip structuring model',
            'Architecture ready for integrations with booking and stays',
        ],
        whyItMatters:
            'It turns planning into a guided, high‑quality experience rather than a research chore.',
        domains: 'AI products · Travel tech · Recommendation systems',
    },
]

const Work = () => {
    return (
        <div className="min-h-screen bg-background pt-40 pb-20">
            <div className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-24 md:mb-32">
                    <TextAnimation
                        text="Portfolio"
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text="Our Work"
                        as="h1"
                        classname="text-5xl md:text-8xl font-serif text-primary mb-10"
                        letterAnime={true}
                    />
                    <TextAnimation
                        text="A small, opinionated selection of products and platforms we’ve helped shape — from agro supply chains to Q‑commerce, D2C, media and cultural platforms."
                        as="p"
                        classname="text-xl md:text-2xl text-primary/70 max-w-4xl font-sans leading-relaxed"
                        lineAnime={true}
                    />
                </div>

                <div className="space-y-16 md:space-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className={`group rounded-3xl border border-primary/5 bg-surface/30 backdrop-blur-md px-5 py-6 md:px-8 md:py-8 lg:px-10 lg:py-10 flex flex-col gap-8 lg:gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="lg:w-[40%] w-full">
                                <div
                                    className="aspect-[4/3] w-full relative overflow-hidden rounded-2xl border border-primary/10 bg-surface"
                                    style={{ backgroundColor: project.color }}
                                >
                                    {project.media.type === 'video' ? (
                                        <video
                                            src={project.media.src}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={project.media.src}
                                            alt={project.title}
                                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col gap-6">
                                <div className="flex flex-wrap items-baseline gap-3 justify-between border-b border-primary/10 pb-4">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-accent-olive transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-primary/60 mt-1">{project.category}</p>
                                    </div>
                                    <span className="text-xs md:text-sm font-mono text-primary/50 uppercase tracking-[0.2em]">
                                        {project.year}
                                    </span>
                                </div>

                                <p className="text-primary/80 text-base md:text-lg font-sans leading-relaxed">
                                    {project.tagline}
                                </p>

                                <details className="group/open">
                                    <summary className="cursor-pointer text-xs font-bold uppercase tracking-[0.2em] text-primary/60 hover:text-accent-olive">
                                        Types
                                    </summary>
                                    <div className="mt-4 space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-primary/70">
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 mb-2">Problem</p>
                                                <p className="leading-relaxed">{project.problem}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 mb-2">Solution</p>
                                                <p className="leading-relaxed">{project.solution}</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 text-sm md:text-base text-primary/70">
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 mb-2">Key Capabilities</p>
                                                <ul className="list-disc list-inside space-y-1.5">
                                                    {project.keyCapabilities.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="flex flex-col justify-between gap-3">
                                                <div>
                                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary/50 mb-2">Why It Matters</p>
                                                    <p className="leading-relaxed">{project.whyItMatters}</p>
                                                </div>
                                                <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-primary/40 mt-2">
                                                    {project.domains}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </details>

                                <Link
                                    to={`/case-studies/${project.id}`}
                                    className="inline-flex items-center gap-2 text-sm font-serif text-primary mt-2 underline underline-offset-4 decoration-primary/30"
                                >
                                    View project
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Work
