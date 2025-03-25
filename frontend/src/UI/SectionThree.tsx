import { Link } from "react-router-dom";
import CardFour from "../Components/CardFour";

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

const SectionThree: React.FC<TabsProps> = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="section_three_head ">
        <b className="fnt text-light">{data[0].category}</b>
      </div>
      <div>
        <div className="mt-7">
          <CardFour data={data} />
        </div>
      </div>
      {data.slice(1, 4).map((res) => (
        <div className="mt-3 pt-3 section_three_content">
          <Link to={`/news/${res.title}`} className="fnt lnk">
            {res.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SectionThree;
