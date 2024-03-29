"use client";

import {Transition} from "@headlessui/react";
import Image, {StaticImageData} from "next/image";
import {useEffect, useRef, useState} from "react";
import {MdTimer} from "react-icons/md";
import {EffectFlip, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import Testimonial from "@/public/images/companycompasslogo.jpg";
import AbysGif from "@/public/projectGifs/abys.gif";
import FriendzGif from "@/public/projectGifs/friendz.gif";
import JobPostGif from "@/public/projectGifs/jobpost.gif"
import LinkedinAutomatorPng from "@/public/projectGifs/linkedinautomator.png"
import ContinuousTransitionIcon from "./ui/click-animation";
import Utilities from "./utils/utilities";

interface Project {
    title: string; // Project Name
    description: string; // Project Description
    gifs: Array<StaticImageData>; // gifs
    dev: {
        time: string; // dev time
        request: Array<string>; // what did the client requested
        provided?: Array<string>; // what the client provided
        delivered: Array<string>; // what we delivered
        techStack: Array<string>; // technologies used
    };
}

const PROJECTS: Project[] = [
	{
		title: "InTouch",
		description: "The application allows its users to share their social media accounts, at all types of social events.",
		gifs: [FriendzGif],
		dev: {
			time: "2 months",
			request: ["Social media app to share accounts across all platforms"],
			provided: ["Figma design"],
			delivered: ["Source code", "Modern UI, made specifically for mobile, with custom styles for iOS and Android", "Improved app stability with Kubernetes"],
			techStack: ["Ionic-React", "Spring Boot", "PostgreSQL", "Kubernetes"],
		},
	},
	{
		title: "Abys",
		description: "The website showcases an interactive 3D model of Abys's outdoor advertising product: a bike.",
		gifs: [AbysGif],
		dev: {
			time: "1 week",
			request: ["3D model of a bike with displays on each side", "the model should be spinning by default, and interactive", "background with  moving vertexes animation"],
			provided: ["Rough Figma design"],
			delivered: ["Source code, 3D model, and assistance in hosting"],
			techStack: ["Golang", "p5.js", "Autodesk Fusion"],
		},
	},
	{
		title: "Startup Finder",
		description: "A web application that connects software companies and potential employers. Users can search and filter through the jobs, and companies can post their jobs for a charge.",
		gifs: [JobPostGif],
		dev: {
			time: "3 weeks",
			request: ["modern UI", "search and filter for the jobs", "job post preview for the companies", "integration with stripe for payment"],
			provided: ["hand-drawn sketches of the site's UI"],
			delivered: ["Each change pushed on the client's git server, dockerization, and deployment on the client's AWS account (frontend, backend, and database)"],
			techStack: ["Angular 15", ".NET Core 6", "MySQL"],
		},
	},
	{
		title: "Linkedin Automator",
		description: "A native MAC app that scrapes contacts for provided contacts from Linkedin. Users can reverse-search the scraped contacts for certain keywords.",
		gifs: [LinkedinAutomatorPng],
		dev: {
			time: "3 weeks",
			request: ["MAC native application", "plug-and-play (doesn't require the user to download any 3rd party libraries)", "the scraping process should be shown to the user: each page should be opened in Chrome", "reverse-search functionality"],
			provided: ["Figma design"],
			delivered: ["Source code", "MAC executable", "assistance in setup"],
			techStack: ["Swift UI", "Automator Scripts"],
		},
	},
];

export default function Features() {
    const [tab, setTab] = useState<number>(1);
    const [isMobileWidth, setIsMobileWidth] = useState<boolean>(false);
    const [width, setWidth] = useState<number>(Utilities.TAILWIND_LG);

    const tabs = useRef<HTMLDivElement>(null);

    const heightFix = () => {
        if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    };

    useEffect(() => {
        heightFix();
    }, []);

    const updateWidth = () => {
        setIsMobileWidth(Utilities.isMobileWidth);
        setWidth(Utilities.getWindowWidth)
    };


    useEffect(() => {
        updateWidth()
        window.addEventListener("resize", updateWidth);
    }, []);

    return (
        <section id="productsSection" className="relative">
            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 pb-16 sm:px-6">
                <div className="pt-12 md:pt-20">
                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center lg:pb-16">
                        <h1 className="h2 mb-4">Explore our products</h1>
                        <div className="flex flex-row justify-center">
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTab(1);
                                }}
                                className={`cursor-pointer hover:border hover:border-gray-200 font-semibold rounded-full mx-2 px-2.5 py-0.5 inline-flex items-center justify-center ${
                                    tab === 1
                                        ? "bg-purple-500 text-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base tracking-tighter"
                                        : "bg-gray-200 text-gray-800 border-transparent text-sm"
                                }`}
                            >
                                Freelancing Services
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center"
                                 width="10" height="10" viewBox="0 0 3 4" fill="none">
                                <circle cx="1.5" cy="2" r="1.5" fill="#6B7280"/>
                            </svg>
                            <a
                                onClick={(e) => {
                                    e.preventDefault();
                                    setTab(2);
                                }}
                                className={`cursor-pointer hover:border hover:border-gray-200 font-semibold rounded-full mx-2 px-2.5 py-0.5 inline-flex items-center justify-center ${
                                    tab === 2
                                        ? "bg-purple-500 text-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base tracking-tighter"
                                        : "bg-gray-200 text-gray-800 border-transparent text-sm"
                                }`}
                            >
                                Company Compass
                            </a>
                        </div>
                    </div>

                    {/* Section content */}
                    {/* Tabs items */}
                    <div className="transition-all" style={{ height: width < Utilities.TAILWIND_LG ? "600px" : "400px"}}>
                        <div className="relative">
                            <div ref={tabs}>
                                {/* Item 1 */}
                                <Transition
                                    show={tab === 1}
                                    appear={true}
                                    className="w-full absolute"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                    beforeEnter={() => heightFix()}
                                    unmount={false}
                                >
                                    <Swiper
                                        modules={[Navigation, Pagination]}
                                        navigation={!isMobileWidth}
                                        pagination={true}
                                        color="purple-500"
                                        spaceBetween={50}
                                        slidesPerView={1}
                                        className="m-0 swiper pb-12"
                                    >
                                        {PROJECTS.map((project, index) => (
                                            <SwiperSlide key={index} className="pb-12">
                                                <div className="w-full grid grid-cols-12 mt-8">
                                                    <div
                                                        className="xs:col-span-12 lg:col-span-4 lg:col-start-2 flex lg:mt-16 xs:text-center lg:text-start"
                                                        data-aos="fade-right">
                                                        <div className="mb-8 w-full flex flex-col items-center">
                                                            <h3 className="h3 mb-3 text-center">{project.title}</h3>
                                                            <p className="text-xl text-gray-600 text-center h-24 max-w-md">{project.description}</p>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="m-0 xs:col-span-12 lg:col-start-7 lg:col-span-5 h-96">
                                                        <Swiper
                                                            slidesPerView={1}
                                                            modules={[EffectFlip]}
                                                            effect="flip"
                                                            allowTouchMove={false}
                                                            onClick={(swiper) => {
                                                                if (swiper.isEnd) {
                                                                    swiper.slideTo(0, 500);
                                                                } else {
                                                                    swiper.slideNext(500);
                                                                }
                                                            }}
                                                            className="h-full"
                                                        >
                                                            {project.gifs.map((gif, index) => (
                                                                <SwiperSlide key={index} className="shadow-none">
                                                                    <div
                                                                        className="flex justify-center items-center h-full background-soft-gray">
																		<span
                                                                            className="relative p-3 h-full flex items-center">
																			<div
                                                                                className="absolute top-0 right-0 -rotate-45">
																				<ContinuousTransitionIcon/>
																			</div>
																			<Image src={gif}
                                                                                   className="h-auto w-auto max-h-full max-w-full"
                                                                                   alt="Features bg"/>
																		</span>
                                                                    </div>
                                                                </SwiperSlide>
                                                            ))}

                                                            <SwiperSlide
                                                            >
                                                                <div
                                                                    className="flex justify-center items-center w-full h-full">
                                                                    <div
                                                                        className="relative flex justify-center border border-gray-200 rounded-lg items-center h-full w-full max-w-md background-soft-gray">
                                                                        <div
                                                                            className="absolute top-1 right-1 text-xs flex items-center">
                                                                            <MdTimer fontSize={18}/>: {project.dev.time}
                                                                        </div>
                                                                        <div className="h-10/12 w-10/12 relative">
                                                                            <div>
                                                                                <div className="my-4 text-sm">Client
                                                                                    Requirements:
                                                                                </div>
                                                                                <div className="my-2">
                                                                                    <ul className="list-disc ms-2 text-xs">
                                                                                        {project.dev.request.map((request, index) => (
                                                                                            <li key={index}>{request}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                                <hr/>
                                                                                {project.dev.provided && (
                                                                                    <>
                                                                                        <div
                                                                                            className="text-sm mt-4">Provided
                                                                                            Data:
                                                                                        </div>
                                                                                        <div className="my-2">
                                                                                            <ul className="list-disc ms-2 text-xs">
                                                                                                {project.dev.provided.map((provided, index) => (
                                                                                                    <li key={index}>{provided}</li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </>
                                                                                )}
                                                                                <hr/>
                                                                                <div className="my-4 text-sm">What we
                                                                                    delivered:
                                                                                </div>
                                                                                <div className="my-4">
                                                                                    <ul className="list-disc ms-2 text-xs">
                                                                                        {project.dev.delivered.map((delivered, index) => (
                                                                                            <li key={index}>{delivered}</li>
                                                                                        ))}
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="flex flex-column justify-center w-full absolute  font-semibold bottom-2 text-xs">
                                                                            {project.dev.techStack.map((tech, index) => (
                                                                                <div className="flex" key={index}>
                                                                                    <span className="mx-1">{tech}</span>
                                                                                    {project.dev.techStack.length - 1 !== index && (
                                                                                        <svg
                                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                                            aria-hidden="true"
                                                                                            className="self-center"
                                                                                            width="5"
                                                                                            height="5"
                                                                                            viewBox="0 0 3 4"
                                                                                            fill="none"
                                                                                        >
                                                                                            <circle cx="1.5" cy="2"
                                                                                                    r="1.5"
                                                                                                    fill="#000"/>
                                                                                        </svg>
                                                                                    )}
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </SwiperSlide>
                                                        </Swiper>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </Transition>

                                {/* Item 2 */}
                                <Transition
                                    show={tab === 2}
                                    appear={true}
                                    className="w-full absolute"
                                    enter="transition ease-in-out duration-700 transform order-first"
                                    enterFrom="opacity-0 translate-y-16"
                                    enterTo="opacity-100 translate-y-0"
                                    leave="transition ease-in-out duration-300 transform absolute"
                                    leaveFrom="opacity-100 translate-y-0"
                                    leaveTo="opacity-0 -translate-y-16"
                                    beforeEnter={() => heightFix()}
                                    unmount={false}
                                >
                                    <div className="w-full grid grid-cols-12 mt-8">
                                        <div
                                            className="xs:col-span-12 sm:col-span-4 sm:col-start-2 flex sm:mt-16 xs:text-center sm:text-start"
                                            data-aos="fade-right">
                                            <div className="mb-8 w-full">
                                                <h3 className="h3 mb-3">Company Compass</h3>
                                                <p className="text-xl text-gray-600">Custom tailored, easy to integrate, chat bot for your company. We provide a custom chatbot service that knows everything about your website and company. </p>
                                            </div>
                                        </div>
                                        <div className="xs:col-span-12 sm:col-span-7 flex justify-center items-center">
                                            <Image src={Testimonial} width={400} alt="Features bg"/>
                                        </div>
                                    </div>
                                </Transition>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
