import { useEffect, useState } from "react";
import { Search, X, Clock } from "lucide-react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const SearchModal = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [recentSearches, setRecentSearches] = useState<
    { name: string; count: number }[]
  >([]);

  const navigate = useNavigate();

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

  const addRecent = () => {
    if (searchQuery.trim() === "") return;

    // Check if search already exists, update count
    setRecentSearches((prev) => {
      const existing = prev.find((item) => item.name === searchQuery);
      if (existing) {
        return prev.map((item) =>
          item.name === searchQuery ? { ...item, count: item.count + 1 } : item
        );
      }
    navigate(`/search/${searchQuery}`)  
      return [...prev, { name: searchQuery, count: 1 }];
    });

    setSearchQuery("");
  };

  return (
    <div className="flex items-center justify-center">
      <Transition show={isOpen} as={"div"}>
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="fixed inset-0 bg-black/50" aria-hidden="true"></div>

          <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-5 z-50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 w-full">
                <Search className="text-gray-500" size={20} />
                <input
                  type="text"
                  className="w-full outline-none text-lg text-light"
                  placeholder="Search news..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addRecent()}
                />
              </div>
              <button onClick={() => setIsOpen(false)}>
                <X size={20} className="text-gray-500 hover:text-gray-700" />
              </button>
            </div>

            {/* Recent Searches */}
            <div className="mt-4">
              {recentSearches.length > 0 && (
                <>
                  <p className="text-gray-600 text-sm mb-2">Recent</p>
                  {recentSearches.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    >
                      <div className="flex gap-2 items-center">
                        <Clock size={18} className="text-gray-500" />
                        <span className="text-light">{item.name}</span>
                      </div>
                      <span className="text-gray-500 text-sm">
                        {item.count} views
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchModal;
