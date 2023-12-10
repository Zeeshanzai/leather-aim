import SearchBar from '../../components/SearchBar';
import image from "../../assets/images/next.jpg"
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <>
    <img src={image}/>
     <section className="bg-cover bg-center" style={{ backgroundImage: "url('../../assets/images/next.jpg')" }}>
        <div className=" relative md:w-5/6 lg:w-2/3 max-w-7xl pt-8 md:pt-16 pb-8 px-8 mx-auto ">
          <div className='flex flex-col-reverse gap-5 md:gap-0 md:flex-row justify-between items-end md:items-start md:pt-8' >
            <div className=" md:w-2/3 md:max-w-3xl ">
              <h1 className="text-5xl  text-center md:text-left text-primary font-bold ">PORTLAND-LEATHER</h1>
              <p className="text-xl font-semibold text-center md:text-left text-zinc-800 my-7">
                A high-quality genuine leather jacket is a must in every one's wardrobe. You can find real leather jackets for men and women at PortLand at very affordable prices.

                Our collection of jackets for men consists of a variety of styles from sleek leather blazers, fringed cowboy jackets, motorcycle (biker jackets) to bomber jackets.
              </p>
            </div>
            <Link to={'/seller/login'} className=' py-3 px-4 bg-gray-200 hover:bg-orange-300 rounded-xl ' >
             Admin
            </Link>
          </div>
          <div className='flex justify-center items-center mt-10'>
            <SearchBar />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
