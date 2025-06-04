import { motion } from 'framer-motion';

function PortfolioGrid() {
  const portfolioItems = [
    {
      title: "Custom Embroidered Hats",
      description: "Premium corporate headwear for XYZ Corp",
      category: "Embroidery",
      image: `https://picsum.photos/400/300?random=1`
    },
    {
      title: "Event T-Shirts",
      description: "High-quality printed tees for community festival",
      category: "Screen Printing",
      image: `https://picsum.photos/400/300?random=2`
    },
    {
      title: "Sports Team Uniforms",
      description: "Complete uniform set with custom logos",
      category: "Embroidery",
      image: `https://picsum.photos/400/300?random=3`
    },
    {
      title: "Healthcare Scrubs",
      description: "Professional medical facility uniforms",
      category: "Embroidery",
      image: `https://picsum.photos/400/300?random=4`
    },
    {
      title: "Promotional Merchandise",
      description: "Branded merchandise for marketing campaign",
      category: "Screen Printing",
      image: `https://picsum.photos/400/300?random=5`
    },
    {
      title: "Custom Polo Shirts",
      description: "Executive wear with embroidered logos",
      category: "Embroidery",
      image: `https://picsum.photos/400/300?random=6`
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getCategoryColor = (category: string) => {
    return category === 'Embroidery' 
      ? 'from-accent-500 to-accent-600' 
      : 'from-secondary-500 to-secondary-600';
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 45, 90],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [90, 45, 0],
            opacity: [0.05, 0.02, 0.05]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 border border-neutral-200 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 bg-accent-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-neutral-600 text-sm font-medium">Recent Projects</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900">
            Our <span className="text-gradient bg-gradient-to-r from-accent-500 to-secondary-600">Portfolio</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Discover our recent work showcasing exceptional craftsmanship, attention to detail, and commitment to quality
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((item, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -12,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200/50"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-10" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <motion.img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                
                {/* Image overlay */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.3 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"
                />

                {/* Category badge */}
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(item.category)} text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm`}>
                    {item.category}
                  </span>
                </div>

                {/* View project button - appears on hover */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center z-20"
                >
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-primary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 relative z-10">
                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-accent-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Bottom action area */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-neutral-200">
                  <span className="text-sm font-medium text-neutral-500">
                    View Details
                  </span>
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6 text-lg">
            Ready to create something amazing together?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-accent-500 to-accent-600 hover:from-accent-600 hover:to-accent-700 text-white font-semibold rounded-2xl text-lg transition-all duration-300 shadow-xl border border-accent-400/20"
          >
            Start Your Project
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default PortfolioGrid; 