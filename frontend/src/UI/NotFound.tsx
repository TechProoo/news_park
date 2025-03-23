import React from "react";
import Trending from "./Trending";

const NotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center text-gray-500 mt-10">
        <div className="  shadow-lg rounded-xl md:p-8 p-5">
          <h2 className="text-3xl font-bold text-gray-700">No results found</h2>
          <p className="mt-2 text-lg">Try searching for something else.</p>

          <div className="mt-12 border-t border-gray-300 pt-8">
            <h3 className="text-2xl font-semibold text-gray-700">
              Explore our latest news
            </h3>
            <Trending />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
