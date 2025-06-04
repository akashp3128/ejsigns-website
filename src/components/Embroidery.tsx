import { motion } from 'framer-motion';

function Embroidery() {
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
            Embroidery Services
          </span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Custom Logo Embroidery</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              Professional embroidery services for corporate uniforms, team jerseys, hats, and promotional items. 
              We use state-of-the-art equipment to ensure precision and durability.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Corporate uniforms and workwear
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Sports team jerseys and caps
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Promotional merchandise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent-500 rounded-full mr-3"></span>
                Custom design digitization
              </li>
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary-900">Premium Quality Materials</h2>
            <p className="text-neutral-600 leading-relaxed mb-6">
              We only use the highest quality threads and materials to ensure your embroidered items 
              look professional and last for years to come.
            </p>
            <ul className="space-y-2 text-neutral-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Premium polyester and rayon threads
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Fade-resistant colors
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Machine washable results
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3"></span>
                Long-lasting durability
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Embroidery; 