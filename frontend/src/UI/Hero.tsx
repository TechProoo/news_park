import { motion } from "framer-motion";
import { Calendar, Eye } from "lucide-react";
import CardOne from "../Components/CardOne";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { PostProp } from "../data.type";
import { getAllPost } from "../api";

const Hero = () => {
  const [news, setNews] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllPost();
        if (res?.data) {
          setNews(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch news:", error);
      }
    };

    fetchData();
  }, []); // ✅ Ensures API call runs only once on mount

  // ✅ Get a random news item (avoid errors if news array is empty)
  const randomNews = news.length
    ? news[Math.floor(Math.random() * news.length)]
    : null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="hero_cover"
    >
      <div className="md:w-10/12 pt-40 md:pl-10 pl-5 m-auto">
        <div className="flex justify-between items-center">
          {randomNews && (
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
                <div className="flex items-center py-2 md:px-3 px-1 rounded text-center hero_category_cover">
                  <b className="fnt text-white">{randomNews.category}</b>
                </div>
                <div className="flex gap-1 items-center">
                  <Calendar className="text-white" size={15} />
                  <span className="text-white fnt text-sm">
                    {new Date(randomNews.created_at).toLocaleDateString()}
                  </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="hero_left_middle mt-5 mb-5"
              >
                <Link
                  to={`/news/${randomNews.title}`}
                  className="w-11/12 line-clamp-3 fnt lnk text-3xl md:text-5xl text-white"
                >
                  {randomNews.title}
                </Link>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="hero_left_bottom mt-5"
              >
                <div className="flex gap-3 items-center mt-7">
                  <motion.p
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-10 w-10 flex items-center justify-center rounded-full bg-gray-800 text-white font-bold text-lg"
                  >
                    {randomNews.author
                      ? randomNews.author.charAt(0).toUpperCase()
                      : "A"}
                  </motion.p>

                  <div className="flex hero_icons_cover gap-3 items-center text-white">
                    <p className="text-gray-500">
                      By{" "}
                      <b className="text-white">
                        {randomNews.author || "Admin"}
                      </b>
                    </p>
                    <div className="hero_icons flex items-center gap-1">
                      <Eye size={15} className="text-gray-500" />
                      <b className="text-sm">{randomNews.views || 0}</b>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="hero_bottom p-3"
        >
          <div className="flex items-center gap-3">
            {news.slice(3, 5).map((item) => (
              <CardOne key={item.id} data={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
