import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fonctionnalites from './pages/Fonctionnalites'
import Tarifs from './pages/Tarifs'
import MentionsLegales from './pages/MentionsLegales'
import RegisterCollectivite from './pages/auth/RegisterCollectivite'
import LoginCollectivite from './pages/auth/LoginCollectivite'
import LoginEquipe from './pages/auth/LoginEquipe'
import DashboardCollectivite from './pages/dashboards/DashboardCollectivite'
import DashboardEquipe from './pages/dashboards/DashboardEquipe'
import { AuthProvider } from './auth/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-camplyze-bg">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fonctionnalites" element={<Fonctionnalites />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/register-collectivite" element={<RegisterCollectivite />} />
            <Route path="/login-collectivite" element={<LoginCollectivite />} />
            <Route path="/login-equipe" element={<LoginEquipe />} />
            <Route path="/dashboard-collectivite" element={<DashboardCollectivite />} />
            <Route path="/dashboard-equipe" element={<DashboardEquipe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
