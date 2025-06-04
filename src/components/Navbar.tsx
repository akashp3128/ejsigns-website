import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "#DC2626",
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-primaryBlue text-white p-4 sticky top-0 shadow-md z-50"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/" 
            className="text-2xl font-bold mb-4 sm:mb-0 hover:text-primaryRed transition-colors duration-200"
          >
            E&J Signs
          </Link>
        </motion.div>
        <div className="space-y-2 sm:space-y-0 sm:space-x-6 flex flex-col sm:flex-row">
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link 
              to="/" 
              className="hover:text-primaryRed transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              Home
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link 
              to="/about" 
              className="hover:text-primaryRed transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              About
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link 
              to="/embroidery" 
              className="hover:text-primaryRed transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              Embroidery
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link 
              to="/printing" 
              className="hover:text-primaryRed transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              Printing
            </Link>
          </motion.div>
          <motion.div variants={linkVariants} whileHover="hover" whileTap="tap">
            <Link 
              to="/contact" 
              className="hover:text-primaryRed transition-colors duration-200 px-3 py-2 rounded-md hover:bg-blue-800"
            >
              Contact
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar; 