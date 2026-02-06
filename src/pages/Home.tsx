import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Services from '../components/Services'
import TechStack from '../components/TechStack'
import Contact from '../components/Contact'
import Brands from '../components/Brands'
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <main>
            <Hero />
            <div id="services">
                <Services />
            </div>
            <Brands />
            <TechStack />
            <div id="projects">
                <Projects />
            </div>
            <Testimonials />
            <div id="contact">
                <Contact />
            </div>
        </main>
    )
}

export default Home
