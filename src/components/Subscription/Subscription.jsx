

const Subscription = () => {
    return (
        <div className="my-20 flex flex-col items-center shadow-lg w-[250px]">
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
                <h5>Lorem ipsum dolor sit amet.</h5><hr />
                <h5>Lorem ipsum dolor sit amet.</h5><hr />
                <h5>Lorem ipsum dolor sit amet.</h5>
            </div>
            <div>
                <button className="btn btn-secondary  bg-[hsl(300,85%,45%)] -mb-4 rounded-full">Subscribe</button>
            </div>
        </div>
    );
};

export default Subscription;