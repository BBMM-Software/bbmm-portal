import { DiCodeBadge } from "react-icons/di";
import { DiApple } from "react-icons/di";
import { DiWindows } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiDatabase } from "react-icons/di";
import { DiAws } from "react-icons/di";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbCube } from "react-icons/tb";

import IconCircle from "./utils/IconCircle/iconcircle";
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Services we offer</h2>
            <p className="text-xl text-gray-600">BBMM Software provides you with a variety of software services made possible by our team of professionals.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <IconCircle Icon={DiCodeBadge} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Web Development</h4>
              <p className="text-gray-600 text-center">Crafting modern, responsive, and user-friendly websites to elevate your online presence and engage your audience effectively.</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <div className="relative flex flex-row">
                <IconCircle Icon={DiApple} />
                <IconCircle Icon={DiWindows} />
                <IconCircle Icon={DiAndroid} />
              </div>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Application Development</h4>
              <p className="text-gray-600 text-center">Designing and developing custom applications adjusted to meet your unique business needs, ensuring seamless performance across all devices.</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <IconCircle Icon={DiDatabase} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Database management</h4>
              <p className="text-gray-600 text-center">Providing robust database management solutions to organize, store, and retrieve your data efficiently, ensuring integrity and security.</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <IconCircle Icon={DiAws} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Cloud Automation(CI & CD)</h4>
              <p className="text-gray-600 text-center">Streamlining your development process with Continuous Integration and Continuous Deployment, enhancing productivity and reliability in cloud environments.</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <IconCircle Icon={GiArtificialIntelligence} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">AI Applications</h4>
              <p className="text-gray-600 text-center">Leveraging artificial intelligence to create smart applications that drive efficiency, improve decision-making, and innovate user experiences.</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <IconCircle Icon={TbCube} />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">3D Modelling</h4>
              <p className="text-gray-600 text-center">Creating detailed and accurate 3D models to bring your concepts to life, ideal for simulations, visualizations, and interactive media.</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}