const CarCard = ({imgURL, changeBigCarImage, bigCarImg}) => {
  const handleClick = () => {
    if (bigCarImg !== imgURL.bigCar) {
      changeBigCarImage(imgURL.bigCar)
      
    }
  }
  return (
    <div className={`border-2 rounded-xl
      ${bigCarImg === imgURL.bigCar
        ? "border-red-800"
        : "border-transparent"
      } cursor-pointer max-sm:flex-1
        
        `}
        onClick={handleClick}
        
        >
          <div className="flex justify-center items-center sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-slate-500 bg-cover bg-center">
            <img
              src={imgURL.thumbnail}
              alt="car collection"
              width={127}
              height={103}
              className="object-contain"
            />
          </div>

    </div>
  )
}

export default CarCard