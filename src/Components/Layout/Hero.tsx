import { Link } from "react-router-dom";
import styles from "../../Styles/styles";
import bg from "../../assets/A soft vintage gradient blur background with a pastel colored well use as studio room product presentation and banner _ Premium AI-generated image.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[80vh] 800px:min-h-[80px] w-full bg-no-repeat bg-cover ${styles.noramlFlex}`}
      style={{
        backgroundImage: "url(https://themes.rslahmed.dev/rafcart/assets/images/banner-2.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[55px] leading-[1.2] 800px:text-[60px] text-gray-700 font-[600] capitalize `}
        >
          Best collection for <br /> home decoration
        </h1>
        <p className="pt-5 font-[400] text-[16px]font-[Poppins]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque eum
          fuga
          <br /> maiores velit, veritatis enim distinctio iure quos in molestias
          amet fugit <br /> ducimus esse ipsa distinctio iure quos in molestias
          amet fugit ducimus esse ipsa.
        </p>
        <Link to="/products">
            <div className={`${styles.button} mt-5`}>
                <span className="text-white font-[Poppins] font-[400] text-[18px]">Shop Now</span>
            </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
