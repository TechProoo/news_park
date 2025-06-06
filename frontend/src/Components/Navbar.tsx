import { Link } from "react-router-dom";
import { categories } from "../Data/categories";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchModal from "../UI/SearchModal";
import TemporaryDrawer from "./Drawer";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNav = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="nav_cover p-4 px-5">
      <nav className="nav_inner">
        {/* Desktop Navbar */}
        <div className="md:flex justify-between hidden align-center">
          <div className="nav_logo">
            <Link to={"/"} className="nav_logo_link text-2xl">
              News
              <span className="text_suv logo_inner text-4xl font-black uppercase">
                Park
              </span>
            </Link>
          </div>
          <ul className="nav_links_cover flex items-center gap-4">
            {categories.map((data, index) => (
              <Link
                to={data.to}
                key={index}
                onClick={() => handleNav(index)}
                className={activeIndex === index ? "activeLink" : "nav_list"}
              >
                <Link to={data.to}>{data.name}</Link>
              </Link>
            ))}
          </ul>
          <div className="flex align-center gap-2 items-center">
            <div
              onClick={() => setIsSearchOpen(true)}
              className="nav_search_cover flex items-center justify-center cursor-pointer"
            >
              <Search size={22} className="nav_search" />
            </div>
          </div>
        </div>

        {/* Mobile Navbar (Drawer) */}
        <div className="md:hidden flex justify-between items-center">
          <TemporaryDrawer />
          <div className="nav_logo">
            <Link to={"/"} className="nav_logo_link text-2xl">
              News
              <span className="text_suv logo_inner text-4xl font-black uppercase">
                Park
              </span>
            </Link>
          </div>
          <div
            onClick={() => setIsSearchOpen(true)}
            className="nav_search_cover flex items-center justify-center cursor-pointer"
          >
            <Search size={22} className="nav_search" />
          </div>
        </div>
      </nav>

      {/* Search Modal */}
      <div className="flex items-center md:p-0 p-4">
        <SearchModal isOpen={isSearchOpen} setIsOpen={setIsSearchOpen} />
      </div>
    </div>
  );
};

export default Navbar;
