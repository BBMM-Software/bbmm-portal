export default function PrivacyPolicy() {
    return (
        <div className="w-full pt-32 md:pt-40 xl:px-80 mx-auto px-4 py-8 bg-gray-100 text-gray-700">
            <div className="bg-white shadow-md rounded-lg overflow-hidden relative p-6">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-purple-200 rounded-full"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-300 rounded-full"></div>

                <div className="relative z-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Privacy Policy</h1>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-purple-700">Contact Information</h2>
                        <p className="mb-2">Email: <a href="mailto:contact@bbmmsoftware.com"
                                                      className="text-purple-600 hover:underline">contact@bbmmsoftware.com</a>
                        </p>
                        <p>Website: <a href="https://bbmmsoftware.com" target="_blank" rel="noopener noreferrer"
                                       className="text-purple-600 hover:underline">bbmmsoftware.com</a></p>
                        <p>Phone: <a href="tel:+407250725" className="text-purple-600 hover:underline">+40 725 0725</a>
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-purple-700">Data Collection</h2>
                        <p>We do not collect data by analyzing website traffic. Your personal data is not tracked or
                            stored.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-purple-700">Client Contact</h2>
                        <p>Our primary means of communication with clients is via email. We ensure that all
                            communications are conducted professionally and in compliance with applicable laws.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-purple-700">Accuracy of Information</h2>
                        <p>We do not take responsibility for the correctness of the information presented on our
                            website. We strive to provide accurate and up-to-date information, but errors can occur.</p>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-lg font-semibold mb-3 text-purple-700">Terms and Conditions</h2>
                        <p>The terms and conditions for each project we undertake will be negotiated separately to
                            ensure clarity and mutual agreement.</p>
                    </section>

                    <p className="text-sm italic">
                        This privacy policy is subject to change without notice and was last updated on 14.03.2024 . If you
                        have any questions feel free to contact us directly.
                    </p>
                </div>
            </div>
        </div>
    );
}
