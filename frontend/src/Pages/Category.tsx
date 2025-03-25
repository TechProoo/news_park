import { motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../Components/ImageCard";
import BreadCrumb from "../Components/BreadCrumb";
import { categories } from "../Data/categories";
import NewsCard from "../Components/CardFive";
import DesignedBy from "../Components/DesignedBy";
import Divide from "../Components/Divider";
import Trending from "../UI/Trending";
import Pagin from "../Components/Pagination";

const sampleNews = [
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  // Add more sample news objects...
];

const ITEMS_PER_PAGE = 5;

const Category = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const filterCategory = categories.filter(
    (category) => category.name.toLowerCase() === id
  );

  const totalPages = Math.ceil(sampleNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = sampleNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="category_section mt-10 md:w-10/12 w-11/12 m-auto pb-10"
    >
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-12 gap-3"
      >
        <div className="md:col-span-6 col-span-12">
          <ImageCard
            category="Health"
            date="March 23, 2021"
            title="Wellness trends for 2025"
            height="450px"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <ImageCard
                category="Health"
                date="March 23, 2021"
                title="Wellness trends for 2025"
                height="220px"
              />
            </div>
            <div className="col-span-12">
              <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex gap-3 overflow-scroll justify-center md:overflow-hidden w-full "
              >
                <ImageCard
                  category="Health"
                  date="March 23, 2021"
                  title="Wellness trends for 2025"
                  height="220px"
                />
                <ImageCard
                  category="Health"
                  date="March 23, 2021"
                  title="Wellness trends for 2025"
                  height="220px"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="category_crumb mt-5"
      >
        <BreadCrumb content={filterCategory[0]?.name || "Category"} />
      </motion.div>
      <motion.div className="category_topic mt-5">
        <h1 className="text-4xl fnt text-light font-semibold">
          {filterCategory[0]?.name || "Category"}
        </h1>
        <p style={{ color: "rgba(166, 0, 30, 0.48)" }}>
          {filterCategory[0]?.description || "Description not available"}
        </p>
      </motion.div>

      <motion.div className="mt-5 grid grid-cols-12 justify-between">
        <div className="md:col-span-7 col-span-12">
          {paginatedNews.map((news, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="mt-5"
            >
              <NewsCard {...news} />
            </motion.div>
          ))}
        </div>
        <div className="md:col-span-5 col-span-7">
          <motion.div 
            className="sticky flex items-center mt-3 md:mt-1 justify-center"
            style={{ top: "2rem" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <DesignedBy />
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="flex justify-center mt-10">
        <Pagin totalPages={totalPages} onPageChange={setCurrentPage} />
      </motion.div>
      <Divide />
      <motion.div className="mt-5">
        <Trending />
      </motion.div>
    </motion.div>
  );
};

export default Category;