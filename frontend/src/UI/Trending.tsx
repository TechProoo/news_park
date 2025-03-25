import { motion } from "framer-motion";
import BadgeInfo from "../Components/Badge";
import Tabs from "../Components/Tabs";
import newsData from "../Data/trending";
import Weather from "./Weather";

const Trending = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="trending_cover mt-10"
    >
      <div className="p-3 md:p-2">
        <div className="grid md:grid-cols-12 grid-cols-12 gap-3 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="md:col-span-9 col-span-12"
          >
            <div className="trending_header">
              <Tabs data={newsData} />
            </div>
          </motion.div>
          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-3 col-span-12"
          >
            <div className="border-b">
              <BadgeInfo content="Weather" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="mt-3"
              >
                <Weather />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Trending;
