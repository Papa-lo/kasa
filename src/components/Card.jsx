import { Link } from "react-router-dom";
import './Card.scss'

const Card = ({ cardtitle, cardimage, cardid }) => {
    return (
        <Link className="cartes" to={`/logement/${cardid}`}>
            <img src={cardimage} alt={cardtitle}/>
            <h3>{cardtitle}</h3>
        </Link>
    )
}

export default Card