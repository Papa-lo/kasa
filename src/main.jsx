import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.scss'



//****************************************************************************************************/

//Création main.
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>,
)
