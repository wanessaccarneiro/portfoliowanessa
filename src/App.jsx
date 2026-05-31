import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Specialties from './components/Specialties'
import Cognis from './components/Cognis'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <nav>
        <a href="#hero">Início</a>
        <a href="#about">Sobre</a>
        <a href="#specialties">Áreas</a>
        <a href="#cognis">Cognis</a>
        <a href="#contacts">Contato</a>
      </nav>
      <Hero />
      <div className="divider" />
      <About />
      <div className="divider" />
      <Specialties />
      <div className="divider" />
      <Cognis />
      <div className="divider" />
      <Contacts />
      <Footer />
    </>
  )
}
