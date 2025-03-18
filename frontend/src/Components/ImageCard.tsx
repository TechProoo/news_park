import { Calendar } from "lucide-react";

interface imageCardProp {
  category: string;
  date: string;
  title: string;
}

const ImageCard: React.FC<imageCardProp> = ({ category, date, title }) => {
  return (
    <div className="image_card_cover rounded-lg md:w-[350px]">
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
          <h1 className="text-white lnk">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
