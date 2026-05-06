import './App.scss'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header'


function App() {
  return (
    <BrowserRouter>
      <header><Header /></header>
      <main><Router /></main>
      <footer>Je suis le footer</footer>
    </BrowserRouter>
  )
}

export default App
