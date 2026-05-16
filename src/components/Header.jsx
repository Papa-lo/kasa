import { NavLink } from "react-router-dom";
import "./Header.scss"
import logoKasa from "../assets/logoKasa.png"





//****************************************************************************************************/

//Création composant Header.
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