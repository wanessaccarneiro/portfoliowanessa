import photo from '../assets/wanessa_cuidado_humano.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <span className="hero-greeting">🧠 Psicologia & Neurociência</span>
        <h1>Cuidado humano e ciência para o desenvolvimento da sua mente</h1>
        <p className="hero-role">Wanessa Costa Carneiro</p>
        <p className="hero-tagline">
          Olhar clínico especializado em Psicoterapia, Avaliação Neuropsicológica e
          Estimulação Cognitiva.
        </p>
        <a
          href="https://wa.me/5585991407651"
          target="_blank"
          rel="noopener"
          className="hero-cta"
        >
          Agendar uma Consulta
        </a>
      </div>
      <div className="hero-photo-wrapper fade-in">
        <div className="hero-photo-frame">
          <img src={photo} alt="Wanessa Costa Carneiro" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
