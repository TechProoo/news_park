import BadgeInfo from "../Components/Badge";
import Tabs from "../Components/Tabs";
import newsData from "../Data/trending";
import Weather from "./Weather";

const Trending = () => {
  return (
    <div className="trending_cover mt-10">
      <div className=" p-3 md:p-2 ">
        <div className="grid md:grid-cols-12 grid-cols-12 gap-3 items-center">
          <div className="md:col-span-9 col-span-12">
            <div className="trending_header">
              <Tabs data={newsData} />
            </div>
          </div>
          <div className="md:col-span-3 col-span-12">
          <div className="border-b">
              <BadgeInfo content="Weather" />
              <div className="mt-3">
                <Weather />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
