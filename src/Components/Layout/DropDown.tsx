import { useNavigate } from "react-router-dom";
import styles from "../../Styles/styles";

const DropDown = ({ categoriesData, setDropDown }: any) => {
  const navigate = useNavigate();
    const handleSubmit = (i: any) => {
      navigate(`/products?category=${i.title}`);
      setDropDown(false);
      window.location.reload();
    };
  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-lg  ">
      {categoriesData &&
        categoriesData.map((i: any, index: any) => 
       (   <div
        key={index}
        className={`${styles.noramlFlex}`}
        onClick={() => {
          handleSubmit(i);
        }}
      >
        <img
          src={i.image_Url}
          alt=""
          style={{
            width: "25px",
            height: "25px",
            objectFit: "contain",
            marginLeft: "10px",
            userSelect: "none",
          }}
        />
        <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
      </div>)
        )}
    </div>
  );
};

export default DropDown;
