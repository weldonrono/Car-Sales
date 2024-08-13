import offer from "../assets/images/offer.jpg"
import Button from "../components/Button"
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container w-fit">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />

      </div>
      <div className="flex flex-1 flex-col">
      
        <h2 className="mt-10 font-bold text-4xl capitalize font-palanquin lg:max-w-lg">
          We provide you
          <span className="text-coral-red">Special</span>
          <span className="text-coral-red">Offer</span>Cars
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6 lg:max-w-lg info-text">Navigate a realm of possibilities designed to fulfill your unique desires surpassing the loftiest expectations.Your journey with us is nothing short of exceptions.</p>
         <div className="mt-11 flex flex-wrap gap-4">
        
            <Button label="Shop now" />
            <Button 
              label="Learn more"
              backgroundColor="bg-white"
              borderColor="border-slate-gray"
              textColor="text-slate-gray"
            />
        
          

        </div>
      </div>

    </section>
  )
}

export default SpecialOffer