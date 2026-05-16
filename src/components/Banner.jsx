







//****************************************************************************************************/

//Création composant Banner.
const Banner = ({ bannertext, bannerimage }) => {
    
    return (
        <div className="banner" style={{ backgroundImage: `url(${bannerimage})` }}>
            <h1>{bannertext}</h1>
        </div>
    )
}

export default Banner