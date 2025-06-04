import { motion } from 'framer-motion';

function Printing() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-8 text-primary-900"
        >
          <span className="text-gradient bg-gradient-to-r from-accent-500 to-secondary-600">
            T-Shirt Printing Services
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Screen Printing Excellence</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              High-quality screen printing for t-shirts, hoodies, and apparel. Perfect for events, 
              teams, businesses, and promotional campaigns with vibrant, long-lasting results.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Custom t-shirt designs
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Event and promotional apparel
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Team uniforms and jerseys
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Multi-color designs available
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Bulk Order Specialists</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We excel at large quantity orders with competitive pricing and reliable delivery. 
              Perfect for corporate events, schools, and organizations.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Volume discounts available
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Fast turnaround times
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Quality control on every item
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Professional packaging
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Printing; 