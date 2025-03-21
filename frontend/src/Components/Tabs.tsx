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
    <div>
      <TabGroup>
        <div className="flex gap-4 items-center">
          <h1 className="fnt text-2xl">Trending News</h1>
          <div className="seperator md:w-[250px]"></div>

          <TabList className="flex gap-3 flex-wrap">
            {categories.map((category) => (
              <Tab key={category}>
                {({ selected }) => (
                  <span
                    className={`rounded ${selected ? "fnt lnk" : "text-sm"}`}
                  >
                    {category}
                  </span>
                )}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* ✅ Generate TabPanels dynamically based on categories */}
        <TabPanels>
          {categories.map((category) => {
            const filteredInfo =
              category === "All"
                ? [...data].sort((a, b) => b.views - a.views) // Sort all news by views
                : [...data]
                    .filter((item) => item.category === category)
                    .sort((a, b) => b.views - a.views); // Sort category news by views

            return (
              <TabPanel key={category}>
                <div className="mt-4 md:flex items-center gap-5">
                  {filteredInfo.length > 0 && (
                    <ImageCard
                      category={filteredInfo[0].category}
                      date={filteredInfo[0].date}
                      title={filteredInfo[0].title}
                      height={"350px"}
                      width={"300px"}
                    />
                  )}

                  <div className="flex flex-col">
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
