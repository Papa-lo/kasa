import { NavLink } from "react-router-dom";
import logoKasa from "../assets/logoKasa.png"
import "./Header.scss"

const Header = () => {
    return (
        <header>
        <img src={logoKasa} alt="Logo Kasa" />
        <nav>
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/a-propos">A propos</NavLink>
        </nav>
        </header>
    )
}

export default Header