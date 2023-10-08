import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceDetails = () => {
    const [service, setService] = useState({});
    const { id } = useParams();
    const services = useLoaderData();


    useEffect(() => {
        const findService = services?.find(service => service.id == id);
        setService(findService);
    }, [id, services])
    
    const {name, description, price, image} = service;

    return (
        <div className="card  bg-base-100 shadow-xl my-6">
            <figure><img className="w-2/3 rounded-lg" src={image} alt="image" /></figure>
            <div className="mx-auto w-2/3">
                
                <div className="mb-20">
                    <h2 className="card-title text-4xl font-bold mb-6">{name}</h2>
                    <h3 className="text-xl font-semibold mb-6">Price: {price}</h3>
                    <p className="text-base font-normal text-slate-500">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;