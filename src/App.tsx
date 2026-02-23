import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ProgramsPage } from './pages/ProgramsPage'
import { SchedulePage } from './pages/SchedulePage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/schedule" element={<SchedulePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
