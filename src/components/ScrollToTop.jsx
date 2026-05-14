import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // useLocation écoute en permanence l'URL (ex: /logement/c67ab43a)
    const { pathname } = useLocation();

    useEffect(() => {
        // Dès que l'URL change, on remonte tout en haut
        window.scrollTo(0, 0);
    }, [pathname]); // Le crochet [pathname] dit : "Réagis UNIQUEMENT si l'URL change"

    return null; // Ce composant n'affiche absolument rien à l'écran
};

export default ScrollToTop;