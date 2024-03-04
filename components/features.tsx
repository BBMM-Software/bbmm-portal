"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import FeaturesBg from "@/public/images/features-bg.png";
import FeaturesElement from "@/public/images/features-element.png";

const TABS_TEXTS = [
	"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
	"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper porttitor nulla, et porttitor neque. Proin ac vehicula eros. Vivamus odio risus.",
];

export default function Features() {
	const [tab, setTab] = useState<number>(1);
	const [tabContent, setTabContent] = useState(TABS_TEXTS[0]);

	const tabs = useRef<HTMLDivElement>(null);

	const heightFix = () => {
		if (tabs.current && tabs.current.parentElement)
			tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
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
			<div
				className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
				aria-hidden="true"
			></div>
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
								className={`cursor-pointer bg-gray-200 hover:bg-white hover:border hover:border-gray-200 text-gray-800 text-sm font-semibold rounded-full mx-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center ${
									tab === 1
										? "bg-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base tracking-tighter"
										: "bg-gray-200 border-transparent"
								}`}
							>
								Freelancing Services
							</a>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								aria-hidden="true"
								className="self-center"
								width="10"
								height="10"
								viewBox="0 0 3 4"
								fill="none"
							>
								<circle
									cx="1.5"
									cy="2"
									r="1.5"
									fill="#6B7280"
								/>
							</svg>
							<a
								onClick={(e) => {
									e.preventDefault();
									handleChangeTab(2);
								}}
								className={`cursor-pointer bg-gray-200 hover:bg-white hover:border hover:border-gray-200 text-gray-800 text-sm font-semibold rounded-full mx-2 px-2.5 py-0.5 rounded inline-flex items-center justify-center ${
									tab === 2
										? "bg-white shadow-md border border-gray-200 hover:shadow-lg px-3.5 py-1 text-base"
										: "bg-gray-200 border-transparent"
								}`}
							>
								CompanyCompass
							</a>
						</div>
					</div>

					{/* Section content */}
					<div className="md:grid md:grid-cols-12 md:gap-6">
						{/* Content */}
						<div
							className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-4 lg:col-span-4 md:mt-6"
							data-aos="fade-right"
						>
							<div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
								<h3 className="h3 mb-3">BBMM Products</h3>
								<p className="text-xl text-gray-600">
									{tabContent}
								</p>
							</div>
						</div>

						{/* Tabs items */}
						<div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-8 lg:col-span-8 mb-8 md:mb-0 md:order-1 flex items-center justify-center">
							<div className="transition-all">
								<div
									className="relative flex flex-col text-center lg:text-right"
									data-aos="zoom-y-out"
									ref={tabs}
								>
									{/* Item 1 */}
									<Transition
										show={tab === 1}
										appear={true}
										className="w-full"
										enter="transition ease-in-out duration-700 transform order-first"
										enterFrom="opacity-0 translate-y-16"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in-out duration-300 transform absolute"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 -translate-y-16"
										beforeEnter={() => heightFix()}
										unmount={false}
									>
										<div className="relative inline-flex flex-col">
											<Image
												className="md:max-w-none mx-auto rounded"
												src={FeaturesBg}
												width={500}
												height="462"
												alt="Features bg"
											/>
										</div>
									</Transition>

									{/* Item 2 */}
									<Transition
										show={tab === 2}
										appear={true}
										className="w-full"
										enter="transition ease-in-out duration-700 transform order-first"
										enterFrom="opacity-0 translate-y-16"
										enterTo="opacity-100 translate-y-0"
										leave="transition ease-in-out duration-300 transform absolute"
										leaveFrom="opacity-100 translate-y-0"
										leaveTo="opacity-0 -translate-y-16"
										beforeEnter={() => heightFix()}
										unmount={false}
									>
										<div className="relative inline-flex flex-col">
											<Image
												className="md:max-w-none mx-auto rounded"
												src={FeaturesBg}
												width={500}
												height="462"
												alt="Features bg"
											/>
										</div>
									</Transition>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
