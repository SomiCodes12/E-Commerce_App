import { Link } from "react-router-dom";
import { useState } from "react";

const ProductCard = ({ data, key }: any) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);

  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  return (
    <>
      <div
        className={`w-full h-[370px] bg-white shadow-lg p-3 relative cursor-pointer`}
      >
        <div className="flex justify-end"></div>
        <Link to={`/product/${product_name}`}>
          <img
            src={data.image_Url[0].url}
            alt=""
            className={`w-full h-[170px] object-contain`}
          />
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
