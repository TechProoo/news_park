import { Calendar } from "lucide-react";
import Image from "../assets/dark.jpg";

interface cardTwoProp {
  category: string;
  date: string;
  title: string;
}

const CardTwo: React.FC<cardTwoProp> = ({ category, date, title }) => {
  return (
    <div className="card_two_cover  border-b pb-3 border-gray-300">
      <div className="flex items-center gap-4">
        <div className="card_two_img rounded-md">
          <img src={Image} className="rounded-md" alt="" />
        </div>
        <div className="card_two_content">
          <div className="card_two_upper flex gap-2">
            <small className="card_two_category px-2 py-1 font-black  rounded-md">
              {category}
            </small>
            <div className="flex gap-1 card_two_date items-center">
              <Calendar className="text-gray-300" size={10} />
              <small className=" fnt text-xsm text-gray-300">{date}</small>
            </div>
          </div>
          <div className="card_two_content mt-2">
            <h1 className="fnt lnk card_two_head text-xs md:w-8/12">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTwo;
