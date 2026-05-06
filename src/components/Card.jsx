import './Card.scss'

const Card = ({ cardtitle, cardimage }) => {
    return (
        <article>
            <img src={cardimage} alt={cardtitle}/>
            <h3>{cardtitle}</h3>
        </article>
    )
}

export default Card