import './Styles/App.css'
import { Routes, Route } from 'react-router-dom'
import StartPage from './Pages/StartPage'
import Menu from './Pages/Menu'
import About from './Pages/About'
import Contact from './Pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
