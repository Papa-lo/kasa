import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Error from './pages/Error'


//****************************************************************************************************/

//Création Router.
const Router = () => {
    return (        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/logement/:idLogement" element={<Logement />} />
            <Route path="/404" element={<Error />} />
            <Route path="*" element={<Error />} />
        </Routes>        
    );
}

export default Router