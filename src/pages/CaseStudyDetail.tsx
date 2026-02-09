import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import TextAnimation from '../components/ui/scroll-text'
import kiddo1 from '../assets/kiddo1.mov'
import kiddo2 from '../assets/kiddo2.mov'
import kiddo3 from '../assets/kiddo3.mov'
import mimzerImg from '../assets/mimzer.png'
import pulseVideo from '../assets/pulse.mov'
import sgi1 from '../assets/sgi1.mov'
import ot1 from '../assets/ot1.jpeg'
import tess1 from '../assets/tess1.png'
import mandapamImg from '../assets/mandapam.png'
import auraImg from '../assets/Aura.png'
import dhImg from '../assets/dh.jpg'
import riv1 from '../assets/riv1.png'
import hiraethImg from '../assets/hiraeth.png'

type CaseStudyEntry = {
    title: string
    category: string
    year: string
    color: string
    content: string
    images: string[]
    videos?: string[]
    video?: string
    image?: string
}

const caseStudyData: Record<string, CaseStudyEntry> = {
    'kiddo': {
        title: "Kiddo",
        category: "Quick Commerce / Baby & Mother Care",
        year: "2024",
        color: "#E8E6E1",
        videos: [kiddo1, kiddo2, kiddo3],
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Client Overview</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Kiddo is a quick commerce (Q-commerce) mobile application focused on baby and mother care essentials, delivering products with speed, trust, and convenience.
            </p>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Founded by Ankit Kawatra, a Stanford graduate and the second-highest shareholder of Zomato, Kiddo combines deep industry experience with a strong execution-driven startup vision.
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Industry</p>
                        <p class="text-xl font-serif text-primary">Quick Commerce / Baby & Mother Care</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Founder</p>
                        <p class="text-xl font-serif text-primary">Ankit Kawatra</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Platform</p>
                        <p class="text-xl font-serif text-primary">Consumer App + Rider App</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Product Range</p>
                        <p class="text-xl font-serif text-primary">Baby care & mother care (A–Z essentials)</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Special Feature</p>
                        <p class="text-xl font-serif text-primary">Try & Buy</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Revenue</p>
                        <p class="text-xl font-serif text-primary">₹10 Lakh</p>
                    </div>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    Building a quick commerce platform in the sensitive baby-care category involved multiple challenges:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Need for high trust due to baby & mother products</li>
                    <li>Managing real-time inventory and fast delivery expectations</li>
                    <li>Creating two interconnected platforms: customer app and delivery partner (rider) app</li>
                    <li>Designing a seamless Try & Buy flow without increasing operational friction</li>
                    <li>Ensuring speed, usability, and reliability at scale</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Project Objectives</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    The project aimed to build a full-stack quick commerce ecosystem:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Launch a consumer-facing Q-commerce app for baby & mother care</li>
                    <li>Develop a rider app for efficient last-mile delivery</li>
                    <li>Enable a unique Try & Buy experience</li>
                    <li>Optimize for speed, trust, and repeat purchases</li>
                    <li>Support rapid growth and operational scalability</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Our Strategy</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    We followed a platform-first and logistics-aware approach:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Designed with parents’ trust and urgency in mind</li>
                    <li>Prioritized frictionless checkout and quick discovery</li>
                    <li>Built a scalable architecture to support growth</li>
                    <li>Balanced customer experience with delivery efficiency</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Solution</h2>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">1. Consumer App (Kiddo App)</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        A clean, fast, and intuitive mobile app designed for busy parents.
                    </p>
                    <p class="mb-4 text-lg font-serif text-primary">Key Features:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Category-wise browsing (Baby Care & Mother Care)</li>
                        <li>Fast search and smart product recommendations</li>
                        <li>Try & Buy option for select categories</li>
                        <li>Quick checkout with real-time order tracking</li>
                        <li>Secure payment and order history</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">2. Rider App (Delivery Partner App)</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        A dedicated app for delivery partners to ensure speed and accuracy.
                    </p>
                    <p class="mb-4 text-lg font-serif text-primary">Key Features:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Order assignment & route optimization</li>
                        <li>Real-time delivery status updates</li>
                        <li>In-app communication</li>
                        <li>Earnings and delivery history dashboard</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">3. Try & Buy Feature</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        A standout feature designed to reduce hesitation and returns:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Customers can try selected products before purchase</li>
                        <li>Improves confidence for first-time buyers</li>
                        <li>Enhances customer satisfaction and retention</li>
                        <li>Carefully designed to align with delivery workflows</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Technology Stack</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Cross-platform mobile app development</li>
                        <li>Backend optimized for real-time order management</li>
                        <li>Secure payment and user data handling</li>
                        <li>Scalable infrastructure supporting high-order velocity</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Results & Impact</h2>

                <div class="mb-8">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Business Impact:</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Achieved ₹10 Lakh in revenue</li>
                        <li>Strong early traction in baby & mother care category</li>
                        <li>High repeat purchase potential due to trust-based UX</li>
                    </ul>
                </div>

                <div class="mb-8">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Product Impact:</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Smooth coordination between customer and rider apps</li>
                        <li>Try & Buy feature reduced purchase hesitation</li>
                        <li>Platform ready for geographic and category expansion</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Why This Project Worked</h2>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Deep understanding of quick commerce logistics</li>
                    <li>Trust-focused UX for sensitive product categories</li>
                    <li>Differentiation through Try & Buy</li>
                    <li>Scalable system designed for growth, not just MVP</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Services Provided</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Product Strategy</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Consumer Mobile App Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Rider App Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Quick Commerce Architecture</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">UX/UI Design</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Feature Engineering (Try & Buy)</span>
                </div>
            </div>

            <div class="mb-16 border-t border-primary/10 pt-12">
                <h2 class="text-3xl font-serif mb-6 text-primary">Key Takeaway</h2>
                <p class="text-xl font-serif text-primary mb-4 italic">
                    Quick commerce succeeds when speed meets trust.
                </p>
                <p class="text-lg text-primary/70 leading-relaxed">
                    Kiddo demonstrates how a well-designed platform can deliver essentials faster while maintaining confidence, usability, and scalability.
                </p>
            </div>
        `,
        images: []
    },
    'mimzer': {
        title: "Mimzer",
        category: "D2C / FMCG (Tea & Wellness)",
        year: "2025",
        color: "#E6E6FA",
        image: mimzerImg,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Client Overview</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Mimzer is a direct-to-consumer (D2C) e-commerce tea brand, positioned as a competitor to Blue Tea, offering wellness-focused tea products through an online store.
            </p>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Founded by Advocate Rajesh Bhardwaj, Mimzer marks a professional transition into the FMCG and digital commerce space.
                </p>
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Industry</p>
                        <p class="text-xl font-serif text-primary">D2C / FMCG (Tea & Wellness)</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Founder</p>
                        <p class="text-xl font-serif text-primary">Rajesh Bhardwaj</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Product Range</p>
                        <p class="text-xl font-serif text-primary">4 specialty tea variants</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Platform</p>
                        <p class="text-xl font-serif text-primary">E-commerce</p>
                    </div>
                </div>
                <p class="text-lg text-primary/70 leading-relaxed">
                    <strong class="text-primary">Revenue (Early Stage):</strong> ₹30,000
                </p>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    Launching an e-commerce brand in a competitive tea market came with key challenges:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed mb-8">
                    <li>No existing digital footprint or online store</li>
                    <li>Low trust for a new, unknown brand</li>
                    <li>Strong competition from established players like Blue Tea</li>
                    <li>Limited product range requiring high clarity & positioning</li>
                    <li>Need to convert first-time visitors into buyers</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Project Objectives</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    The goal was to build a conversion-ready e-commerce foundation:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Launch a functional, scalable online store</li>
                    <li>Build trust and credibility for first-time buyers</li>
                    <li>Present 4 tea variants in a compelling, benefit-driven way</li>
                    <li>Enable smooth browsing, cart, and checkout experience</li>
                    <li>Generate initial online revenue and validate the brand</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Our Strategy</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    We followed a lean D2C e-commerce strategy focused on simplicity and trust:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Designed for mobile-first shopping behavior</li>
                    <li>Prioritized product clarity over excessive features</li>
                    <li>Used storytelling to humanize the founder-led brand</li>
                    <li>Focused on reducing friction in the buying journey</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Solution</h2>
                
                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">1. E-commerce Website Development</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        We built a clean, fast, and conversion-focused e-commerce store:
                    </p>
                    <p class="mb-4 text-lg font-serif text-primary">Core Features Implemented:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Product listing & detail pages for 4 tea variants</li>
                        <li>Simple add-to-cart and checkout flow</li>
                        <li>Mobile-optimized UI</li>
                        <li>Secure payment gateway integration</li>
                        <li>Order and enquiry handling system</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">2. Product Page Optimization</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        Each tea variant was optimized for conversions:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Clear product benefits and usage</li>
                        <li>Ingredient highlights</li>
                        <li>Visual hierarchy for quick scanning</li>
                        <li>Trust elements (brand story, quality messaging)</li>
                    </ul>
                    <p class="mt-4 text-lg text-primary/70 leading-relaxed">
                        This ensured users could decide and purchase quickly, even with limited options.
                    </p>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">3. Brand Trust & Positioning</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        To compete with established brands:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Positioned Mimzer as a modern, mindful tea brand</li>
                        <li>Highlighted founder credibility</li>
                        <li>Used clean, premium visuals to avoid "new brand" skepticism</li>
                        <li>Focused on wellness and daily rituals rather than price wars</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Technology Stack</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Modern e-commerce framework</li>
                        <li>Mobile-first responsive design</li>
                        <li>Lightweight frontend for fast load times</li>
                        <li>SEO-ready product and category structure</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Results & Impact (Early Stage)</h2>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Generated ₹30,000 in online revenue</li>
                    <li>Successfully validated the e-commerce model</li>
                    <li>Established a credible digital storefront</li>
                    <li>Enabled future scalability for more products and marketing channels</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Why This Project Worked</h2>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Conversion-focused e-commerce design</li>
                    <li>Clear positioning despite small product catalog</li>
                    <li>Reduced friction in checkout and navigation</li>
                    <li>Built trust early for a new D2C brand</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Services Provided</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">D2C E-commerce Strategy</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Website Design & Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Product Page UX Optimization</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Brand Positioning</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Early-Stage Growth Setup</span>
                </div>
            </div>

            <div class="mb-16 border-t border-primary/10 pt-12">
                <h2 class="text-3xl font-serif mb-6 text-primary">Key Takeaway</h2>
                <p class="text-xl font-serif text-primary mb-4 italic">
                    Early-stage e-commerce success is about trust and clarity, not scale.
                </p>
                <p class="text-lg text-primary/70 leading-relaxed">
                    Mimzer's launch demonstrates how a focused D2C approach can generate revenue even in a competitive market.
                </p>
            </div>
        `,
        images: [mimzerImg]
    },
    'pulse': {
        title: "Pulse",
        category: "Digital Media / News",
        year: "2024",
        color: "#D8CFBC",
        video: pulseVideo,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Client Overview</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Pulse is a subscription-based news application developed for a Nagaland-based news media house, focused on strengthening regional journalism while also giving users access to national and global news.
            </p>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    The platform modernizes how news is published, consumed, and monetized, with strong backend controls for editorial and business teams.
                </p>

                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Industry</p>
                        <p class="text-xl font-serif text-primary">Digital Media / News</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Region Focus</p>
                        <p class="text-xl font-serif text-primary">Nagaland</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Platform</p>
                        <p class="text-xl font-serif text-primary">Consumer News App + Admin Dashboard</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Monetization Model</p>
                        <p class="text-xl font-serif text-primary">Subscription-based</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6 md:col-span-2">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Active User Base</p>
                        <p class="text-xl font-serif text-primary">6,000–7,000 users</p>
                    </div>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    The media house needed a scalable digital news ecosystem that could handle both content and operations efficiently.
                </p>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    Key challenges included:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Prioritizing local Nagaland news without isolating users from global updates</li>
                    <li>Managing a growing user base with subscription access</li>
                    <li>Providing editors and advertisers with controlled publishing access</li>
                    <li>Giving admins visibility into user growth and engagement</li>
                    <li>Building trust and retention in a subscription-driven model</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Project Objectives</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    The project aimed to deliver a complete digital publishing platform:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Launch a fast, user-friendly news app</li>
                    <li>Support subscription-based content access</li>
                    <li>Build a role-based dashboard for content & ads</li>
                    <li>Track user activity and engagement at scale</li>
                    <li>Ensure the platform can grow beyond regional boundaries</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Our Strategy</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    We followed a media-first, data-aware approach:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Designed the app for daily repeat usage</li>
                    <li>Ensured local news remained the primary focus for Nagaland users</li>
                    <li>Built a backend that scales smoothly with user growth</li>
                    <li>Enabled data-driven decisions for editorial and monetization teams</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Solution</h2>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">1. Consumer News App</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        A performance-optimized mobile app built for regular news consumption.
                    </p>
                    <p class="mb-4 text-lg font-serif text-primary">Key Features:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Nagaland-focused local news feed</li>
                        <li>National and global news sections</li>
                        <li>Category-wise content browsing</li>
                        <li>Subscription-based premium access</li>
                        <li>Clean reading experience with fast load times</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">2. Role-Based Admin Dashboard</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        A centralized dashboard designed for operational clarity.
                    </p>

                    <p class="mb-3 text-lg font-serif text-primary">User Roles Supported:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-6">
                        <li>Editors / Content Managers</li>
                        <li>Advertisers</li>
                        <li>Admins</li>
                    </ul>

                    <p class="mb-3 text-lg font-serif text-primary">Capabilities:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>News upload, editing, and scheduling</li>
                        <li>Ad upload and placement control</li>
                        <li>Subscription and user management</li>
                        <li>Reader engagement and interaction metrics</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">3. Analytics & Admin Control</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        Admins get a clear, real-time view of platform performance:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-6">
                        <li>Total users and active readers</li>
                        <li>Content reach and interaction trends</li>
                        <li>Ad engagement insights</li>
                        <li>Subscription activity monitoring</li>
                    </ul>
                    <p class="text-lg text-primary/70 leading-relaxed">
                        This enabled better editorial planning and business strategy.
                    </p>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Technology Stack</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Cross-platform mobile application</li>
                        <li>Backend with role-based authentication</li>
                        <li>Secure subscription handling</li>
                        <li>Analytics and reporting infrastructure</li>
                        <li>Scalable cloud-ready architecture</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Why This Project Worked</h2>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Built specifically for regional media needs</li>
                    <li>Handles 6–7K users smoothly with room to scale</li>
                    <li>Strong separation of editorial, advertising, and admin roles</li>
                    <li>Sustainable subscription-driven platform design</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Services Provided</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Product Strategy</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Mobile App Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Admin Dashboard Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Role-Based Access Control</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Subscription System</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Analytics & Reporting</span>
                </div>
            </div>

            <div class="mb-16 border-t border-primary/10 pt-12">
                <h2 class="text-3xl font-serif mb-6 text-primary">Key Takeaway</h2>
                <p class="text-xl font-serif text-primary mb-4 italic">
                    Strong regional journalism needs strong digital platforms.
                </p>
                <p class="text-lg text-primary/70 leading-relaxed">
                    Pulse shows how a subscription-based news app can support thousands of users while giving media houses full control over content, growth, and engagement.
                </p>
            </div>
        `,
        images: []
    },
    'sri-gangotri-industries': {
        title: "Sri Gangotri Industries",
        category: "Agriculture & Agro Products",
        year: "2024",
        color: "#565449",
        video: sgi1,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Client Overview</h2>
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                    Sri Gangotri Industries is a well-established agriculture-focused enterprise operating across 4+ Indian states, with a strong presence in government supply chains and private market distribution.
                </p>
                <div class="grid md:grid-cols-2 gap-6 mb-8">
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Industry</p>
                        <p class="text-xl font-serif text-primary">Agriculture & Agro Products</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Products Registered</p>
                        <p class="text-xl font-serif text-primary">50+</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Operational States</p>
                        <p class="text-xl font-serif text-primary">4+</p>
                    </div>
                    <div class="border border-primary/10 rounded-lg p-6">
                        <p class="text-sm font-bold uppercase tracking-widest text-primary/60 mb-2">Annual Revenue</p>
                        <p class="text-xl font-serif text-primary">₹5 Crore</p>
                    </div>
                </div>
                <p class="text-lg text-primary/70 leading-relaxed">
                    <strong class="text-primary">Business Model:</strong> Government Supply + Private Marketing
                </p>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Challenge</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    Despite strong operations and product quality, Sri Gangotri Industries faced key challenges:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed mb-8">
                    <li>Limited digital presence for showcasing a wide product portfolio</li>
                    <li>Difficulty communicating credibility and scale to government bodies and distributors</li>
                    <li>No centralized platform to support multi-state marketing efforts</li>
                    <li>Brand perception did not reflect the company's actual scale and revenue</li>
                </ul>
                <p class="text-lg text-primary/70 leading-relaxed">
                    Their growth required a structured brand and digital system that could support both government tenders and private-sector outreach.
                </p>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Project Objectives</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    The goal was to create a strong foundation for visibility, trust, and scalability:
                </p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Establish a professional digital identity aligned with government standards</li>
                    <li>Present 50+ registered products in a clear, structured format</li>
                    <li>Support marketing efforts across multiple states</li>
                    <li>Strengthen brand credibility for tenders, partners, and distributors</li>
                    <li>Enable future scalability for new product launches and regions</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Our Approach</h2>
                <p class="mb-6 text-lg text-primary/70 leading-relaxed">
                    We adopted a clarity-first and credibility-driven strategy, keeping in mind the agriculture and government ecosystem.
                </p>
                <p class="mb-4 text-lg font-serif text-primary">Key Focus Areas:</p>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Simplicity and trust over flashy design</li>
                    <li>Clear product categorization for easy understanding</li>
                    <li>Compliance-friendly presentation for government stakeholders</li>
                    <li>Scalable structure for future expansion</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">The Solution</h2>
                
                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">1. Brand & Digital Strategy</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        Refined brand positioning as a reliable, large-scale agro supplier
                    </p>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        Clear messaging focused on:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Product quality</li>
                        <li>Compliance</li>
                        <li>Multi-state operations</li>
                        <li>Proven revenue scale</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">2. Website & Product Architecture</h3>
                    <p class="mb-4 text-lg text-primary/70 leading-relaxed">
                        We designed a structured digital platform that:
                    </p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-6">
                        <li>Showcases 50+ registered products with clarity</li>
                        <li>Segments products by category and usage</li>
                        <li>Highlights government supply capability and certifications</li>
                        <li>Clearly communicates operational reach and scale</li>
                    </ul>
                    <p class="mb-4 text-lg font-serif text-primary">Key Sections Implemented:</p>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Company Overview & Legacy</li>
                        <li>Product Catalogue (Category-wise)</li>
                        <li>Government Supply & Compliance</li>
                        <li>Marketing & Distribution Network</li>
                        <li>State-wise Operations</li>
                        <li>Contact & Business Enquiries</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">3. Marketing Enablement</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Optimized content for B2B distributors and procurement officers</li>
                        <li>Created marketing-ready sections usable for pitch decks, tender references, and partner onboarding</li>
                        <li>Designed for easy sharing with stakeholders</li>
                    </ul>
                </div>

                <div class="mb-12">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Technology Stack</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Modern frontend framework for speed and scalability</li>
                        <li>Responsive design for mobile and tablet access</li>
                        <li>SEO-optimized structure for regional visibility</li>
                        <li>Secure and lightweight architecture</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
             <h2 class="text-3xl font-serif mb-6 text-primary">Results & Impact</h2>
                
                <div class="mb-8">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Business Impact:</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Stronger brand credibility during government tenders</li>
                        <li>Improved distributor confidence across multiple states</li>
                        <li>Clear communication of scale: 50+ products, 4+ states, ₹5 Cr revenue</li>
                        <li>Centralized digital presence supporting marketing and operations</li>
                    </ul>
                </div>

                <div class="mb-8">
                    <h3 class="text-2xl font-serif mb-4 text-primary">Brand Impact:</h3>
                    <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                        <li>Professional, trust-driven brand perception</li>
                        <li>Better alignment between business scale and brand image</li>
                        <li>Improved visibility among government and private stakeholders</li>
                    </ul>
                </div>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Why This Project Worked</h2>
                <ul class="list-disc list-inside space-y-4 text-lg text-primary/70 leading-relaxed">
                    <li>Deep understanding of agriculture + government supply ecosystem</li>
                    <li>Focus on clarity, compliance, and credibility</li>
                    <li>Scalable digital foundation supporting long-term growth</li>
                    <li>Business-first approach rather than just visual design</li>
                </ul>
            </div>

            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Services Provided</h2>
                <div class="flex flex-wrap gap-3">
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Digital Strategy</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Website Design & Development</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Product Catalogue Structuring</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Brand Positioning</span>
                    <span class="px-4 py-2 bg-primary/5 border border-primary/10 rounded-full text-sm font-bold uppercase tracking-widest text-primary">Marketing Enablement</span>
                </div>
            </div>

            <div class="mb-16 border-t border-primary/10 pt-12">
                <h2 class="text-3xl font-serif mb-6 text-primary">Key Takeaway</h2>
                <p class="text-xl font-serif text-primary mb-4 italic">
                    Strong businesses need equally strong digital systems.
                </p>
                <p class="text-lg text-primary/70 leading-relaxed">
                    This project helped Sri Gangotri Industries align their real-world scale and revenue with a digital presence that builds trust, supports growth, and strengthens partnerships.
                </p>
            </div>
        `,
        images: []
    },
    'one-thing': {
        title: "One Thing",
        category: "Productivity · Founders & Builders",
        year: "2024",
        color: "#E8E6E1",
        image: ot1,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    A daily focus system that helps founders stop overthinking and start executing. One Thing is a minimal productivity product designed to help founders stop overthinking and start executing.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Founders often track too many tasks, tools, and goals—leading to cognitive overload and poor follow-through.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    One Thing simplifies productivity to a single daily question: <strong class="text-primary">Did you complete the one most important thing today?</strong> If not, the app asks why, turning failure into reflection rather than guilt.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>One-question-per-day design</li>
                    <li>Reflection-based accountability</li>
                    <li>Habit-forming UX</li>
                    <li>No metrics, no streak pressure</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Encourages clarity over hustle</li>
                    <li>Builds self-awareness and consistency</li>
                    <li>Designed for long-term thinking, not dopamine loops</li>
                </ul>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Product thinking · Behavioral design · UX minimalism</p>
            </div>
        `,
        images: [ot1]
    },
    'tesseract': {
        title: "Tesseract",
        category: "Developer Tools · Repos & PRs",
        year: "2024",
        color: "#1A1A1A",
        image: tess1,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Tesseract is a developer productivity platform that brings multiple organizations and repositories into a single operational space. Unified repository and pull-request visibility across organisations.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Engineering teams managing multiple organizations and repositories struggle with scattered pull requests, context switching, and lack of centralized visibility.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    Tesseract acts as a single source of truth for repository management.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Organize repositories across multiple organizations</li>
                    <li>Track pull requests from different repos and orgs</li>
                    <li>Unified dashboard for organizers and maintainers</li>
                    <li>Real-time visibility into development workflows</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Reduces operational friction, improves code review efficiency, and is designed for scaling engineering teams.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Developer tools · System design · Dashboard UX</p>
            </div>
        `,
        images: [tess1]
    },
    'mandapam': {
        title: "Mandapam",
        category: "All-in-One Wedding Platform",
        year: "2024",
        color: "#D8CFBC",
        image: mandapamImg,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Mandapam is a comprehensive wedding platform that simplifies end-to-end wedding planning into a single digital experience. A single digital ecosystem for venues, vendors and wedding planning.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Wedding planning involves multiple vendors, timelines, and decisions—often managed across fragmented platforms.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    Mandapam centralizes everything into one planning ecosystem.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Venue discovery and booking</li>
                    <li>Vendor management</li>
                    <li>Dress and jewelry listings</li>
                    <li>Unified planning workflow</li>
                    <li>User-friendly experience for families and couples</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Reduces planning stress, saves time and coordination effort, and provides a scalable marketplace for vendors.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Marketplace design · Booking systems · Large-scale UX</p>
            </div>
        `,
        images: [mandapamImg]
    },
    'cafe-aura': {
        title: "Café Aura",
        category: "Custom Booking Website",
        year: "2024",
        color: "#565449",
        image: auraImg,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Café Aura is a modern café website designed with a custom time-slot based table booking system. A café website with a custom time-slot booking system that matches real operations.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Generic booking tools don't fit café workflows and brand identity.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    A tailored booking experience that aligns with real café operations.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Custom time-based reservations</li>
                    <li>Mobile-first booking UX</li>
                    <li>Clean brand presentation</li>
                    <li>Owner-friendly structure</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Improves customer experience, reduces booking conflicts, and enhances brand trust.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Web UX · Booking logic · Small business systems</p>
            </div>
        `,
        images: [auraImg]
    },
    'dharohar': {
        title: "Dharohar",
        category: "Cultural Heritage & Community",
        year: "2024",
        color: "#E6E6FA",
        image: dhImg,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Dharohar is a digital platform that brings heritage, culture, monuments, and arts into a single interactive space. A digital space for heritage, monuments, arts and community conversation.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Cultural knowledge is fragmented across platforms, making discovery and discussion difficult.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    A centralized platform for exploration, contribution, and discussion.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Discover heritage by place, monument, art, and culture</li>
                    <li>User-generated content and discussions</li>
                    <li>Profile management</li>
                    <li>Community engagement tools</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Encourages cultural awareness, enables meaningful conversations, and preserves collective knowledge digitally.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Content platforms · Community UX · Information architecture</p>
            </div>
        `,
        images: [dhImg]
    },
    'rivisha': {
        title: "Rivisha",
        category: "Reusable Café Booking Architecture",
        year: "2024",
        color: "#E8E6E1",
        image: riv1,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Rivisha extends the café booking system into a reusable, scalable structure adaptable for similar businesses. A reusable café booking framework that can be adapted for future venues.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Most café websites are built once and cannot scale or be reused.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    A flexible booking architecture with modular design.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>Custom time-slot booking</li>
                    <li>Modular frontend structure</li>
                    <li>Performance-optimized experience</li>
                    <li>Easy to adapt for future cafes</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Faster deployment for new clients, consistent UX across brands, and reduced maintenance complexity.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: Reusable systems · Frontend architecture · Performance</p>
            </div>
        `,
        images: [riv1]
    },
    'hiraeth': {
        title: "Hiraeth",
        category: "AI-Powered Travel Planning",
        year: "2024",
        color: "#2d3a2d",
        image: hiraethImg,
        content: `
            <div class="mb-16">
                <h2 class="text-3xl font-serif mb-6 text-primary">Overview</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Hiraeth is an AI-driven travel planner designed to create personalized, meaningful travel experiences, similar in vision to Trivana. An AI-driven travel planner for trips that feel intentional, not generic.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Problem</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Trip planning is time-consuming and often generic.
                </p>
                <h2 class="text-3xl font-serif mb-6 text-primary">Solution</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-6">
                    An AI-assisted system that builds custom itineraries based on user preferences.
                </p>
                <h3 class="text-2xl font-serif mb-4 text-primary">Key Capabilities</h3>
                <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4 mb-8">
                    <li>AI-generated itineraries</li>
                    <li>Personalized recommendations</li>
                    <li>End-to-end trip structuring</li>
                    <li>Designed for future integrations</li>
                </ul>
                <h2 class="text-3xl font-serif mb-6 text-primary">Why It Matters</h2>
                <p class="text-lg text-primary/70 leading-relaxed mb-8">
                    Saves planning time, improves travel quality, and enables smart personalization at scale.
                </p>
                <p class="text-sm font-mono uppercase tracking-widest text-primary/50">Domains: AI products · Travel tech · Recommendation systems</p>
            </div>
        `,
        images: [hiraethImg]
    },
    // Fallback for others
    'default': {
        title: "Project Detail",
        category: "Digital Experience",
        year: "2024",
        color: "#D8CFBC",
        video: "https://minio.neudesign.top/neu/250122/4.mp4",
        content: `
            <p class="mb-8 text-lg text-primary/70 leading-relaxed">
                Detailed case study content coming soon. This represents a placeholder for a deep dive into our strategic process, design exploration, and technical implementation.
            </p>
        `,
        images: [
            "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
        ]
    }
}

