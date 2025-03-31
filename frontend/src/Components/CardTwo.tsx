import { Calendar } from "lucide-react";
import BadgeInfo from "./Badge";
import { imageMod } from "./ImageCard";
import { Link } from "react-router-dom";

interface cardTwoProp {
  category: string;
  date: string;
  title: string;
  image: string;
}

const CardTwo: React.FC<cardTwoProp> = ({ category, date, title, image }) => {
  return (
    <div className="card_two_cover  border-b py-3 border-gray-300">
      <div className="flex items-center gap-4">
        <div className="card_two_img rounded-md">
          <img src={imageMod(image)} className="rounded-md" alt="" />
        </div>
        <div className="card_two_content">
          <div className="card_two_upper flex gap-2">
            <BadgeInfo content={category} />
            <div className="flex gap-1 card_two_date items-center">
              <Calendar className="text-gray-300" size={10} />
              <small className=" fnt text-xsm text-gray-300">{date}</small>
            </div>
          </div>
          <div className="card_two_content mt-2">
            <Link
              to={`/news/${encodeURIComponent(title)}`}
              className="fnt lnk card_two_head text-xs md:w-8/12"
            >
              {title}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
