import { motion } from "framer-motion";
import ImageCard from "../Components/ImageCard";
import { useEffect, useState } from "react";
import { getAllPost } from "../api";
import { PostProp } from "../data.type";

interface SectionProps {
  cat: string;
  space?: number;
}

const News: React.FC<SectionProps> = ({ cat, space = 3 }) => {
  const [articles, setArticles] = useState<PostProp[]>([]);
  const [loading, setLoading] = useState(false);
  const columnSpan = Math.min(Math.max(space, 1), 12);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllPost();
        if (Array.isArray(res.data)) {
          let filteredArticles = [];

          if (cat === "News") {
            // Sort by created_at (assuming it's a valid timestamp)
            filteredArticles = res.data
              .sort(
                (a: PostProp, b: PostProp) =>
                  new Date(b.created_at).getTime() -
                  new Date(a.created_at).getTime()
              )
              .slice(0, 4); // Get latest 4
          } else {
            filteredArticles = res.data.filter(
              (post: PostProp) =>
                post.category.toLowerCase() === cat.toLowerCase()
            );
          }

          setArticles(filteredArticles);
        } else {
          console.error("Invalid data format:", res.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cat]); // Depend on `cat` so it updates when the category changes.
  // Depend on `cat` to fetch data when it changes.

  const displayedArticles = articles.slice(0, columnSpan === 4 ? 3 : 4);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="news_cover"
    >
      <div className="p-3 md:p-2">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="news_head"
        >
          <h1 className="fnt text-2xl text-light font-black">{cat}</h1>
          <div className="seperator md:w-full mt-2 opacity-50"></div>
        </motion.div>

        {loading && (
          <p className="text-gray-500 text-center">Loading posts...</p>
        )}

        {!loading && displayedArticles.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="news_body mt-10"
          >
            <div className="grid grid-cols-12 gap-3 w-full">
              {displayedArticles.map((article) => (
                <motion.div
                  key={article.id}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`md:col-span-${columnSpan} col-span-12`}
                >
                  <ImageCard
                    category={article.category}
                    created_at={article.created_at}
                    title={article.title}
                    author={article.author}
                    image={article.image}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          !loading && (
            <p className="text-gray-500 text-center">
              No articles found in {cat}.
            </p>
          )
        )}
      </div>
    </motion.div>
  );
};

export default News;
