import logo from "../assets/icons/logo.jpg"
import { GiHamburgerMenu } from "react-icons/gi"
import { navLinks } from "../constants"
const Nav = () => {
  return (
    <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
            <a href="/">
               <img 
               src={logo}
               alt="logo"
               width={130}
               height={29}
               />

            </a>
            <ul className="flex flex-1 items-center justify-center gap-16 max-lg:hidden">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a
                        href={item.href}
                        className="font-montserrat leading-normal text-lg text-slate-gray"
                             
                        >
                            {item.label}

                        </a>

                    </li>
                ))}


            </ul>
            <div className="hidden max-lg:block">
               <GiHamburgerMenu/>
            </div>
        </nav>
    </header>
  )
}

export default Nav