import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    {
      quote: "E&J Signs delivered exceptional quality for our team uniforms. Highly recommended!",
      author: "Sarah Johnson, Local Sports Team Coach"
    },
    {
      quote: "Professional service and beautiful embroidery work. Our corporate hats look amazing!",
      author: "Mike Chen, XYZ Corporation"
    },
    {
      quote: "Fast turnaround and great prices for our healthcare facility uniforms.",
      author: "Dr. Lisa Rodriguez, City Medical Center"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto"
        >
          Don't just take our word for it - hear from our satisfied customers
        </motion.p>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <motion.div 
              key={i}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-gray-50 p-6 lg:p-8 shadow-md hover:shadow-lg rounded-lg transition-all duration-300 border-l-4 border-primaryRed cursor-pointer"
            >
              <motion.div 
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <svg className="w-8 h-8 text-primaryRed mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.78-3.018.68-1.062 1.855-1.776 3.527-2.14v-2.718c-2.855.477-5.02 1.638-6.5 3.48-1.48 1.843-2.217 3.925-2.217 6.248 0 1.97.63 3.607 1.888 4.91 1.26 1.303 2.917 1.954 4.972 1.954 1.888 0 3.44-.67 4.653-2.009 1.214-1.34 1.821-2.956 1.821-4.851.001-1.896-.608-3.511-1.821-4.851z"/>
                </svg>
              </motion.div>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-700 italic text-lg mb-6 leading-relaxed"
              >
                "{testimonial.quote}"
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                className="border-t pt-4"
              >
                <p className="font-semibold text-primaryBlue text-sm">
                  {testimonial.author}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Testimonials; 