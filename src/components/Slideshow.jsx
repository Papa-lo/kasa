import { useState } from "react";
import arrowLeft from "../assets/arrowLeft.png"
import arrowRight from "../assets/arrowRight.png"
import "./Slideshow.scss"

const Slideshow = ({images, titre}) => {
    const [indexImage, changerIndex] = useState(0)

    const imagePrecedente = () => {
        if (indexImage === 0) {
            changerIndex(images.length - 1)
        } else {
            changerIndex(indexImage - 1)
        }
    }
    
    const imageSuivante = () => {
        if (indexImage === images.length - 1) {
            changerIndex(0)
        } else {
            changerIndex(indexImage + 1)
        }    
    }

    return (
        <div className="slideshow-container">
        <img src={images[indexImage]} alt={titre} />
        {images.length > 1 && (
            <>
                <button className="arrow-left" onClick={imagePrecedente}>
                    <img src={arrowLeft} alt="Précédent" />
                </button>
                
                <button className="arrow-right" onClick={imageSuivante}>
                    <img src={arrowRight} alt="Suivant" />
                </button>

                <span className="slide-counter">{indexImage+1}/{images.length}</span>
            </>
        )}
        </div> 
    )
}

export default Slideshow