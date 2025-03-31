import { Link } from "react-router-dom";
import { PostProp } from "../data.type"; // Ensure you import PostProp
import { imageMod } from "./ImageCard";

interface TabsProps {
  data: PostProp[];
}

const CardFour: React.FC<TabsProps> = ({ data }) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">No featured post available</p>;
  }
  // Extract first post and provide defaults for missing fields
  const { title, description, image, created_at } = data[0];

  return (
    <div className="card_four_cover pb-3">
      <div className="card_four_image">
        <img src={imageMod(image)} className="rounded-md" alt={title} />
      </div>
      <Link
        to={`/news/${encodeURIComponent(title)}`}
        className="lnk fnt mt-3 text-light"
      >
        {title}
      </Link>
      <div className="mt-1 card_four_description">
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-1 text-gray-400 text-xs">
        Published on: {new Date(created_at).toLocaleDateString()}
      </div>
    </div>
  );
};

export default CardFour;
