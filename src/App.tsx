import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fonctionnalites from './pages/Fonctionnalites'
import Temoignages from './pages/Temoignages'
import Tarifs from './pages/Tarifs'
import MentionsLegales from './pages/MentionsLegales'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fonctionnalites" element={<Fonctionnalites />} />
          <Route path="/temoignages" element={<Temoignages />} />
          <Route path="/tarifs" element={<Tarifs />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
