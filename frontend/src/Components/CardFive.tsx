import { motion } from "framer-motion";
import { Eye, MessageCircle } from "lucide-react";
import Image from "../assets/dark.jpg";
import BadgeInfo from "./Badge";
import { Link } from "react-router-dom";

interface NewsCardProps {
  image?: string;
  category: string;
  title: string;
  author: string;
  date: string;
  comments: number;
  views: number;
  description: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  category,
  title,
  author,
  date,
  comments,
  views,
  description,
}) => {
  return (
    <motion.div
    style={{backgroundColor: "#edfdf4"}}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full md:w-5/9">
        <img src={Image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2">
          <BadgeInfo content={category} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <Link to={`/news/${title}`} className="text-lg font-bold fnt lnk text-light">{title}</Link>
        <p className="text-xs text-gray-600 mt-3">
          <span className="font-bold text-red-300">{author}</span> • {date}
        </p>
        <p className="text-gray-700 text-sm mt-2 line-clamp-2 mt-3">{description}</p>

        {/* Footer Section */}
        <div className="mt-3 flex items-center justify-between">
          <button className="border text-light border-gray-400 px-4 py-2 text-xs font-semibold hover:bg-red-200 hover:text-white  transition rounded">
            READ MORE
          </button>

          <div className="flex items-center space-x-3 text-gray-500 text-xs">
            <div className="flex items-center space-x-1">
              <MessageCircle size={16} /> <span>{comments}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={16} /> <span>{views}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
