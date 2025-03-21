import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { XCircle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      {/* Icon Animation */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <XCircle size={100} className="text-light" />
      </motion.div>

      {/* 404 Text Animation */}
      <motion.h1
        className="text-6xl font-bold text-gray-800 mt-5"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        404
      </motion.h1>

      {/* Message Animation */}
      <motion.p
        className="text-lg text-gray-600 mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Button Animation */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <Link
          to="/"
          className="px-6 py-3 text-light text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
