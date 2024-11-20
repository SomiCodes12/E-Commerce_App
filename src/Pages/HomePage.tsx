import BestDeals from "../Components/Layout/BestDeals"
import Categories from "../Components/Layout/Categories"
import Header from "../Components/Layout/Header"
import Hero from "../Components/Layout/Hero"

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
    </div>
  )
}

export default HomePage