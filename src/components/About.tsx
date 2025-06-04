import { motion } from 'framer-motion';

function About() {
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
            About E&J Signs
          </span>
        </motion.h1>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                E&J Signs specializes in high-quality t-shirt printing and embroidery on hats, offering custom designs and bulk orders for small businesses, sports teams, events, and healthcare companies.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                With years of experience in the custom apparel industry, we pride ourselves on delivering exceptional quality, competitive pricing, and outstanding customer service. Our state-of-the-art equipment and skilled team ensure that every project meets the highest standards.
              </p>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Whether you need custom t-shirts for your business, embroidered hats for your sports team, or bulk orders for a special event, E&J Signs is your trusted partner for all your custom apparel needs.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-900">Our Services</h3>
              <ul className="space-y-3">
                {[
                  'Custom T-shirt Printing',
                  'Professional Hat Embroidery',
                  'Bulk Order Specialists',
                  'Custom Design Services',
                  'Corporate Uniforms',
                  'Event Merchandise'
                ].map((service, index) => (
                  <motion.li 
                    key={service}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    className="flex items-center text-neutral-600"
                  >
                    <span className="w-2 h-2 bg-accent-500 rounded-full mr-3 flex-shrink-0"></span>
                    {service}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm border border-neutral-200 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-primary-900">Industries We Serve</h3>
              <ul className="space-y-3">
                {[
                  'Small Businesses',
                  'Sports Teams & Athletics',
                  'Event Organizers',
                  'Healthcare Companies',
                  'Schools & Universities',
                  'Non-Profit Organizations'
                ].map((industry, index) => (
                  <motion.li 
                    key={industry}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                    className="flex items-center text-neutral-600"
                  >
                    <span className="w-2 h-2 bg-secondary-500 rounded-full mr-3 flex-shrink-0"></span>
                    {industry}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 