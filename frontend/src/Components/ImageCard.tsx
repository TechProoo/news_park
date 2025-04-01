import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { formatDateToDDMMYYYY } from "../dateFormat";

interface ImageCardProps {
  category: string;
  created_at: string | Date;
  title: string;
  author: string;
  image?: string;
  width?: string;
  height?: string;
}

const BASE_URL = "https://news-park.onrender.com";

export const imageMod = (image: string) => {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}` // Append BASE_URL for relative paths
    : "/default-image.jpg";

  return imageUrl;
};

const ImageCard: React.FC<ImageCardProps> = ({
  category,
  created_at,
  title,
  author,
  image,
  width = "100%",
  height = "300px",
}) => {
  const formattedDate = formatDateToDDMMYYYY(
    created_at instanceof Date ? created_at : new Date(created_at)
  );

  return (
    <div
      style={{
        height,
        width,
        backgroundImage: `url(${imageMod(image || "")})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#80808082",
        backgroundBlendMode: "darken",
      }}
      className="image_card_cover rounded-lg"
    >
      <div className="image_card_inner">
        <div className="image_content_top flex gap-4 items-center">
          <span className="image_card_category px-3 py-2 text-xs font-black rounded-full">
            {category}
          </span>
          <div className="flex gap-1 image_card_date items-center">
            <Calendar className="text-gray-200" size={14} />
            <small className="fnt text-xsm text-gray-200">
              {formattedDate}
            </small>
          </div>
        </div>
        <div className="mt-3">
          <Link
            to={`/news/${encodeURIComponent(title)}`}
            className="text-white lnk line-clamp-3 font-bold text-white shadow-lg"
          >
            {title}
          </Link>
        </div>
        <div className="image_author mt-2">
          <b className="text-sm fnt text-white">
            By <span>{author}</span>
          </b>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
