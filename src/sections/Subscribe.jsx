import Button from "../components/Button"

const Subscribe = () => {
  return (
    <div className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-serif font-bold">Sign Up from

        <span className="text-coral-red">

          Updates </span> & Newsletter

      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border-green-800 rounded-full">
        <input
        type="text"
        placeholder="subscribe@weldon.com"
        className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none sm:border-none border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth/>
        </div>
      </div>

    </div>
  )
}

export default Subscribe