import { useEffect } from "react";//Quand X change → fais ça
import { useLocation } from "react-router-dom";//Où suis-je dans le site ?






//****************************************************************************************************/

//Création composant ScrollToTop.
const ScrollToTop = () => {
    
    const { pathname } = useLocation();//useLocation écoute en permanence l'URL (ex: /logement/c67ab43a)

    useEffect(() => {//Si URL change

        window.scrollTo(0, 0);//On remonte tout en haut

    }, [pathname]); //Le crochet [pathname] dit : "Réagis UNIQUEMENT si l'URL change"

    return null; //Ce composant n'affiche rien à l'écran
};

export default ScrollToTop;