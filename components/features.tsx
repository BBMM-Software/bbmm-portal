"use client";

import Testimonials from "@/public/images/testimonial.jpg";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaClipboardList, FaUpload, FaCheck } from "react-icons/fa";
import { EffectFlip, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TABS_TEXTS = [
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper porttitor nulla, et porttitor neque. Proin ac vehicula eros. Vivamus odio risus.",
];

interface Project {
	title: string; // Project Name
	description: string; // Project Description
	gifs: Array<string>; // gifs
	dev: {
		time: string; // dev time
		request: string; // what did the client requested
		provided?: string; // what the client provided
		delivered: string; // what we delivered
		techStack: Array<string>; // technologies used
	};
}

const PROJECTS: Project[] = [
	{
		title: "InTouch",
		description: "Basic application description",
		gifs: [" ", " "],
		dev: {
			time: "2 days",
			request: "An application that can do X Stuff",
			provided: "Figma design and also some stuff",
			delivered: "Delivered a powerful app",
			techStack: ["tech1", "tech2"],
		},
	},
	{
		title: "AXYOS",
		description: "An application that can do X Stuff, and it's very powerful, you really can't match that type of power",
		gifs: [" ", " "],
		dev: {
			time: "2 days",
			request: "An application that can do X Stuff, and it's very powerful, you really can't match that type of power",
			provided: "Figma design and also some stuff",
			delivered: "Delivered a powerful app",
			techStack: ["tech1", "tech2"],
		},
	},
];

export default function Features() {
	const [tab, setTab] = useState<number>(1);
	const [tabContent, setTabContent] = useState(TABS_TEXTS[0]);
	const [project, setProject] = useState<Project>(PROJECTS[0]);

	const tabs = useRef<HTMLDivElement>(null);

	const heightFix = () => {
		if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
	};

	const handleChangeTab = (index: number) => {
		setTab(index);
		setTabContent(TABS_TEXTS[index - 1]);
	};

	useEffect(() => {
		heightFix();
	}, []);

	return (
		<section className="relative">
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
			<div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

			<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
				<div className="pt-12 md:pt-20">
					{/* Section header */}
					<div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
						<h1 className="h2 mb-4">Explore our products</h1>
						<div className="flex flex-row justify-center">
							<a
								onClick={(e) => {
									e.preventDefault();
									handleChangeTab(1);
								}}
								className={`cursor-pointer bg-gray-200 hover:bg-white hover:border hover:border-gray-200 text-gray-800 font-semibold rounded-full mx-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center ${
									tab === 1
										? "bg-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base tracking-tighter"
										: "bg-gray-200 border-transparent text-sm"
								}`}
							>
								Freelancing Services
							</a>
							<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="self-center" width="10" height="10" viewBox="0 0 3 4" fill="none">
								<circle cx="1.5" cy="2" r="1.5" fill="#6B7280" />
							</svg>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleChangeTab(2);
								}}
								className={`cursor-pointer bg-gray-200 hover:bg-white hover:border hover:border-gray-200 text-gray-800 font-semibold rounded-full mx-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center ${
									tab === 2 ? "bg-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base" : "bg-gray-200 border-transparent text-sm"
								}`}
							>
								CompanyCompass
							</a>
						</div>
					</div>

					{/* Section content */}
					{/* Tabs items */}
					<div className="transition-all" style={{ height: "500px" }}>
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
										navigation={true}
										pagination={true}
										color="purple-500"
										spaceBetween={50}
										slidesPerView={1}
										onSlideChange={(e) => console.log("slide change", e)}
										onSwiper={(swiper) => console.log(swiper)}
										className="m-0 swiper"
									>
										{PROJECTS.map((project, index) => (
											<SwiperSlide key={index} style={{ height: "500px" }}>
												<div className="w-full grid grid-cols-12 mt-8">
													<div className="xs:col-span-12 sm:col-span-4 sm:col-start-2 flex sm:mt-16 xs:text-center sm:text-start" data-aos="fade-right">
														<div className="mb-8 w-full">
															<h3 className="h3 mb-3">{project.title}</h3>
															<p className="text-xl text-gray-600">{project.description}</p>
														</div>
													</div>
													<div className="m-0 xs:col-span-12 sm:col-span-7">
														<Swiper
															slidesPerView={1}
															modules={[EffectFlip]}
															effect="flip"
															allowTouchMove={false}
															onClick={(swiper) => {
																console.log("Sunt aici bos", swiper.activeIndex);
																if (swiper.isEnd) {
																	swiper.slideTo(0, 500);
																} else {
																	swiper.slideNext(500);
																}
															}}
														>
															<SwiperSlide className="shadow-none">
																<div className="flex justify-center items-center">
																	<Image src={Testimonials} width={400} alt="Features bg" />
																</div>
															</SwiperSlide>
															<SwiperSlide>
																<div className="flex justify-center items-center">
																	<Image src={Testimonials} width={400} alt="Features bg" />
																</div>
															</SwiperSlide>
															<SwiperSlide>
																<div className="flex justify-center items-center">
																	<div
																		style={{ width: "400px", height: "400px" }}
																		className="bg-white border border-gray-200 rounded-lg shadow relative"
																	>
																		<div className="my-4 w-full flex flex-column">
																			<FaClipboardList /> :{project.dev.request}
																		</div>
																		<div className="my-4 w-full flex flex-column">
																			<FaUpload />: {project.dev.provided}
																		</div>
																		<div className="my-4 w-full flex flex-column">
																			<FaCheck />: {project.dev.delivered}
																		</div>

																		<div className="flex flex-column justify-center w-full absolute font-semibold bottom-0 text-xs mb-2">
																			{project.dev.techStack.map((tech, index) => (
																				<>
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
																							<circle cx="1.5" cy="2" r="1.5" fill="#000" />
																						</svg>
																					)}
																				</>
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
										<div className="xs:col-span-12 sm:col-span-4 sm:col-start-2 flex sm:mt-16 xs:text-center sm:text-start" data-aos="fade-right">
											<div className="mb-8 w-full">
												<h3 className="h3 mb-3">CompanyCompass</h3>
												<p className="text-xl text-gray-600">Some Description for this one</p>
											</div>
										</div>
										<div className="xs:col-span-12 sm:col-span-7 flex justify-center items-center">
											<Image src={Testimonials} width={400} alt="Features bg" />
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
