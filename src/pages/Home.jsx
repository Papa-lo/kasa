import logements from "../data/logements.json"
import Card from "../components/Card"
import Banner from "../components/Banner"
import './Home.scss'
import BanImage from "../assets/image-banner.webp"



//****************************************************************************************************/

//Création PAGE Home.
const Home = () => {
    return (
        
        <>
            <Banner bannertext="Chez vous, partout et ailleurs" bannerimage={BanImage} />
            <div className="cards-grid">
                {logements.map((logement) => (
                    <Card key={logement.id} cardid={logement.id} cardtitle={logement.title} cardimage={logement.cover}/>
                ))}
            </div>
        </>
    )
}

export default Home
