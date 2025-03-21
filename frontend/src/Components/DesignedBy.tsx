import { motion } from "framer-motion";
import Tech from "../assets/techPro.png"; // Adjust the image path

const DesignedBy = () => {
  return (
    <div className="col-span-5">
      <div className="sticky top-8 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=" shadow-lg rounded-lg p-6 flex flex-col items-center"
        >
          <h1 className="text-center text-gray-800 text-3xl font-semibold">
            Designed by
          </h1>
          <img
            src={Tech}
            alt="Designed by Tech"
            className="w-35 h-35 object-contain mt-3 rounded-full shadow-md"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default DesignedBy;
