import { useState } from "react";//Importe depuis React une fonction
//spéciale qui crée une mémoire(un tableau) qui contient un "statut"
// et le surveille.
import './Collapse.scss'
import Arrow from "../assets/arrow.png"

const Collapse = ({titre, contenu}) => {//Création composant menu deroulant.
    
    // Déconstruit le tableau renvoyé par useState :
    const [statut, changeStatut] = useState (false)

    const changerEtat = () => {//Ce que fait le click
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