import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <Link to="/">Page d'accueil</Link>
            <Link to="/a-propos">A propos</Link>
        </nav>
    )
}

export default Header