import PropTypes from 'prop-types';
import Card from "../ServiceCards/Card";

const Cards = ({cards}) => {
    
    return (
        <div className="grid grid-cols-1  lg:grid-cols-3 mx-10 md:mx-16 lg:mx-20 my-10 gap-4">
            {cards.map(card =><Card key={card.id} card={card}></Card>)}
        </div>
    );
};

export default Cards;

Cards.proptype={
    children : PropTypes.node
}
