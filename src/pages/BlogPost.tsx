import { motion } from 'framer-motion'
import { useParams, Link } from 'react-router-dom'
import TextAnimation from '../components/ui/scroll-text'

const blogData = {
    '1': {
        title: "The Future of Digital Branding",
        subtitle: "How AI and immersive technologies are reshaping connection.",
        date: "Feb 12, 2026",
        category: "Insights",
        image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                The static logo is dead. In an era of fluid interfaces and generative content, a brand's identity must be a living, breathing system.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                For decades, consistency was the golden rule of branding. A logo had to look the same on a business card as it did on a billboard. But digital ecosystems are not static. They shift, adapt, and personalize.
            </p>
            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Generative Identity</h3>
             <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Imagine a brand mark that evolves based on the time of day, the user's location, or the tempo of the music they are listening to. This isn't science fiction; it's the current capability of WebGL and generative code.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                We are moving from "Corporate Identity" to "Algorithmic Personality." The core DNA of the brand remains constant—typographic rules, color variables, motion behaviors—but the expression is infinite.
            </p>
        `
    },
    '2': {
        title: "Minimalism in UI Design",
        subtitle: "Why less is more when it comes to user experience.",
        date: "Jan 28, 2026",
        category: "Design",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d5143?q=80&w=1000&auto=format&fit=crop",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                Minimalism is not about the absence of elements, but the presence of focus.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Every element on a screen adds cognitive load. When we strip away the decorative, the redundant, and the noisy, we leave room for the user to think, decide, and act.
            </p>
         `
    },
    '4': {
        title: "Why Most Digital Products Fail — And It Has Nothing to Do With Code",
        subtitle: "Success is built on clarity, not complexity.",
        date: "Feb 10, 2026",
        category: "Insights",
        image: "https://i.pinimg.com/736x/4f/6e/37/4f6e37adec5834503ecc891b47b789ff.jpg",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                Every year, thousands of digital products launch with excitement, funding, and ambitious roadmaps. And every year, most quietly disappear.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Founders often blame execution: weak tech, too few features, wrong timing, or the “need for better developers.” After working closely with startups, brands, and platforms, we've learned something important at carveyourbrand — most products don’t fail because of bad code. They fail because they were built without clarity.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">The Technology Illusion</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                More frameworks. More AI. More dashboards. More automation. It's easy to believe technical impressiveness guarantees success. But users don't experience your stack — they experience clarity or confusion. A beautifully engineered product that is hard to understand, overwhelms with options, or doesn’t solve a real pain will fail just as fast as a poorly built one.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Technology is a tool. Clarity is the foundation.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Building Features Instead of Solving Problems</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                One of the most common patterns is feature-first thinking: “Let's add this,” “Competitors have that,” “Users might need this someday.” Over time, the product becomes crowded and exhausting to use. The real question must be: <em>What is the one core problem this product exists to solve?</em>
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Great products do one thing exceptionally well and expand only when users demand it.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">The Missing Piece: Deep User Understanding</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Understanding users isn't about personas on slides. It's knowing what frustrates them, what they avoid, what they don’t have time to learn, and what makes them trust. When insight is shallow, products are built for internal assumptions, investor expectations, or technical convenience — not for real humans.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                At carveyourbrand, we believe empathy is a design skill. Products succeed when users feel understood, respected, and guided — not instructed.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Overengineering: The Silent Product Killer</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Teams try to future‑proof everything — complex architectures, endless configurations, features for scale that may never arrive. The result: slower launches, higher costs, more bugs, confused users. Early-stage products don’t need perfection; they need clarity, usability, and adaptability. You can’t optimize for scale before you validate value.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">UX Is Not Decoration — It’s Strategy</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                UX decides whether users stay, trust, and return. Poor UX kills silently: too many steps, unclear actions, overwhelming screens, inconsistent flows. Good UX doesn't seek attention — it makes the product feel effortless. Effortlessness is designed.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Why MVPs Fail to Prove Anything</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                MVP is often misused. A real MVP proves one assumption: <em>this problem is real, and people care enough to use our solution.</em> When MVPs lack focus, they fail to validate anything, leaving teams unsure what went wrong.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">A Better Way to Build Digital Products</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Our approach at carveyourbrand focuses on problem clarity, user intent, simplicity of experience, and long‑term scalability before writing a single line of code.
            </p>
            <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                <li>Products should reduce thinking, not increase it</li>
                <li>Features should earn their place</li>
                <li>Design should guide, not impress</li>
                <li>Growth should be intentional, not forced</li>
            </ul>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Failure Isn’t Always Loud — It’s Often Silent</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Most products fade: engagement drops, retention slows, users stop caring. By the time teams notice, rebuilding feels inevitable. Many of these failures were preventable.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Final Thought</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                If you're building a digital product, ask: Do users instantly understand why this exists? Does it solve a real problem simply? Are we building for clarity or complexity? Are we listening more than assuming?
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Products don’t fail because of code. They fail because they forget who they're for.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Build With Intention</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                At carveyourbrand, we help founders build products that are clear, scalable, and deeply user‑centered. If you're building something and want it done right from the start, let's talk.
            </p>
        `
    },
    '5': {
        title: "From Idea to Impact: How We Design Digital Products That Scale",
        subtitle: "Scalability is designed from day one — not bolted on later.",
        date: "Feb 10, 2026",
        category: "Insights",
        image: "https://i.pinimg.com/1200x/24/1e/52/241e521caa67fb5ec8a2a269f9030e39.jpg",
        content: `
            <p class="text-xl font-serif leading-relaxed mb-8 text-primary">
                Every great digital product starts with an idea. But very few ideas survive the journey from launch to longevity.
            </p>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Most products don’t fail at launch — they fail months later: when users stop returning, when systems break under growth, and when teams realize the product can’t evolve without rebuilding everything. At carveyourbrand, we’ve learned one crucial truth: scalability is not something you add later — it’s something you design for from day one.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Projects vs Products: The Mindset Shift</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                A project mindset asks about features, deadlines, and delivery. A product mindset asks who it’s for, what problem it solves repeatedly, and how it evolves over time. Projects end. Products grow. Scalable products are built by designing systems — not just screens.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Scalability Starts With Problem Clarity</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Before architecture or tech stack, scalability begins with problem clarity. If the core problem is vague, growth only magnifies confusion. We work with founders to define the single most important user problem, the context in which it appears, and why existing solutions fall short. When the problem is clear, decisions become easier — what to build, what to delay, and what to never build.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">UX Simplicity Is a Growth Strategy</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Scalability isn’t purely technical. As users increase, complexity compounds and friction multiplies. A scalable UX is intuitive for first‑time users, efficient for power users, consistent across flows, and forgiving of mistakes. We design UX that reduces cognitive load, guides decisions naturally, and stays usable even as features expand.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Designing Systems, Not Just Interfaces</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Scalable products are built on modular thinking: reusable components, flexible workflows, and clear boundaries between systems. This allows products to add features without breaking existing ones, onboard new user roles easily, and adapt to changing business models.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Growth Without Rebuilds</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                “We need to rebuild everything” happens when early decisions were made for speed, not sustainability. Our approach focuses on future‑proofing core flows, avoiding unnecessary complexity, and keeping the architecture adaptable. Scalable design doesn’t mean overengineering — it means intentional design. You don’t prepare for every future. You prepare for change.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Scalability Is Also About Teams</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                As products grow, so do teams. A scalable product must be easy to maintain, easy to understand for new developers, and easy to manage for non‑technical stakeholders. We design products so maintainers aren’t afraid to touch the system, admins have visibility and control, and teams can move fast without breaking trust. Good products scale users. Great products scale teams.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">How We Approach Scalable Product Design</h3>
            <ul class="list-disc list-inside space-y-2 text-lg text-primary/70 leading-relaxed ml-4">
                <li>Understand the problem deeply</li>
                <li>Design simple, intuitive user experiences</li>
                <li>Build flexible, modular systems</li>
                <li>Plan for growth without premature complexity</li>
                <li>Align decisions with long‑term business goals</li>
            </ul>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                This approach helps us build platforms that grow across regions, products that support multiple roles, and systems that evolve without constant rewrites.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">From Idea to Impact</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                Ideas are easy. Execution is hard. Sustained impact is rare. Scalable products are the result of deliberate choices made early, when it matters most. If you're building something that you want to grow, don’t rush clarity, don’t design for today alone, and don’t treat your product like a one‑time delivery.
            </p>

            <h3 class="text-2xl font-serif text-primary mt-12 mb-6">Final Thought</h3>
            <p class="mb-6 text-lg text-primary/70 leading-relaxed font-sans">
                The difference between products that survive and products that scale is not ambition — it’s intention. At carveyourbrand, we don’t just build digital products. We design foundations strong enough to grow on. Build with carveyourbrand.
            </p>
        `
    },
    'default': {
        title: "Blog Post",
        subtitle: "Thoughts on design and technology",
        date: "2026",
        category: "General",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
        content: "<p>Content coming soon...</p>"
    }
}

const BlogPost = () => {
    const { id } = useParams()
    const data = blogData[id as keyof typeof blogData] || blogData['default']

    return (
        <div className="min-h-screen bg-background pt-32 pb-20">
            {/* Hero Image */}
            <div className="w-full h-[50vh] relative overflow-hidden mb-20">
                <div className="absolute inset-0 bg-black/20 z-10" />
                <img src={data.image} alt={data.title} className="w-full h-full object-cover" />
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <Link to="/blog" className="inline-flex items-center text-accent-olive font-bold uppercase tracking-widest text-xs mb-12 hover:underline">
                    ← Back to Thoughts
                </Link>

                <div className="mb-16">
                    <TextAnimation
                        text={`${data.category} • ${data.date}`}
                        classname="text-accent-olive font-bold tracking-widest uppercase mb-4 block text-xs"
                    />
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-serif text-primary mb-6"
                    >
                        {data.title}
                    </motion.h1>
                    <p className="text-xl md:text-2xl text-primary/60 font-serif italic">
                        {data.subtitle}
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    dangerouslySetInnerHTML={{ __html: data.content }}
                />
            </article>
        </div>
    )
}

export default BlogPost
