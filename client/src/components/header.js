import { useState } from "react";
import { Link } from "react-router-dom";
import ToggleButon from '../asset/togglebutton/toggle'
const Header = () => {
    const [navbar, setNavbar] = useState(false);
    const Navbar = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Services",
            link: "/services",
        },
        {
            name: "Portfolio",
            link: "/portfolio",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];
    return (
        <>

<nav className="w-full h-auto bg-inherit lg:px-24 md:px-16 sm:px-14 px-12 py-2 shadow-md fixed z-50">
                <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
                    {/* Navbar logo & toggle button section */}
                    <div>
                        <div className="flex items-center justify-between py-3 md:py-5 md:block">
                            {/* Logo section */}
                            <Link className="text-3xl text-orange-500 font-semibold tracking-[0.1rem]">
                                MYPhoneBook☎️
                            </Link>
                            {/* Toggle button section  (we will do it later) */}

                            <ToggleButon navbar={navbar} setNavbar={setNavbar} />

                        </div>
                    </div>

                    {/* NAvbar menu items section */}
                    <div
                        className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="list-none lg:flex md:flex sm:block block gap-x-5 gap-y-16">
                            {Navbar.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-gray-900 text-[1.15rem] font-medium tracking-wider hover:text-blue-400-200 ease-out duration-700"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            <button className="bg-orange-500 text-[1.1rem] font-normal text-white px-5 py-1.5 rounded lg:ml-10 md:ml-6 sm:ml-0 ml-0">
                                Register
                            </button>
                        </ul>
                    </div>
                </div>
            </nav>
           
        </>
    );
};

export default Header;