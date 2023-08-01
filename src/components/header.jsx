"use client"
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import MenuItem from "./MenuItem";
import ThemeComp from "./ThemeComp";
import { useRouter } from "next/navigation";

const Header = () => {
    const [keyword, setKeyword] = useState("")
    const router = useRouter();
    

    const menu = [
        {
            name: "Giriş Yap",
            url: "/login"
        },
        {
            name: "Hakkında",
            url: "/about"
        },
    ];

    const searchFunc = (e) => {
        if(keyword.length >= 3) {
            router.push(`/search/${keyword}`)
            setKeyword("")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            searchFunc();
        }
    };

    return (

        <div className="flex items-center gap-3 h-20 p-5">

            <div className="bg-amber-600 p-3 text-2xl font-bold rounded-lg">
                MovieApp
            </div>

            <div onClick={searchFunc} className="flex items-center gap-2 border p-2 flex-1 rounded-lg">

                <input
                    onKeyDown={handleKeyDown}
                    onChange={e => setKeyword(e.target.value)}
                    className="outline-none flex-1 bg-transparent"
                    placeholder="Arama Yapınız"
                    type="text"
                    value={keyword}
                />

                <BiSearch className="cursor-pointer" size={25} onClick={searchFunc}/>
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


