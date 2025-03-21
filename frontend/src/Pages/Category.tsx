import { useState } from "react";
import { useParams } from "react-router-dom";
import ImageCard from "../Components/ImageCard";
import BreadCrumb from "../Components/BreadCrumb";
import { categories } from "../Data/categories";
import NewsCard from "../Components/CardFive";
import DesignedBy from "../Components/DesignedBy";
import Divide from "../Components/Divider";
import Trending from "../UI/Trending";
import Pagin from "../Components/Pagination";

const sampleNews = [
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  {
    image: "/path-to-image.jpg",
    category: "News",
    title:
      "Ex-lawmaker supports Tinubu’s state of emergency declaration in Rivers",
    author: "BAYO MILLZ",
    date: "March 18, 2025",
    comments: 0,
    views: 1400,
    description:
      "Sir Jude Idimogu, a former two-term Lagos State House of Assembly member, has commended President Bola Tinubu for declaring a...",
  },
  // Add more sample news objects...
];

const ITEMS_PER_PAGE = 5; // Adjust how many items per page

const Category = () => {
  const { id } = useParams();
  const [currentPage, setCurrentPage] = useState(1);

  const filterCategory = categories.filter(
    (category) => category.name.toLowerCase() === id
  );

  const totalPages = Math.ceil(sampleNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedNews = sampleNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <div className="category_section mt-10 w-10/12 m-auto pb-10">
      <div className="grid grid-cols-12 gap-3">
        <div className="md:col-span-6 col-span-12">
          <ImageCard
            category="Health"
            date="March 23, 2021"
            title="Wellness trends for 2025"
            height="450px"
          />
        </div>
        <div className="md:col-span-6 col-span-12">
          <div className="grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <ImageCard
                category="Health"
                date="March 23, 2021"
                title="Wellness trends for 2025"
                height="220px"
              />
            </div>
            <div className="col-span-12">
              <div className="md:flex gap-3 overflow-scroll md:overflow-hidden md:w-full w-[300px]">
                <ImageCard
                  category="Health"
                  date="March 23, 2021"
                  title="Wellness trends for 2025"
                  height="220px"
                />
                <ImageCard
                  category="Health"
                  date="March 23, 2021"
                  title="Wellness trends for 2025"
                  height="220px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="category_crumb mt-5">
        <BreadCrumb content={filterCategory[0]?.name || "Category"} />
      </div>
      <div className="category_topic mt-5">
        <h1 className="text-4xl fnt text-light font-semibold">
          {filterCategory[0]?.name || "Category"}
        </h1>
        <p style={{ color: "rgba(166, 0, 30, 0.48)" }}>
          {filterCategory[0]?.description || "Description not available"}
        </p>
      </div>

      <div className="mt-5">
        <div className="grid grid-cols-12 justify-between">
          <div className="col-span-7">
            {paginatedNews.map((news, index) => (
              <div key={index} className="mt-5">
                <NewsCard {...news} />
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

export default Category;
