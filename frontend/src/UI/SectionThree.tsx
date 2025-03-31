import { Link } from "react-router-dom";
import CardFour from "../Components/CardFour";
import { PostProp } from "../data.type";

interface SectionThreeProps {
  data: PostProp[]; // Expecting an array of PostProp
}

const SectionThree: React.FC<SectionThreeProps> = ({ data }) => {
  console.log("SectionThree Data:", data);

  // If data is empty, return an empty message
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No posts available for this category</p>;
  }

  return (
    <div>
      <div className="section_three_head">
        <b className="fnt text-light">{data[0]?.category}</b>
      </div>
      <div>
        <div className="mt-7">
          <CardFour data={data} />
        </div>
      </div>
      {data.slice(1, 4).map((res) => (
        <div key={res.id} className="mt-3 pt-3 section_three_content">
          <Link to={`/news/${res.title}`} className="fnt lnk">
            {res.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SectionThree;
