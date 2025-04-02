import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { PostProp } from "../data.type";
import { imageMod } from "./ImageCard";
interface CardOneProps {
  data: PostProp;
}

const CardOne: React.FC<CardOneProps> = ({ data }) => {
  return (
    <div className=" hidden md:block card_One border-r border-gray-300 pr-4">
      <div className="flex items-center gap-3">
        {/* Image Section */}
        <div className="w-20 h-20 md:w-20 md:h-20 rounded-lg overflow-hidden">
          <img
            src={imageMod(data.image)}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            alt={data.title}
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col w-full">
          {/* Date Section */}
          <div className="flex items-center gap-2 text-gray-500 text-xs">
            <Calendar size={14} />
            <span>{new Date(data.created_at).toLocaleDateString()}</span>
          </div>

          {/* Title */}
          <Link
            to={`/news/${encodeURIComponent(data.title)}`}
            className="text-sm font-semibold text-gray-800 mt-1 line-clamp-2 hover:text-red-700 transition-colors"
          >
            {data.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
