import Divide from "../Components/Divider";
import Hero from "../UI/Hero";
import News from "../UI/Section";
import SectionThree from "../UI/SectionThree";
import SectionTwo from "../UI/SectionTwo";
import Trending from "../UI/Trending";
import { useEffect, useState } from "react";
import { getAllPost } from "../api";
import { PostProp } from "../data.type";

const Home = () => {
  const [newData, setNewsData] = useState<PostProp[]>([]);
  const [loading, setLoading] = useState(true); // Default to true

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPost();
        if (Array.isArray(data.data)) {
          setNewsData(data.data);
        } else {
          console.error("Fetched data is not an array:", data.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredData = (cat: string) => {
    if (!newData || !Array.isArray(newData)) return []; // Ensure `newData` is an array
    return newData.filter((item) => item.category === cat);
  };

  return (
    <div className="pb-10">
      <Hero />
      <div className="w-11/12 m-auto">
        <Trending />
        <Divide />

        {loading ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : (
          <>
            <News cat="News" />
            <Divide />
            <News cat="Politics" space={3} />
            <Divide />
            <SectionTwo cat="Tech" />
            <Divide />
            <SectionTwo cat="Sports" />
            <Divide />
            <div className="md:flex items-center gap-5 md:gap-10">
              <SectionThree data={filteredData("Travel")} />
              <SectionThree data={filteredData("Lifestyle")} />
              <SectionThree data={filteredData("Health")} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
