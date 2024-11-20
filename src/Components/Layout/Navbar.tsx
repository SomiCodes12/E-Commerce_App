import { Link } from "react-router-dom"
import styles from "../../Styles/styles"
import { navItems } from "../../static/data.jsx"

const Navbar = ({active} : any) => {
  return (
    <div className={`${styles.noramlFlex}`}>
        {
            navItems && navItems.map((i : any , index : any) => (
                <div className="flex">
                    <Link to={i.url} className={`${active === index + 1 ? "text-black" : "text-white"} font-[500] px-6 cursor-pointer`}>{i.title}</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Navbar