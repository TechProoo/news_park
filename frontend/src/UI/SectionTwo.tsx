import { motion } from "framer-motion";
import CardThree from "../Components/CardThree";

interface SectionTwoProp {
  cat: string;
}

const SectionTwo: React.FC<SectionTwoProp> = ({ cat }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="news_head">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="fnt text-2xl text-light font-black"
        >
          {cat}
        </motion.h1>
        <div className="seperator md:w-full mt-2 opacity-50"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mt-10 grid grid-cols-12 gap-5 justify-center"
      >
        {[...Array(4)].map((_, index) => (
          <motion.div 
            key={index}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="md:col-span-3 col-span-6"
          >
            <CardThree info={cat} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default SectionTwo;
