import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import ImageCard from "./ImageCard";
import CardTwo from "./CardTwo";

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

const Tabs: React.FC<TabsProps> = ({ data }) => {
  const categories = ["All", ...new Set(data.map((info) => info.category))];

  return (
    <div className="">
      <TabGroup>
        <div className="flex items-center gap-4 border-b pb-4">
          <h1 className="fnt text-3xl font-bold text-gray-800">
            Trending News
          </h1>
          <div className="seperator md:w-[250px] h-[2px] bg-gray-300"></div>

          <TabList className="flex gap-3 flex-wrap">
            {categories.map((category) => (
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
          {categories.map((category) => {
            const filteredInfo =
              category === "All"
                ? [...data].sort((a, b) => b.views - a.views) // Sort all news by views
                : [...data]
                    .filter((item) => item.category === category)
                    .sort((a, b) => b.views - a.views); // Sort category news by views

            return (
              <TabPanel key={category} className="mt-6">
                <div className="md:flex items-start gap-6">
                  {filteredInfo.length > 0 && (
                    <ImageCard
                      category={filteredInfo[0].category}
                      date={filteredInfo[0].date}
                      title={filteredInfo[0].title}
                      height={"350px"}
                      width={"300px"}
                    />
                  )}

                  <div className="flex flex-col gap-4">
                    {filteredInfo.slice(1, 4).map((info) => (
                      <div key={info.id} className="w-full">
                        <CardTwo
                          category={info.category}
                          date={info.date}
                          title={info.title}
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
