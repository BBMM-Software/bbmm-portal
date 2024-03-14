export const metadata = {
	title: "BBMM Software",
	description: "About us",
};

export default function AboutUsPage() {
	return (
		<section className="max-w-6xl mx-auto">
			<div className="pt-32 md:pt-40">
				<div className="w-full p-6 bg-white border border-gray-200 rounded-xl shadow text-center">
					<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
						About <span className="text-purple-200">us</span>
					</h5>

					<p className="mb-3 font-lg text-gray-700 dark:text-gray-400">
						Welcome to BBMM Software, where innovation meets expertise. We are a dynamic trio of freelancers who decided that together, we are stronger. Our journey
						began as individual freelancers, each with our own set of skills, dreams, and aspirations. The realization that we could achieve so much more by combining
						our talents led to the birth of BBMM Software.
					</p>
				</div>
			</div>
		</section>
	);
}
