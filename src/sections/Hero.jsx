import { useState } from "react";
import Button from "../components/Button"
import { BiArrowToRight } from "react-icons/bi"
import { cars, statistics } from "../constants";
import CarCard from "../components/CarCard";
import { bigCar1 } from "../assets/images";


const Hero = () => {
  const [bigCarImg, setbigCarImg] = useState(bigCar1)
  return (
    <section
    id="home"
    className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-8">
        <p className="text-xl font-montserrat text-coral-red"> Our Summer Collection</p>
        <h1 className="mt-10 font-bold text-8xl max-sm:text-[72px] max-sm:leading[82] font-palanquin">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10"> The New Arrival</span><br/>
          <span className="text-coral-red inline-block"> German</span>Cars
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">Discover stylish German arrivals, quality comfort, and innovation for your active life.</p>
        <span className="flex justify-center items-center gap-2 px-7 py-4 border font-serif text-lg leading-none text-white rounded-full bg-red-400">
           <Button label="Shop Now"/>
           <BiArrowToRight className="ml-2 rounded-full w-5 h-5 border bg-yellow"/>
        </span>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-slte-gray">{stat.label}</p>
            </div>
          ))}

        </div>

      </div>
      <div className="relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-cover bg-center">
        <img
        src={bigCarImg}
        alt="Car Collection"
        width={610}
        height={500}
        className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {cars.map((car)=> (
            <div key={car}>
              <CarCard
                imgURL={car}
                changeBigCarImage={(car)=>setbigCarImg(car)}
                bigCarImg={bigCarImg}
               />
            </div>
          ))}

        </div>

      </div>
      

    </section>
  )
}

export default Hero