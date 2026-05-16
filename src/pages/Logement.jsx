import { useParams, Navigate } from "react-router-dom"
import logements from "../data/logements.json"
import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import "./Logement.scss"



//****************************************************************************************************/

//Création PAGE Logement.
const Logement = () => {

    const { idLogement } = useParams()

    const logementTrouve = logements.find((logement) => logement.id === idLogement)
    //Crée variable logementTrouve. Prends tableau logements. .find() : Cherche dans tableau logements (fichier json)
    //Pour chaque élément du tableau, appelle-le temporairement logement.
    //Si id de ce logement strictement égal (===) à id récupéré dans l'URL par useParams. alors stocke-le dans logementTrouve.

    if (!logementTrouve) {
        return <Navigate to= "/404" replace/>
    }

    const note = [1, 2, 3, 4, 5];

    
    return (
        <>

        <section className="logement-container">
            <Slideshow images={logementTrouve.pictures} titre={logementTrouve.title}/>
        
            <div className="logement-infos">

                {/* PARTIE GAUCHE */}
                <div className="logement-left">
                    <h1>{logementTrouve.title}</h1>
                    <p>{logementTrouve.location}</p>
                    <div className="tags">
                        {logementTrouve.tags.map((tag, index) => (
                            <span key={index}>{tag}</span>
                        ))}
                    </div>
                </div>
                
                {/* PARTIE DROITE */}
                <div className="logement-right">
                    <div className="host">
                        <span>{logementTrouve.host.name}</span>
                        <img src={logementTrouve.host.picture} alt={logementTrouve.host.name} />
                    </div>
                    
                    <div className="rating">
                        {/* On utilise map pour afficher 5 étoiles, et on les colore selon la note */}
                        {note.map((etoile) => (
                            <span key={etoile} className={etoile <= parseInt(logementTrouve.rating) ? "star-active" : "star-inactive"}>★</span>
                        ))}
                    </div>
                </div>

                

            </div>

            {/* LES COLLAPSES : */}
            <div className="logement-collapses">
                <Collapse titre={"Description"} contenu={logementTrouve.description} />
            
                <Collapse titre={"Équipements"} contenu={
                    <ul>
                        {logementTrouve.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    </ul>
                }/>
            </div>
            

        </section>

        </>
    )
}

export default Logement