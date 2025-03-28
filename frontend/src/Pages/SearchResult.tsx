import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import NewsCard from "../Components/CardFive";
import DesignedBy from "../Components/DesignedBy";
import Pagin from "../Components/Pagination";
import Trending from "../UI/Trending";
import Divide from "../Components/Divider";
import NotFound from "../UI/NotFound";

const sampleNews = [
  {
    image: "/path-to-image.jpg",
    category: "News",
    title: "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description: "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "Politics",
    title: "New policies shake up the Senate’s agenda",
    author: "JANE DOE",
    date: "March 19, 2025",
    comments: 5,
    views: 2100,
    description: "Senators debate over the newly introduced policy...",
  },
  // Add more sample data as needed
];

const ITEMS_PER_PAGE = 5;

const SearchResult = () => {
  const { result } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [found, setFound] = useState(true);

  const filterCategory = sampleNews.filter((news) =>
    news.title.toLowerCase().includes(result?.toLowerCase() || "")
  );

  useEffect(() => {
    setFound(filterCategory.length > 0);
  }, [filterCategory]);

  if (!found) return <NotFound />;

  const totalPages = Math.ceil(filterCategory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filterCategory.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="w-10/12 m-auto">
      <div className="category_crumb mt-5">
        <BreadCrumb content={filterCategory[0]?.category || "Search Results"} />
      </div>
      <div className="category_topic mt-5">
        <Link to={`/news/${filterCategory[0]?.category}`} className="text-4xl fnt text-light font-semibold">
          {filterCategory[0]?.category || "Category"}
        </Link>
        <p style={{ color: "rgba(166, 0, 30, 0.48)" }}>
          {filterCategory[0]?.description || "Description not available"}
        </p>
      </div>
      <div className="mt-5 ">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-7">
            {paginatedNews.map((news, index) => (
              <div key={index} className="mt-5">
                <NewsCard {...news} />
              </div>
            ))}
          </div>
          <div className="col-span-5">
            <div className="sticky flex items-center justify-center" style={{ top: "2rem" }}>
              <DesignedBy />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <Pagin totalPages={totalPages} onPageChange={setCurrentPage} />
        </div>
      </div>
      <Divide />
      <div className="mt-5">
        <Trending />
      </div>
    </div>
  );
};

export default SearchResult;
