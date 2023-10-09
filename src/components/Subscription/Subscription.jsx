import AosConfig from "../AOS/Aos.config";


const Subscription = () => {
    return (
        
            <div className="flex flex-col items-center  justify-center lg:flex-row my-20">
                <div data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
                <div className=" flex flex-col items-center shadow-lg w-[250px]">
                    <div className="bg-[rgb(215,17,215)]  h-[80px] w-[250px] rounded-t-lg">
                    </div>
                    <div className="rounded-full border-4 bg-[hsl(300,85%,45%)] text-center h-[80px] w-[80px] absolute mt-5 ">
                        <h2 className="p-2 font-semibold text-white ">$4000 <br />
                            <span className="text-sm font-normal -mt-10">/month</span>
                        </h2>
                    </div>
                    <div className=" w-[250px] text-center my-8">
                        <h3 className="font-bold text-[hsl(300,58%,55%)] mb-4">BASIC</h3><hr />
                        <p className="my-4 mx-2">Access to resources such as event planning templates, checklists to organize your events</p>
                        <h5 className="text-left mx-6 font-bold my-2">Access to Event Resources</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Monthly Webinars</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Email Support</h5>
                    </div>
                    <div>
                        <button className="btn btn-secondary  bg-[hsl(300,85%,45%)] -mb-4 rounded-full">Subscribe</button>
                    </div>
                </div>
                </div>

                {/* second card */}

                <div data-aos="flip-left"
     data-aos-easing="ease-in-cubic"
     data-aos-duration="2000">
                <div className="my-8 mx-8 flex flex-col items-center shadow-lg w-[250px] lg:w-[300px]">
                    <div className="bg-[rgb(37,246,18)]  h-[80px] lg:h-[120px] w-[250px] lg:w-[300px] rounded-t-lg">
                    </div>
                    <div className="rounded-full border-4 bg-[rgb(37,246,18)] text-center h-[80px] w-[80px] absolute mt-5 ">
                        <h2 className="p-2 font-semibold text-white ">$6000 <br />
                            <span className="text-sm font-normal -mt-10">/month</span>
                        </h2>
                    </div>
                    <div className=" w-[250px] text-center my-8">
                        <h3 className="font-bold text-[rgb(37,246,18)] mb-4">STANDARD</h3><hr />
                        <p className="my-4 mx-2">Get discount on one-on-one event planning consultations to address specific questions or challenges </p>
                        <h5 className="text-left mx-6 font-bold my-2">Discounted Event Planning</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Exclusive Content</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Community Forum Access</h5>
                    </div>
                    <div>
                        <button className="btn btn-secondary border-none  bg-[rgb(37,246,18)] -mb-4 rounded-full">Subscribe</button>
                    </div>
                </div>

                </div>
                {/* third card */}
                <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
                <div className="my-8 flex flex-col items-center shadow-lg w-[250px]">
                    <div className="bg-[rgb(77,145,234)]  h-[80px] w-[250px] rounded-t-lg">
                    </div>
                    <div className="rounded-full border-4 bg-[rgb(77,145,234)] text-center h-[80px] w-[80px] absolute mt-5 ">
                        <h2 className="p-2 font-semibold text-white ">$8000 <br />
                            <span className="text-sm font-normal -mt-10">/month</span>
                        </h2>
                    </div>
                    <div className=" w-[250px] text-center my-8">
                        <h3 className="font-bold text-[rgb(77,145,234)] mb-4">STANDARD</h3><hr />
                        <p className="my-4 mx-2">Personalized event planning assistance with one-on-one consultations with our experts with advice & guidance</p>
                        <h5 className="text-left mx-6 font-bold my-2">Event Planning Assistance</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Email and Phone Support</h5><hr />
                        <h5 className="text-left mx-6 font-bold my-2">Exclusive Events</h5>
                    </div>
                    <div>
                        <button className="btn btn-secondary  bg-[rgb(77,145,234)] -mb-4 rounded-full border-none">Subscribe</button>
                    </div>
                </div>
                </div>
            </div>


    );
};
AosConfig();
export default Subscription;