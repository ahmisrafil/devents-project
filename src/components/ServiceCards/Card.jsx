

const Card = ({ card }) => {
    
    const { name, image, price, description } = card;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="image" /></figure>
            <div className="card-body bg-slate-100">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p><small>{description}</small></p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    )
};

export default Card;

