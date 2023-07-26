import React from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";

const Header = () => {
    const menu = [
        {
            name: "Sign In",
            url: "/login"
        },
        {
            name: "About",
            url: "/about"
        },
    ];

    return (

        <div className="flex items-center gap-3 h-20 p-5">

            <div className="bg-amber-600 p-3 text-2xl font-bold rounded-lg">
                MovieApp
            </div>

            <div className="flex items-center gap-2 border p-2 flex-1 rounded-lg">

                <input
                    className="outline-none flex-1"
                    placeholder="Arama Yapınız"
                    type="text"
                />

                <BiSearch className="cursor-pointer" size={25} />
            </div>

            <ThemeComp/>

        {
            menu.map((mn, i) => (
                <MenuItem mn={mn} key={i}/>
            ))
        }

        </div>
    );
};

export default Header;
