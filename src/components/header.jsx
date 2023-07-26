import React from "react";
import { BiSearch } from "react-icons/bi";

const Header = () => {
    

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
        </div>
    );
};

export default Header;
