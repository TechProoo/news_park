import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import BadgeInfo from "./Badge";
import { Link } from "react-router-dom";
import { PostProp } from "../data.type";
import { imageMod } from "./ImageCard";

interface NewsCardProps {
  data: PostProp;
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  if (!data) return null; // Prevents crashes if data is undefined

  const formattedDate = new Date(data.created_at).toLocaleDateString();

  return (
    <motion.div
      style={{ backgroundColor: "#edfdf4" }}
      className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative w-full md:w-5/9">
        <img
          src={imageMod(data.image)} // ✅ Use the actual image from API
          alt={data.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2">
          <BadgeInfo content={data.category} />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 md:w-2/3 flex flex-col justify-between">
        <Link
          to={`/news/${encodeURIComponent(data.title)}`}
          className="text-lg font-bold fnt lnk text-light"
        >
          {data.title}
        </Link>
        <p className="text-xs text-gray-600 mt-3">
          <span className="font-bold text-red-300">{data.author}</span> •{" "}
          {formattedDate}
        </p>
        <p className="text-gray-700 text-sm mt-2 line-clamp-2 mt-3">
          {data.description}
        </p>

        <div className="mt-3 flex items-center justify-between">
          <Link
            to={`/news/${data.title}`}
            className="border text-light border-gray-400 px-4 py-2 text-xs font-semibold hover:bg-red-200 hover:text-white transition rounded"
          >
            READ MORE
          </Link>

          <div className="flex items-center space-x-3 text-gray-500 text-xs">
            <div className="flex items-center space-x-1">
              <Eye size={16} /> <span>{data.views || 0}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsCard;
