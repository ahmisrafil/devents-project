import { Link } from "react-router-dom";


const Card = ({ card }) => {
    
    const { id, name, image, price, description } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body bg-slate-100">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p><small>{description}</small></p>
                <div className="card-actions justify-end">
                    <Link to={`/service/${id}`}>
                    <button className="btn btn-primary">Details</button>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Card;

