import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      quote: "E&J Signs delivered exceptional quality for our team uniforms. The attention to detail and professional service exceeded our expectations!",
      author: "Sarah Johnson",
      title: "Local Sports Team Coach",
      rating: 5
    },
    {
      quote: "Professional service and beautiful embroidery work. Our corporate merchandise looks amazing and has really elevated our brand presence.",
      author: "Mike Chen", 
      title: "XYZ Corporation Marketing Director",
      rating: 5
    },
    {
      quote: "Fast turnaround and great prices for our healthcare facility uniforms. The quality is outstanding and our staff loves them.",
      author: "Dr. Lisa Rodriguez",
      title: "City Medical Center",
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-neutral-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 90, 180],
            opacity: [0.02, 0.05, 0.02]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-accent-500/10 to-secondary-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [180, 90, 0],
            opacity: [0.05, 0.02, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-tr from-secondary-500/10 to-accent-500/10 rounded-full blur-3xl"
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
            <span className="text-neutral-600 text-sm font-medium">Client Testimonials</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900">
            What Our <span className="text-gradient bg-gradient-to-r from-accent-500 to-secondary-600">Clients Say</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who've experienced our exceptional service
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 overflow-hidden"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              {/* Quote icon */}
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 mb-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.78-3.018.68-1.062 1.855-1.776 3.527-2.14v-2.718c-2.855.477-5.02 1.638-6.5 3.48-1.48 1.843-2.217 3.925-2.217 6.248 0 1.97.63 3.607 1.888 4.91 1.26 1.303 2.917 1.954 4.972 1.954 1.888 0 3.44-.67 4.653-2.009 1.214-1.34 1.821-2.956 1.821-4.851.001-1.896-.608-3.511-1.821-4.851z"/>
                  </svg>
                </div>

                {/* Star rating */}
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <motion.svg
                      key={starIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 + starIndex * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-5 h-5 text-amber-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>
              </motion.div>

              {/* Quote text */}
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 text-neutral-700 text-lg mb-6 leading-relaxed font-medium"
              >
                "{testimonial.quote}"
              </motion.p>

              {/* Author info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="relative z-10 border-t border-neutral-200 pt-6"
              >
                <p className="font-bold text-primary-900 text-base mb-1">
                  {testimonial.author}
                </p>
                <p className="text-neutral-500 text-sm font-medium">
                  {testimonial.title}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 mb-6 text-lg">
            Ready to join our satisfied customers?
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
            Get Your Quote Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 