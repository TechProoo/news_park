import { motion } from "framer-motion";
import { Calendar, Eye, Heart, MessageSquareText } from "lucide-react";
import admin from "../assets/techPro.png";
import CardOne from "../Components/CardOne";
import { Link } from "react-router-dom";


const getRandomItem = () => {
  const items = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  return items[Math.floor(Math.random() * items.length)];
};

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero_cover"
    >
      <div className="md:w-10/12 pt-40 pl-10 md:pl-1 m-auto">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="hero_left"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hero_left_top flex items-center gap-4"
            >
              <div className="flex items-center py-2 px-3 rounded text-center hero_category_cover">
                <b className="fnt text-white">Business</b>
              </div>
              <div className="flex gap-1 items-center">
                <Calendar className="text-white" size={15} />
                <span className="text-white fnt text-sm">March 21, 2021</span>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="hero_left_middle mt-5"
            >
              <Link
                to={"/news/Climate changes in recent prospective"}
                className="w-11/12 fnt text-3xl md:text-5xl text-white"
              >
                Climate changes in recent prospective
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="hero_left_bottom mt-5"
            >
              <div className="flex gap-3 items-center">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  src={admin}
                  className="h-30"
                  alt="admin"
                />
                <div className="flex hero_icons_cover gap-3 items-center text-white">
                  <p className="text-gray-500">
                    By <b className="text-white">admin</b>
                  </p>
                  <div className="hero_icons flex items-center gap-1">
                    <Eye size={15} className="text-gray-500" />
                    <b className="text-sm">121</b>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart size={15} className="text-gray-500" />
                    <b className="text-sm">0</b>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageSquareText size={15} className="text-gray-500" />
                    <b className="text-sm">0</b>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero_bottom p-3"
        >
          <div className="flex items-center gap-3">
            <CardOne />
            <CardOne />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
