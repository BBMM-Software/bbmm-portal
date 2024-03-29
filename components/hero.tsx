import ModelView from "@/components/ModelView/model-view";

export default function Hero() {
    return (<section className="relative">

        {/* Illustration behind hero content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
             aria-hidden="true">
            <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                        <stop stopColor="#5f1aeb" offset="0%"/>
                        <stop stopColor="#a2dee8" offset="77.402%"/>
                        <stop stopColor="#DFDFDF" offset="100%"/>
                    </linearGradient>
                </defs>
                <g fill="url(#illustration-01)" fillRule="evenodd">
                    <circle cx="1232" cy="128" r="128"/>
                    <circle cx="155" cy="443" r="64"/>
                </g>
            </svg>
        </div>

        <div className="max-w-6xl mx-auto">

            {/* Hero content */}
            <div className="pt-32 md:pt-40">

                {/* Section header */}
                <div className="text-center px-4 md:px-6">
                    <div className="w-full flex justify-center items-center">
                        <h1 className="text-4xl xs:text-5xl max-w-sm md:max-w-full sm:text-6xl font-extrabold leading-tighter tracking-tighter"
                            data-aos="zoom-y-out">BBMM <span
                            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">Software</span>
                        </h1>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">
                            Crafting Your Digital Future with <b>Precision</b> and <b>Passion</b>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <ModelView/>
    </section>)
}