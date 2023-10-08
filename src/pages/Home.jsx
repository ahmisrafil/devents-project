import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import Cards from "../components/ServiceCards/Cards";
import Footer from "../components/Footer/Footer";
import Subscription from "../components/Subscription/Subscription";


const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div>
                <h3 className="text-center text-4xl font-mono font-bold mt-10 ">Our Services</h3>
            </div>
            <Cards cards={cards}></Cards>
            <div className="text-center mt-16">
                <h3> <span className="text-4xl font-bold font-mono">Purchase a Plan</span> <br /> & <br /> Let us manage your events </h3>
            </div>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;

