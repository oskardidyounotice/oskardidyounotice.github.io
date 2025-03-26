import { FC, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import HomeCases from './components/HomeCases'
import Case from './pages/Case'
import CaseStudy from './pages/CaseStudy'
import './App.css'

const ScrollToTop: FC = () => {
  const location = useLocation()

  useEffect(() => {
    // Force scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
    // Backup scroll reset
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [location.pathname])

  return null
}

const App: FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full relative">
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <main className="flex-grow">
                <Hero 
                  name="Oskar Sjöberg"
                  tagline="Let's deep dive in design, user behaviours, patterns and more together!"
                  email="oskar.filip.sjoberg@gmail.com"
                  linkedIn="https://linkedin.com/in/oskarsjoberg1/"
                />
                <HomeCases />
              </main>
            } />
            <Route path="/case" element={<Case />} />
            <Route path="/case/:id" element={
              <CaseStudy 
                name="Oskar Sjöberg"
                tagline="Let's deep dive in design, user behaviours, patterns and more together!"
                email="oskar.filip.sjoberg@gmail.com"
                linkedIn="https://linkedin.com/in/oskarsjoberg1/"
              />
            } />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  )
}

export default App
