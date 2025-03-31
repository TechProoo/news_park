import { motion } from "framer-motion";
import { Calendar, Eye } from "lucide-react";
import Trending from "../UI/Trending";
import Divide from "../Components/Divider";
import ClickableChips from "../Components/Chip";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAllPost, incrementPost } from "../api";
import { PostProp } from "../data.type";
import { imageMod } from "../Components/ImageCard";

const tags = ["Fashion", "Action"];

const NewsContent = () => {
  const { content } = useParams();
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

  const filterNews = sampleNews.filter(
    (newsItem) => newsItem.title.toLowerCase() === content?.toLowerCase()
  );

  useEffect(() => {
    if (filterNews.length > 0) {
      incrementPost(filterNews[0].id);
    }
  }, [filterNews]);

  console.log(sampleNews);

  return (
    <>
      {filterNews.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="news_content_cover py-8 px-4">
            <div className="grid grid-cols-12 items-center gap-4">
              <motion.div
                className="col-span-12 md:col-span-5 text-left md:text-right px-6"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="inline-block bg-red-700 text-white rounded-xl px-3 py-1 text-sm font-bold">
                  {filterNews[0].category}
                </span>
                <h1 className="text-4xl font-bold fnt text-white mt-4 leading-tight">
                  {filterNews[0].title}
                </h1>
                <div className="mt-4 text-gray-400 text-sm">
                  <b>
                    Author -{" "}
                    <span className="text-white font-semibold">
                      {filterNews[0].author}
                    </span>
                  </b>
                </div>
                <div className="hero_icons mt-4 flex items-center justify-start gap-1 md:justify-end text-gray-300 text-sm">
                  <Eye size={15} className="text-gray-500" />
                  <b className="text-sm">{filterNews[0].views || 0}</b>
                </div>

                <div className="mt-4 flex items-center justify-start md:justify-end text-gray-300 text-sm">
                  <Calendar size={14} className="mr-2" />
                  <span>
                    {new Date(filterNews[0].created_at).toLocaleDateString()}{" "}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="col-span-12 md:col-span-7"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="news_content_img rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={imageMod(filterNews[0].image)} // Dynamically using the image from API
                    alt={filterNews[0].title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="news_content w-11/12 md:w-9/12 lg:w-7/12 mx-auto my-12 text-gray-800">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <blockquote className="italic text-lg text-gray-600 border-l-4 border-gray-400 pl-4">
                {filterNews[0].description}
              </blockquote>
            </div>
            <article className="leading-relaxed text-lg space-y-6">
              <motion.div
                key={filterNews[0].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="ql-editor" // React Quill uses this class for the editor content
                dangerouslySetInnerHTML={{ __html: filterNews[0].content }} // Display HTML content
              />
            </article>

            <div className="mt-5 flex gap-3 items-center">
              <span className="fnth">Tags: </span>{" "}
              <ClickableChips tags={tags} />
            </div>
          </div>

          <Divide />
          <motion.div
            className="w-10/12 m-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Trending />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default NewsContent;
