import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
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

  const handleSearch = () => {
    if (searchQuery.trim() === "") return;
    navigate(`/search/${searchQuery}`);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <Transition
      show={isOpen}
      as="div"
      className="fixed inset-0 flex items-center justify-center z-50"
    >
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center z-50"
      >
        <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

        <div className="relative bg-white rounded-2xl shadow-xl max-w-lg w-full p-5 z-50">
          <div className="flex items-center justify-between border-b border-gray-300 pb-2">
            <div className="flex items-center gap-2 w-full">
              <Search className="text-gray-500" size={20} />
              <input
                type="text"
                className="w-full outline-none text-lg text-gray-700"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                autoFocus
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-gray-200"
            >
              <X size={20} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SearchModal;
