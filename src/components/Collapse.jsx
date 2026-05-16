import { useState } from "react";

import './Collapse.scss'
import Arrow from "../assets/arrow.png"




//****************************************************************************************************/

//Création composant Collapse.
const Collapse = ({titre, contenu}) => {
    
    // Déconstruit le tableau renvoyé par useState :
    const [statut, changeStatut] = useState (false)

    const changerEtat = () => {//Click

        if (statut === true) {
            changeStatut(false)
        } else {
            changeStatut(true)
        }
    }


    return (

        <div className="collapse">

            <button>
                <p>{titre}</p><img onClick={changerEtat} className={statut ? "fleche haut" : "fleche"} src={Arrow} alt="" />
            </button>

            <div className={statut ? "contenu ouvert" : "contenu"}>
                <div>{contenu}</div>
            </div>
            
        </div>
    )
}

export default Collapse