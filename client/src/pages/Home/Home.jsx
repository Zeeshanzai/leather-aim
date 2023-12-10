import Hero from "./Hero";
import HorizontalScroller from "./HorizontalScroller";
import CategoriesSection from "./CategoriesSection";

const Home = () => {
  
  return (
    <>
    <Hero />
    <HorizontalScroller category={'Leather Bags'}/>
    <CategoriesSection />
    <HorizontalScroller category={'Others'}/>
    <HorizontalScroller category = {'Deals and Discounts'}/>
    
    {/* <SearchBar /> */}
    </>
  );
}
 
export default Home;