const CaseStudyDetail = () => {
    const { id } = useParams()
    const data = caseStudyData[id as keyof typeof caseStudyData] || caseStudyData['default']
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
    const videos = data.videos ?? []
    const heroVideo = data.video
    const heroImage = data.image
    
    // Handle video end for Kiddo (multiple videos)
    const handleVideoEnd = () => {
        if (videos.length > 0) {
            setCurrentVideoIndex((prev) => (prev + 1) % videos.length)
        }
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <Link to="/work" className="inline-flex items-center text-accent-olive font-bold uppercase tracking-widest text-xs mb-12 hover:underline">
                    ← Back to Work
                </Link>

                <div className="mb-20">
                    <TextAnimation
                        text={`${data.category} — ${data.year}`}
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <TextAnimation
                        text={data.title || "Untitled Project"}
                        as="h1"
                        classname="text-6xl md:text-8xl font-serif text-primary mb-8"
                        letterAnime={true}
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full aspect-[21/9] bg-surface rounded-lg overflow-hidden mb-20 relative"
                >
                    {/* Hero Video or Image */}
                    {videos.length > 0 ? (
                        <video
                            key={currentVideoIndex}
                            src={videos[currentVideoIndex]}
                            autoPlay
                            muted
                            playsInline
                            onEnded={handleVideoEnd}
                            className="w-full h-full object-cover"
                        />
                    ) : heroVideo ? (
                        <video
                            src={heroVideo}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : heroImage ? (
                        <img src={heroImage} alt={data.title} className="w-full h-full object-cover" />
                    ) : (
                        data.images && data.images[0] && (
                            <img src={data.images[0]} alt="Hero" className="w-full h-full object-cover" />
                        )
                    )}
                </motion.div>

                <div className="grid md:grid-cols-12 gap-12">
                    <div className="md:col-span-8 md:col-start-3 content-block">
                        <div dangerouslySetInnerHTML={{ __html: data.content }} />
                    </div>
                </div>

                <div className="mt-20 grid md:grid-cols-2 gap-8">
                    {data.images && data.images.slice(0).map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="aspect-video bg-surface rounded-lg overflow-hidden"
                        >
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CaseStudyDetail
