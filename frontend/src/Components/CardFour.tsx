import { Link } from "react-router-dom";
import Image from "../assets/dark.jpg";

interface TabsProps {
  data: {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    views: number;
    date: string;
  }[];
}

const CardFour: React.FC<TabsProps> = ({ data }) => {
  return (
    <div className="card_four_cover pb-3">
      <div className="card_four_image">
        <img src={Image} className="rounded-md" alt="" />
      </div>
      <Link to={`/news/${data[0].title}`} className="lnk fnt mt-3 text-light">
        {data[0].title}
      </Link>
      <div className="mt-1 card_four_description">
        <p className="text-sm">
          {data[0].description}
        </p>
      </div>
    </div>
  );
};

export default CardFour;
