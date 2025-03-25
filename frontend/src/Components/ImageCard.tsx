import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface imageCardProp {
  category: string;
  date: string;
  title: string;
  width?: string;
  height?: string;
}

const ImageCard: React.FC<imageCardProp> = ({
  category,
  date,
  title,
  width = "100%",
  height = "300px",
}) => {
  return (
    <div
      style={{ height: `${height}`, width: `${width}` }}
      className={`image_card_cover rounded-lg `}
    >
      <div className="image_card_inner">
        <div className="image_content_top flex gap-4 items-center">
          <span className="image_card_category px-3 py-2 text-xs font-black  rounded-full">
            {category}
          </span>
          <div className="flex gap-1 image_card_date items-center">
            <Calendar className="text-gray-200" size={10} />
            <small className=" fnt text-xsm text-gray-200">{date}</small>
          </div>
        </div>
        <div className="mt-3">
          <Link to={`/news/${title}`} className="text-white lnk">
            {title}
          </Link>
        </div>
        <div className="image_author mt-2">
          <b className="text-sm fnt text-white">
            By <span>Tech Pro</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
