import Logo from '../utils/logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Top area: Blocks */}
        <div className="sm:grid-cols-12 p-2 gap-8 py-8 md:py-12 border-t border-gray-200 flex justify-between content-center">

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/#productsSection" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Freelancing Services</a>
              </li>
              <li className="mb-2">
                <a href="/#productsSection" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company Compass</a>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="/about-us" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</a>
              </li>
              <li className="mb-2">
                <a href="/privacy-policy" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* 5th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-3 flex flex-col items-center">
            <h6 className="text-gray-800 font-medium mb-2">Contact</h6>
            <div className="w-full flex h-full flex-wrap">
              <a className="text-l text-purple-600 mb-4 font-bold break-all" href="mailto:contact@bbmmsoftware.com">contact@bbmmsoftware.com</a>
            </div>
          </div>

        </div>

        {/* Bottom area */}
        <div className="flex items-center justify-between py-4 md:py-8 border-t border-gray-200">

          
          {/* Copyrights note */}
          <div className="w-12">
                <Logo />
          </div>
          <div id="contactSection" className="text-sm text-gray-600 mr-4">&copy; bbmmsoftware.com All rights reserved.</div>

        </div>

      </div>
    </footer>
  )
}
