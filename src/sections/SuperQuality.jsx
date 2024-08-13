import car8 from "../assets/images/car8.jpg"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-fit max-container "
    >
      <div className="flex flex-1 flex-col">
      
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg">
          We provide you
          <span className="text-coral-red">Super</span>
          <span className="text-coral-red">Quality</span>Cars
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, Our meticulously designed cars elevate your experience, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to to detail and excellence ensures your satisfaction </p>
       <div className="mt-11">
        
            <Button label="View details"/>
        
          

        </div>

      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={car8}
          alt="car collection"
          width={570}
          height={520}
          className="object-contain"
        />

      </div>

    </section>
  )
}

export default SuperQuality