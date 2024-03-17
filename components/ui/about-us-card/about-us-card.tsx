"use client";

import CountUp from "react-countup";
import styles from "./about-us-card.module.css";
import Image from "next/image";
import AdrianIoana from "@/public/images/adrian-ioana.jpg";
import EdiBicu from "@/public/images/edi-bicu.png";
import MihneaStamatie from "@/public/images/mihnea-stamatie.png";
import { useEffect, useState } from "react";

const OUR_TEAM = [
	{
		img: AdrianIoana,
		name: "Adrian Ioana",
	},
	{
		img: EdiBicu,
		name: "Eduard Bicu",
	},
	{
		img: MihneaStamatie,
		name: "Mihnea Stamatie",
	},
];

export default function AboutUsCard() {
	const [shuffledTeam, setShuffledTeam] = useState<typeof OUR_TEAM>([]);

	useEffect(() => {
		const team = [...OUR_TEAM];

		for (let i = team.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[team[i], team[j]] = [team[j], team[i]];
		}

		setShuffledTeam(team);
	}, []);

	return (
		<div className="w-full py-12 bg-white sm:border sm:border-gray-200 rounded-xl shadow text-center sm:mx-2">
			<h5 className="mb-2 text-4xl font-bold tracking-tight text-gray-900">
				About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-400">us</span>
			</h5>

			<p className="my-5 text-lg text-gray-700 px-6">
				Welcome to BBMM Software, where innovation meets expertise. We are a dynamic trio of freelancers who decided that together, we are stronger. Our journey began as
				individual freelancers, each with our own set of skills, dreams, and aspirations. The realization that we could achieve so much more by combining our talents led to
				the birth of BBMM Software.
			</p>

			<div className="grid sm: py-6 grid-cols-12 my-16">
				{shuffledTeam.length > 0 ? (
					shuffledTeam.map((member) => (
						<div className="col-span-4 flex justify-start items-center flex-col">
							<div className={`${styles["image-container"]} ${styles.flipAnimation}`}>
								<Image src={member.img} alt="co-founder-photo" className={styles["user-image"]} />
							</div>
							<h6 className="font-semibold text-sm">{member.name}</h6>
						</div>
					))
				) : (
					<div className="w-full" style={{ height: "136px" }}>
						Team members
					</div>
				)}
			</div>

			<h2 className="text-xl font-semibold">Satisfied Customers</h2>
			<div className="my-5 px-6 mx-auto sm:w-3/6 flex justify-between">
				<div>
					<CountUp className="text-purple-700 text-2xl font-bold" start={0} end={10} duration={2} />
					<h2 className="text-lg font-semibold">UpWork</h2>
				</div>
				<div>
					<CountUp className="text-purple-700 text-2xl font-bold" start={0} end={80} duration={2} />
					<h2 className="text-lg font-semibold">
						Independent <br /> Contracts
					</h2>
				</div>
				<div>
					<CountUp className="text-purple-700 text-2xl font-bold" start={0} end={30} duration={2} />
					<h2 className="text-lg font-semibold">Fiverr</h2>
				</div>
			</div>
		</div>
	);
}
