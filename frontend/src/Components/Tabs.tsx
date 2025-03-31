import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ImageCard from "./ImageCard";
import CardTwo from "./CardTwo";
import { PostProp } from "../data.type";

interface TabsProps {
  data: PostProp[];
}

const Tabs: React.FC<TabsProps> = ({ data = [] }) => {
  console.log("Tabs received data:", data);

  if (!Array.isArray(data)) {
    console.error("Tabs expected an array but received:", data);
    return <p className="text-red-500">Error: Data is not available</p>;
  }

  const uniqueCategories = [...new Set(data.map((info) => info.category))];

  // Shuffle categories randomly
  const shuffledCategories = uniqueCategories.sort(() => Math.random() - 0.5);

  // Pick 4 random categories and prepend "All"
  const displayedCategories = ["All", ...shuffledCategories.slice(0, 4)];

  return (
    <div>
      <TabGroup>
        <div className="flex items-center gap-4 border-b pb-4">
          <h1 className="fnt text-3xl font-bold text-gray-800">
            Trending News
          </h1>
          <div className="seperator md:w-[250px] h-[2px] bg-gray-300"></div>

          <TabList className="flex gap-3 flex-wrap">
            {displayedCategories.map((category) => (
              <Tab key={category}>
                {({ selected }) => (
                  <span
                    className={`rounded px-4 text-light fnt py-2 cursor-pointer transition-all duration-300 ${
                      selected
                        ? "bg-red-300 text-white font-semibold"
                        : "text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </span>
                )}
              </Tab>
            ))}
          </TabList>
        </div>

        <TabPanels>
          {displayedCategories.map((category) => {
            const filteredInfo =
              category === "All"
                ? [...data].sort((a, b) => b.views - a.views) // Sort all posts by views
                : [...data]
                    .filter((item) => item.category === category)
                    .sort((a, b) => b.views - a.views);

            return (
              <TabPanel key={category} className="mt-6">
                <div className="md:flex items-start gap-6">
                  {filteredInfo.length > 0 && (
                    <ImageCard
                      author={filteredInfo[0].author}
                      category={filteredInfo[0].category}
                      created_at={filteredInfo[0].created_at}
                      image={filteredInfo[0].image}
                      title={filteredInfo[0].title}
                      height="350px"
                      width="300px"
                    />
                  )}

                  <div className="flex flex-col gap-4">
                    {filteredInfo.slice(1, 4).map((info) => (
                      <div key={info.id} className="w-full">
                        <CardTwo
                          category={info.category}
                          date={new Date(info.created_at).toLocaleDateString()}
                          title={info.title}
                          image={info.image}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Tabs;
