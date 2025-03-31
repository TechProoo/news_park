import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import CardThree from "../Components/CardThree";
import { getAllPost } from "../api";
import { PostProp } from "../data.type";

interface SectionTwoProp {
  cat: string;
}

const SectionTwo: React.FC<SectionTwoProp> = ({ cat }) => {
  const [articles, setArticles] = useState<PostProp[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getAllPost();
        if (Array.isArray(res.data)) {
          let filteredArticles = res.data
            .filter(
              (post: PostProp) =>
                post.category.toLowerCase() === cat.toLowerCase()
            )
            .sort(
              (a: any, b: any) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .slice(0, 4); // Get latest 4

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
  }, [cat]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="news_head">
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1 }}
          className="fnt text-2xl text-light font-black"
        >
          {cat}
        </motion.h1>
        <div className="seperator md:w-full mt-2 opacity-50"></div>
      </div>

      {loading ? (
        <p className="text-gray-500 text-center mt-10">Loading posts...</p>
      ) : articles.length > 0 ? (
        <div className="mt-10 grid grid-cols-12 gap-5 justify-center">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="md:col-span-3 col-span-6"
            >
              <CardThree
                info={article.category}
                title={article.title}
                created_at={article.created_at}
                author={article.author}
                image={article.image}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-10">
          No articles found in {cat}.
        </p>
      )}
    </motion.div>
  );
};

export default SectionTwo;
