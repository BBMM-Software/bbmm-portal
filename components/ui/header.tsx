'use client'

import {useEffect, useRef, useState} from 'react'

import Logo from '../utils/logo'
import Link from "next/link";


export default function Header() {

    const [top, setTop] = useState<boolean>(true)
    const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
    const trigger = useRef<HTMLButtonElement>(null)
    const mobileNav = useRef<HTMLDivElement>(null)


    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({target}: { target: EventTarget | null }): void => {
            if (!mobileNav.current || !trigger.current) return;
            if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setMobileNavOpen(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.scrollY > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])

    return (
        <header
            className={`fixed w-full z-30 ${top ? 'bg-white' : ''} ${mobileNavOpen ? 'shadow-sm' : ''} transition duration-1000 ease-in-out ${!top ? 'bg-opacity-30 bg-black backdrop-blur-md' : ''}`}>
            <div className="max-w-full mx-auto py-2 px-6 sm:px-20">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <div className={`h-full mr-4`}>
                        <Logo fillColor={!top ? 'white' : 'black'}/>
                    </div>
                    <nav className="hidden md:flex ">
                        <div className="max-w-xs  sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out"
                             data-aos-delay="300">
                            <div className="my-auto">
                                <a className={`font-medium px-5 py-3 flex items-center  w-full sm:w-auto ${!top ? 'text-white' : 'text-black'}`}
                                   href="#productsSection">Products</a>
                            </div>
                            <div className="my-auto">
                                <a className={`font-medium px-5 py-3 flex items-center  w-full sm:w-auto ${!top ? 'text-white' : 'text-black'}`}
                                   href="#contactSection">Contact</a>
                            </div>
                            <div className="my-auto">
                                <a className={`btn  bg-black hover:bg-gray-800 w-full sm:w-auto sm:ml-4 ${!top ? 'text-gray-700 bg-white hover:bg-gray-200' : 'text-white'}`}
                                   href="/about-us">About Us</a>
                            </div>
                        </div>
                    </nav>

                    <button
                        ref={trigger}
                        className={`hamburger ${mobileNavOpen && 'active'} md:hidden `}
                        aria-controls="mobile-nav"
                        aria-expanded={mobileNavOpen}
                        onClick={() => setMobileNavOpen(!mobileNavOpen)}
                    >
                        <span className="sr-only">Menu</span>
                        <svg className={`w-6 h-6 fill-current ${!top ? 'text-white' : 'text-black'}`} viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <rect y="4" width="24" height="2"/>
                            <rect y="11" width="24" height="2"/>
                            <rect y="18" width="24" height="2"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div
                id="mobile-nav"
                className={`top-full  pb-10 left-0 w-full ${!mobileNavOpen ? 'hidden' : ''} md:hidden`}
                ref={mobileNav}
            >
                <ul className="px-5 py-2">
                    <li>
                        <Link href="#productsSection"
                              className={`flex font-medium w-full  ${!top ? 'text-white' : 'text-black'} hover: ${!top ? 'text-gray-300' : 'text-gray-700'} py-2 justify-center`}
                              onClick={() => setMobileNavOpen(false)}>
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link href="#contactSection"
                              className={`flex font-medium w-full ${!top ? 'text-white' : 'text-black'} hover: ${!top ? 'text-gray-300' : 'text-gray-700'} py-2 justify-center`}
                              onClick={() => setMobileNavOpen(false)}>
                            Contact
                        </Link>
                    </li>
                    <li>
                        <div className="flex w-full justify-center">
                            <Link href="/about-us"
                                  className={`btn-sm  ${!top ? 'text-black' : 'text-white'} ${!top ? 'bg-white' : 'bg-black'} hover:${!top ? 'text-gray-300' : 'text-gray-700'} w-2/3 my-2`}
                                  onClick={() => setMobileNavOpen(false)}>
                                About US
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    )
}
