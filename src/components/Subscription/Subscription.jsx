

const Subscription = () => {
    return (
        <div className="flex flex-col items-center mx-auto lg:flex-row my-20">
            <div className=" flex flex-col items-center shadow-lg w-[250px]">
                <div className="bg-[rgb(215,17,215)]  h-[80px] w-[250px] rounded-t-lg">
                </div>
                <div className="rounded-full border-4 bg-[hsl(300,85%,45%)] text-center h-[80px] w-[80px] absolute mt-5 ">
                    <h2 className="p-2 font-semibold text-white ">$1000 <br />
                        <span className="text-sm font-normal -mt-10">/month</span>
                    </h2>
                </div>
                <div className=" w-[250px] text-center my-8">
                    <h3 className="font-bold text-[hsl(300,58%,55%)] mb-4">STANDARD</h3><hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eos!</p>
                    <h5 >Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5>
                </div>
                <div>
                    <button className="btn btn-secondary  bg-[hsl(300,85%,45%)] -mb-4 rounded-full">Subscribe</button>
                </div>
            </div>
        {/* second card */}

            <div className="my-8 mx-8 flex flex-col items-center shadow-lg w-[250px] lg:w-[300px]">
                <div className="bg-[rgb(37,246,18)]  h-[80px] lg:h-[120px] w-[250px] lg:w-[300px] rounded-t-lg">
                </div>
                <div className="rounded-full border-4 bg-[rgb(37,246,18)] text-center h-[80px] w-[80px] absolute mt-5 ">
                    <h2 className="p-2 font-semibold text-white ">$1000 <br />
                        <span className="text-sm font-normal -mt-10">/month</span>
                    </h2>
                </div>
                <div className=" w-[250px] text-center my-8">
                    <h3 className="font-bold text-[rgb(37,246,18)] mb-4">STANDARD</h3><hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eos!</p>
                    <h5 >Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5>
                </div>
                <div>
                    <button className="btn btn-secondary border-none  bg-[rgb(37,246,18)] -mb-4 rounded-full">Subscribe</button>
                </div>
            </div>
        {/* third card */}

            <div className="my-8 flex flex-col items-center shadow-lg w-[250px]">
                <div className="bg-[rgb(77,145,234)]  h-[80px] w-[250px] rounded-t-lg">
                </div>
                <div className="rounded-full border-4 bg-[rgb(77,145,234)] text-center h-[80px] w-[80px] absolute mt-5 ">
                    <h2 className="p-2 font-semibold text-white ">$1000 <br />
                        <span className="text-sm font-normal -mt-10">/month</span>
                    </h2>
                </div>
                <div className=" w-[250px] text-center my-8">
                    <h3 className="font-bold text-[rgb(77,145,234)] mb-4">STANDARD</h3><hr />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, eos!</p>
                    <h5 >Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5><hr />
                    <h5>Lorem ipsum dolor sit amet.</h5>
                </div>
                <div>
                    <button className="btn btn-secondary  bg-[rgb(77,145,234)] -mb-4 rounded-full border-none">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Subscription;