import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner/Banner";
import AuthProvider from "../components/AuthProvider/AuthProvider";






const Home = () => {
    const cards = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            {cards.map(card =><AuthProvider key={card.id} card={card}></AuthProvider>)}
        </div>
    );
};

export default Home;