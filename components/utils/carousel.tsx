"use client";

import Image from "next/image";
import TestimonialImage from "@/public/images/testimonial.jpg";

export default function Carousel() {
	return (
		<div
			id="default-carousel"
			className="relative w-full"
			data-carousel="slide"
		>
			<div className="relative h-56 overflow-hidden rounded-lg md:h-96">
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item
				>
					<Image
						className="relative rounded-full"
						src={TestimonialImage}
						width={96}
						height={96}
						alt="Testimonial 01"
					/>
				</div>
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item
				>
					<Image
						className="relative rounded-full"
						src={TestimonialImage}
						width={96}
						height={96}
						alt="Testimonial 01"
					/>
				</div>
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item
				>
					<Image
						className="relative rounded-full"
						src={TestimonialImage}
						width={96}
						height={96}
						alt="Testimonial 01"
					/>
				</div>
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item
				>
					<Image
						className="relative rounded-full"
						src={TestimonialImage}
						width={96}
						height={96}
						alt="Testimonial 01"
					/>
				</div>
				<div
					className="hidden duration-700 ease-in-out"
					data-carousel-item
				>
					<Image
						className="relative rounded-full"
						src={TestimonialImage}
						width={96}
						height={96}
						alt="Testimonial 01"
					/>
				</div>
			</div>

			<div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
				<button
					type="button"
					className="w-3 h-3 rounded-full"
					aria-current="true"
					aria-label="Slide 1"
					data-carousel-slide-to="0"
				></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 2"
					data-carousel-slide-to="1"
				></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 3"
					data-carousel-slide-to="2"
				></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 4"
					data-carousel-slide-to="3"
				></button>
				<button
					type="button"
					className="w-3 h-3 rounded-full"
					aria-current="false"
					aria-label="Slide 5"
					data-carousel-slide-to="4"
				></button>
			</div>

			
		</div>
	);
}
