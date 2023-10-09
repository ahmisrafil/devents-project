

const ContactUs = () => {
    return (
        <div style={{ backgroundImage: 'url(https://i.ibb.co/S5qcc8x/Untitled-design.png)' }} className="flex justify-center">
            <section className=" bg-gray-100 py-16 hero-overlay bg-opacity-80">
                <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-4">
                            Contact Us
                        </h2>
                        <p className="text-gray-600 mb-6">
                            We'd love to hear from you! Reach out to us for any questions or inquiries.
                        </p>
                        <form className="space-y-4">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-600 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-gray-600 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-gray-600 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ContactUs;