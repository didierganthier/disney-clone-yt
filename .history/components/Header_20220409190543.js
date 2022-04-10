import Image from "next/image";
import { HomeIcon, PlusIcon, SearchIcon, StarIcon } from "@heroicons/react/solid";
import React from "react";
import { FcGoogle } from "react-icons/fc";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { firebaseApp } from "../firebase-config";
import { useRouter } from "next/router";

function Header() {

    const firebaseAuth = getAuth(firebaseApp);
    const provider = new GoogleAuthProvider();
    const router = useRouter();

    const signIn = async () => {
        const { user } = await signInWithPopup(firebaseAuth, provider);
        const { refreshToken, providerData } = user;
        console.log(refreshToken, providerData);
        localStorage.setItem("user", JSON.stringify(providerData));
        localStorage.setItem("accessToken", JSON.stringify(refreshToken));
        router.push("/");
    };

    return (
        <div className="sticky bg-[#040714] top-0 z-[1000] flex h-[72px] items-center px-10 md:px-12">
            <Image src="/images/logo.svg" width={80} height={80} className="cursor-pointer" />
            <div className="hidden ml-10 md:flex items-center space-x-6">
                <a className="header-link group">
                    <HomeIcon className="h-4" />
                    <span className="span">Home</span>
                </a>
                <a className="header-link group">
                    <SearchIcon className="h-4" />
                    <span className="span">Search</span>
                </a>
                <a className="header-link group">
                    <PlusIcon className="h-4" />
                    <span className="span">Watchlist</span>
                </a>
                <a className="header-link group">
                    <StarIcon className="h-4" />
                    <span className="span">Originals</span>
                </a>
                <a className="header-link group">
                    <img src="/images/movie-icon.svg" alt="Movie Icon" className="h-4" />
                    <span className="span">Movies</span>
                </a>
                <a className="header-link group">
                    <img src="/images/series-icon.svg" alt="Series Icon" className="h-4" />
                    <span className="span">Series</span>
                </a>
            </div>
            <button className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200">
                Login
            </button>
        </div>
    )
}

export default Header;
