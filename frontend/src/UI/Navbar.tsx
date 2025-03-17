import { Link } from "react-router-dom";
import { categories } from "../Data/categories";
import { Search } from "lucide-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useState, useEffect } from "react";

const MySwal = withReactContent(Swal);

const Navbar = () => {
  const [searchModal, setSearchModal] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNav = (index: number) => {
    setActiveIndex(index);
  };

  const handleSearch = () => {
    setSearchModal(true);
  };

  useEffect(() => {
    if (searchModal) {
      MySwal.fire({
        title: <p></p>,
        didOpen: () => {
          MySwal.showLoading();
        },
      })
      // .then(() => {
      //   MySwal.fire(<p>Shorthand works too</p>);
      //   setSearchModal(false);
      // });
    }
  }, [searchModal]);

  return (
    <div className="nav_cover p-4 px-5">
      <nav className="nav_inner">
        <div className="md:flex justify-between hidden align-center">
          <div className="nav_logo">
            <Link to={"/"} className="nav_logo_link text-2xl ">
              News
              <span className="text_suv logo_inner text-4xl font-black uppercase ">
                Park
              </span>
            </Link>
          </div>
          <ul className="nav_links_cover flex items-center gap-4">
            {categories.map((data, index) => (
              <li
                key={index}
                onClick={() => handleNav(index)}
                className={activeIndex === index ? "activeLink" : "nav_list"}
              >
                <Link to={data.to}>{data.name}</Link>
              </li>
            ))}
          </ul>
          <div className="flex align-center gap-2 items-center">
            <div
              onClick={handleSearch}
              className="nav_search_cover flex items-center justify-center cursor-pointer"
            >
              <Search size={22} className="nav_search" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
