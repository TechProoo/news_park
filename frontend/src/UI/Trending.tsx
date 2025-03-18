import Tabs from "../Components/Tabs";
import newsData from "../Data/trending";

const Trending = () => {
  return (
    <div className="trending_cover mt-10">
      <div className="md:w-10/12 p-3 md:p-2 m-auto">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-9">
            <div className="trending_header">
              <Tabs data={newsData} />
            </div>
          </div>
          <div className="col-span-3">ss</div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
