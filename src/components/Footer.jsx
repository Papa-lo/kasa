import "./Footer.scss"
import logoWhite from "../assets/logoWhite.png"






//****************************************************************************************************/

//Création composant Footer.
const Footer = () => {
    
    return (
        <footer>
            <img src={logoWhite} alt="Logo Kasa" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer