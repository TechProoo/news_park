import { useEffect, useState } from "react";
import { Search, X, Clock, Command } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";

const SearchModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [tags, setTags] = useState(["Breaking", "Sports", "Politics"]);
  const [recentSearches, setRecentSearches] = useState([
    { name: "Bitcoin Price Surge", count: 1200 },
    { name: "New Government Policies", count: 980 },
    { name: "Champions League Highlights", count: 750 },
  ]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [setIsOpen]);

  return (
    <div className="flex items-center justify-center">
      <Transition show={isOpen} as={"div"}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

          {/* Centered Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-5 z-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Search className="text-gray-500" size={20} />
                <input
                  type="text"
                  className="w-full outline-none text-lg"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Selected Tags */}
            <div className="mt-3 flex gap-2 flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 text-sm rounded-lg cursor-pointer"
                >
                  {tag} ✕
                </span>
              ))}
              <button className="text-blue-600 text-sm">+ Add New</button>
            </div>

            {/* Recent Searches */}
            <div className="mt-4">
              <p className="text-gray-600 text-sm mb-2">Recent</p>
              {recentSearches.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <div className="flex gap-2 items-center">
                    <Clock size={18} className="text-gray-500" />
                    <span>{item.name}</span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {item.count} views
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="mt-4 border-t pt-3">
              <p className="text-gray-600 text-sm mb-2">Quick Actions</p>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span>Latest Headlines</span>
                <Command size={14} className="text-gray-500" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span>Trending Stories</span>
                <Command size={14} className="text-gray-500" />
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                <span>Politics News</span>
                <Command size={14} className="text-gray-500" />
              </div>
            </div>

            {/* Footer */}
            <div className="mt-3 flex justify-between text-gray-400 text-xs">
              <span>↑ ↓ Move</span>
              <span>Enter Select</span>
              <span>ESC Quit</span>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchModal;
