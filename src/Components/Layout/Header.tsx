import { useState } from "react";
import { Link } from "react-router-dom";
import { productData  , categoriesData} from "../../static/data.jsx";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import styles from "../../Styles/styles.js";
import DropDown from "./DropDown.tsx";
import Navbar from "./Navbar.tsx";
import { CgProfile } from "react-icons/cg";

const Header = ({activeHeading} : any) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [searchData, setSearchData] = useState<any[]>([]);

  const handleSearchChange = (e: any) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((product: any) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );
    setSearchData(filteredProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <>
      <div className={`${styles.section}`}>
        <div className="flex 800px:h-[50px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img src="/react.svg" alt="" className="w-[60px] h-[60px]" />
            </Link>
          </div>
          <div className="w-[50%] relative flex items-center">
            <input
              type="text"
              placeholder="search products..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="h-[40px] w-full px-2 border-blue-400 border-[2px] rounded-md outline-none"
            />
            <AiOutlineSearch
              size={"30px"}
              className=" absolute right-2 cursor-pointer"
            />
            {searchData && searchData.length !== 0 ? (
              <div className="absolute top-[60px] min-h-[30vh] bg-slate-50 shadow-sm-2 z-9 p-4">
                {searchData &&
                  searchData.map((i) => {
                    const d = i.name;
                    const product_name = d.replace(/\s+/g, "-");

                    return (
                      <Link to={`/products/${product_name}`}>
                        <div className="w-full flex items-start py-3">
                          <h1>{i.name}</h1>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            ) : null}
          </div>
          <div className="w-[150px] bg-black rounded-xl flex justify-center items-center h-[50px] my-3 cursor-pointer">
            <Link to="/seller">
              <h3 className="flex items-center text-white ml-[2px]">
                Become a Seller <IoIosArrowForward className="mt-1" />
              </h3>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active === true ? " shadow-sm fixed top-0 left-0 z-10" : null
        } transition 800px:flex flex items-center justify-center w-full  h-[70px] bg-blue-700`}
      >
        <div
          className={`${styles.section} relative ${styles.noramlFlex} justify-between`}
        >
          <div>
            <div className="relative h-[60px] w-[270px] 1000px:block mt-[10px]"
             onClick={() => {
              setDropDown(!dropDown)
            }}>
              {" "}
              <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
              <button
                className={`h-[100%] w-full flex justify-between items-center pl-10 font-sans text-lg font-[500] select-none rounded-t-md  bg-white`}
              >
                All categories
              </button>
              <IoIosArrowDown
                size={20}
                className="absolute right-2 top-4 cursor-pointer"
               
              />
              {dropDown ? (
                <DropDown
                  categoriesData={categoriesData}
                  setDropDown={setDropDown}
                />
              ) : null}
           
            </div>
          </div>{" "}
          <div className={styles.noramlFlex}>
                <Navbar active={activeHeading}/>
              </div>
              <div className={`${styles.noramlFlex} `}>
                <div className="relative cursor-pointer mr-[15px]">
                  <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)"/>
                  <span className="absolute right-0 top-0 rounded-full bg-blue-500 p-0 m-0 text-white text-[12px] leading-tight text-center">0</span>
                </div>
                <div className="relative cursor-pointer mr-[15px]">
                  <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)"/>
                  <span className="absolute right-0 top-0 rounded-full bg-blue-500 p-0 m-0 text-white text-[12px] leading-tight text-center">1</span>
                </div>
                <div className="relative cursor-pointer mr-[15px]">
                    <Link to="/login">
                  <CgProfile size={30} color="rgb(255 255 255 / 83%)"/>
                  </Link>
                </div>
              </div>
        </div>
      </div>
    </>
  );
};

export default Header;
