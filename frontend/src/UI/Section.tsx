import { motion } from "framer-motion";
import ImageCard from "../Components/ImageCard";

interface SectionProps {
  cat: string;
  space?: number;
}

const News: React.FC<SectionProps> = ({ cat, space = 3 }) => {
  // Ensure space is within a valid range (1 to 12)
  const columnSpan = Math.min(Math.max(space, 1), 12);

  // Example data (Replace with dynamic data if needed)
  let articles = [
    {
      category: "Business",
      date: "March 21, 2021",
      title: "Climate changes in recent prospective",
    },
    {
      category: "Tech",
      date: "March 22, 2021",
      title: "AI's impact on global markets",
    },
    {
      category: "Health",
      date: "March 23, 2021",
      title: "Wellness trends for 2025",
    },
    {
      category: "Finance",
      date: "March 24, 2021",
      title: "Stock market predictions",
    },
    {
      category: "Sports",
      date: "March 25, 2021",
      title: "Upcoming Olympic games",
    },
  ];

  // If space is 4, limit articles to 4 items
  if (columnSpan === 4) {
    articles = articles.slice(0, 3);
  } else {
    articles = articles.slice(0, 4);
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="news_cover"
    >
      <div className="p-3 md:p-2">
        {/* Header */}
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="news_head"
        >
          <h1 className="fnt text-2xl text-light font-black">{cat}</h1>
          <div className="seperator md:w-full mt-2 opacity-50"></div>
        </motion.div>

        {/* Body */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="news_body mt-10"
        >
          <div className="grid grid-cols-12 gap-3 w-full">
            {articles.map((article, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`md:col-span-${columnSpan} col-span-12`}
              >
                <ImageCard {...article} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default News;
