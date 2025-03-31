import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import BadgeInfo from "./Badge";
import { formatDateToDDMMYYYY } from "../dateFormat";

interface CardThreeProp {
  info: string;
  created_at: Date;
  author: string;
  image: string;
  title: string;
}

const BASE_URL = "http://localhost:5000";

const CardThree: React.FC<CardThreeProp> = ({
  info,
  created_at,
  author,
  title,
  image,
}) => {
  const imageUrl = image
    ? image.startsWith("http")
      ? image
      : `${BASE_URL}${image}` // Append BASE_URL for relative paths
    : "/default-image.jpg";

  return (
    <div className=" lg:w-[300px] ">
      <div className="card_three_cover ">
        <div className="card_three_img overflow-hidden lg:w-[270px] lg:h-[270px] rounded-md">
          <img style={{objectFit: "cover"}} src={imageUrl} className="rounded-md" alt={info} />
        </div>
        <div className="card_three_content lg:w-[270px] my-4">
          <div className="flex justify-between items-center">
            <BadgeInfo content={info} />
            <div className="flex gap-1 card_two_date items-center">
              <Calendar className="text-gray-400" size={10} />
              <small className="fnt text-xsm text-gray-400">
                {formatDateToDDMMYYYY(created_at)}
              </small>
            </div>
          </div>
          <div className="mt-3">
            <Link
              to={`/news/${info.replace(/\s+/g, "-").toLowerCase()}`}
              className="text-light text-md lnk line-clamp-3 fnt font-bold "
            >
              {title}
            </Link>
          </div>
          <div className="mt-2">
            <small className="">
              By <span>{author}</span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardThree;
