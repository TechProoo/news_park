import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { PostProp } from "../data.type";
import { imageMod } from "./ImageCard";

interface CardOneProps {
  data: PostProp;
}

const CardOne: React.FC<CardOneProps> = ({ data }) => {
  return (
    <div className="card_One  border-r border-gray-500 pr-3">
      <div className="flex items-center gap-2">
        <div className="card_one_image md:w-16 md:h-16 overflow-hidden rounded-md">
          <img
            src={imageMod(data.image)}
            className="w-full h-full object-cover"
            alt={data.title}
          />
        </div>

        <div className="flex flex-col">
          <div className="flex gap-1 items-center">
            <Calendar className="text-gray-500" size={12} />
            <small className="fnt text-xs text-gray-500">
              {new Date(data.created_at).toLocaleDateString()}
            </small>
          </div>

          {/* Title */}
          <Link
            to={`/news/${encodeURIComponent(e)}`}
            className="text-sm card_one_topic w-9/12 fnt mt-1 line-clamp-2"
          >
            {data.title}csqq
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
