import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../Components/ImageCard";
import BreadCrumb from "../Components/BreadCrumb";
import { categories } from "../Data/categories";
import NewsCard from "../Components/CardFive";
import DesignedBy from "../Components/DesignedBy";
import Divide from "../Components/Divider";
import Trending from "../UI/Trending";
import Pagin from "../Components/Pagination";
import { getAllPost } from "../api";
import { PostProp } from "../data.type";

const ITEMS_PER_PAGE = 5;

const Category = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sampleNews, setSampleNews] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPost();
      if (data) {
        setSampleNews(data.data);
      }
    };
    fetchData();
  }, []);

  console.log(sampleNews);

  const filterCategory = categories.filter(
    (category) => category.name.toLowerCase() === id?.toLowerCase()
  );

  const filterNews = sampleNews.filter(
    (newsItem) => newsItem.category.toLowerCase() === id?.toLowerCase()
  );

  const totalPages = Math.ceil(filterNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filterNews.slice(
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
          {filterNews[0] && (
            <ImageCard
              author={filterNews[0].author}
              category={filterNews[0].category}
              created_at={filterNews[0].created_at}
              image={filterNews[0].image}
              title={filterNews[0].title}
              height="350px"
              width="100%"
            />
          )}
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              {filterNews[1] && (
                <ImageCard
                  author={filterNews[1].author}
                  category={filterNews[1].category}
                  created_at={filterNews[1].created_at}
                  image={filterNews[1].image}
                  title={filterNews[1].title}
                  height="220px"
                />
              )}
            </div>
            <div className="col-span-12">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex gap-3 overflow-scroll justify-center md:overflow-hidden w-full "
              >
                {filterNews[2] && (
                  <ImageCard
                    author={filterNews[2].author}
                    category={filterNews[2].category}
                    created_at={filterNews[2].created_at}
                    image={filterNews[2].image}
                    title={filterNews[2].title}
                    height="220px"
                  />
                )}
                {filterNews[3] && (
                  <ImageCard
                    author={filterNews[3].author}
                    category={filterNews[3].category}
                    created_at={filterNews[3].created_at}
                    image={filterNews[3].image}
                    title={filterNews[3].title}
                    height="220px"
                  />
                )}
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
              <NewsCard data={news} />
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
