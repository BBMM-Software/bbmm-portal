export const metadata = {
	title: "BBMM Software",
	description: "About us",
};

import AboutUsCard from "../../components/ui/about-us-card/about-us-card";

export default function AboutUsPage() {
	return (
		<section className="max-w-6xl mx-auto">
			<div className="pt-32 md:pt-40">
				<AboutUsCard />
			</div>
		</section>
	);
}
