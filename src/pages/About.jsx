import Collapse from "../components/Collapse"
import BanImage2 from "../assets/image-banner2.webp"
import Banner from "../components/Banner"
import "./About.scss"

const About = () => {
    return (
        <>
        <Banner bannertext={""} bannerimage={BanImage2}/>
        <div className="about-collapses">
            <Collapse titre={"Fiabilité"} contenu={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"}/>
            <Collapse titre={"Respect"} contenu={"La bienveillance fait partie des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme"}/>
            <Collapse titre={"Service"} contenu={"La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance"}/>
            <Collapse titre={"Sécurité"} contenu={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aus critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que nos standards sont bien respectés. Nous organisons égalementdes ateliers sur la sécurité domestiques pour nos hôtes"}/>
        </div>
        </>
    )
}

export default About