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
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;

