import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import NewsCard from "../Components/CardFive";
import DesignedBy from "../Components/DesignedBy";
import Pagin from "../Components/Pagination";
import Trending from "../UI/Trending";
import Divide from "../Components/Divider";
import NotFound from "../UI/NotFound";
import { getAllPost } from "../api";
import { PostProp } from "../data.type";

const ITEMS_PER_PAGE = 5;

const SearchResult = () => {
  const { result } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [found, setFound] = useState(true);
  const [sampleNews, setSampleNews] = useState<PostProp[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllPost();
      if (Array.isArray(data?.data)) {
        setSampleNews(data.data);
      } else {
        setSampleNews([]); // Ensures it's always an array
      }
    };
    fetchData();
  }, []);

  const filterCategory = sampleNews.filter((news) =>
    news.title.toLowerCase().includes(result?.toLowerCase() || "")
  );

  useEffect(() => {
    setFound(filterCategory.length > 0);
  }, [filterCategory]);

  console.log("sampleNews:", sampleNews);

  if (!found) return <NotFound />;

  const totalPages = Math.ceil(filterCategory.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = filterCategory.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="w-10/12 m-auto">
      <div className="category_crumb mt-5">
        <BreadCrumb content={filterCategory[0]?.category || "Search Results"} />
      </div>
      <div className="category_topic mt-5">
        <Link
          to={`/news/${filterCategory[0]?.category}`}
          className="text-4xl fnt text-light font-semibold"
        >
          {filterCategory[0]?.category || "Category"}
        </Link>
      </div>
      <div className="mt-5 ">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-7">
            {paginatedNews.map((news, index) => (
              <div key={index} className="mt-5">
                <NewsCard data={news} />
              </div>
            ))}
          </div>
          <div className="col-span-5">
            <div
              className="sticky flex items-center justify-center"
              style={{ top: "2rem" }}
            >
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
