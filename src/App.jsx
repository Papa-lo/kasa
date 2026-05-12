import { BrowserRouter } from 'react-router-dom'

import Router from './Router'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.scss'

function App() {
  return (
    <BrowserRouter>
      <header><Header /></header>
      <main><Router /></main>
      <footer><Footer /></footer>
    </BrowserRouter>
  )
}

export default App
