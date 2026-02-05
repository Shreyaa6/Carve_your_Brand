import { motion } from 'framer-motion'

const Projects = () => {
  // Placeholder projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A modern, scalable e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      results: [
        { metric: 'Conversion Rate', value: '3x', description: 'Increase' },
        { metric: 'Revenue', value: '$2M+', description: 'Generated' }
      ]
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      description: 'Secure, user-friendly mobile banking application with biometric authentication and real-time transactions.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      results: [
        { metric: 'User Adoption', value: '85%', description: 'Within 3 months' },
        { metric: 'App Rating', value: '4.8/5', description: 'App Store' }
      ]
    },
    {
      id: 3,
      title: 'AI Customer Support',
      category: 'AI Chatbots',
      description: 'Intelligent chatbot system that handles customer inquiries 24/7 with 95% accuracy rate.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      results: [
        { metric: 'Response Time', value: '<2s', description: 'Average' },
        { metric: 'Satisfaction', value: '92%', description: 'Customer rating' }
      ]
    },
    {
      id: 4,
      title: 'Healthcare Management System',
      category: 'Web Solutions',
      description: 'Comprehensive healthcare platform for patient management, appointments, and medical records.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop',
      results: [
        { metric: 'Efficiency', value: '60%', description: 'Time saved' },
        { metric: 'Patients', value: '50K+', description: 'Served' }
      ]
    },
    {
      id: 5,
      title: 'SaaS Dashboard Platform',
      category: 'Web Development',
      description: 'Advanced analytics dashboard with real-time data visualization and custom reporting features.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      results: [
        { metric: 'User Engagement', value: '2.5x', description: 'Increase' },
        { metric: 'Data Processing', value: '10M+', description: 'Records/day' }
      ]
    }
  ]

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium mb-4 text-primary">
            Selected Work
          </h2>
          <p className="text-xl text-accent-stone max-w-2xl mx-auto font-sans">
            A selection of our most passionate work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-[400px] overflow-hidden rounded-none mb-6 bg-surface">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div>
                <div className="flex justify-between items-baseline mb-2 border-b border-primary/10 pb-4 group-hover:border-accent-rose transition-colors duration-300">
                  <h3 className="text-2xl font-serif font-medium text-primary">{project.title}</h3>
                  <span className="text-sm font-sans font-bold uppercase tracking-widest text-accent-rose">{project.category}</span>
                </div>
                <p className="text-primary/70 font-sans line-clamp-2 mt-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
