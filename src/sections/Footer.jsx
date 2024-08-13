import { FaFacebook } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import logo from "../assets/icons/logo.jpg"
import { footerLinks } from "../constants"
import { FaCopyright } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="m-0 max-w-[1440]">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a>
            <img
              src={logo}
              alt="logo"
              width={140}
              height={46}
            />
          </a>
          <p className="mt-6 text-base leading-7 font-serif text-white sm:max-w-sm">
            Get cars ready for the new term at your nearest Quality stores. Find your perfect car. Get rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            
              <FaFacebook className="flex justify-center items-center w-12 h-12 bg-white rounded-full p-2"/>
              <FaTwitter className="flex justify-center items-center w-12 h-12 bg-white rounded-full p-2"/>
              <FaInstagram className="flex justify-center items-center w-12 h-12 bg-white rounded-full p-2"/>
            


          </div>
          <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap mb-6">
            {footerLinks.map((section)=> (
              <div key={section}> 
                <h4 className="text-white font-serif text-2xl leading-normal font-medium">{section.title}</h4>
                  <ul>
                    {section.links.map((link)=> (
                      <li key={link.name} className="mt-3 text-white font-serif text-base leading-normal hover:text-gray-800 cursor-pointer">
                        <a>{link.name}</a>
                      </li>

                    ))}
                
                </ul>

              </div>
            ))}

          </div>

        </div>

      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-serif cursor-pointer">
          <FaCopyright className="mt-0 rounded-full"/>
          <p>Copyright. All rights reserved</p>
          <p className="font-serif cursor-pointer">Terms & Conditions</p>

        </div>

      </div>
      
    </footer>
  )
}

export default Footer