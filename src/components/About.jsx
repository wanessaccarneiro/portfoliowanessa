import photo from '../assets/wanessa_conheca_profissional.jpeg'

export default function About() {
  return (
    <section className="content-section" id="about">
      <div className="about-layout">
        <div className="about-photo-wrapper fade-in">
          <div className="about-photo-frame">
            <img src={photo} alt="Wanessa Costa Carneiro" className="about-photo" />
          </div>
        </div>
        <div className="about-text">
          <p className="section-label fade-in">Sobre Mim</p>
          <h2 className="section-title fade-in">Conheça a sua profissional</h2>
          <p className="content-text fade-in">
            Olá, sou Wanessa Costa Carneiro. Minha trajetória na psicologia é guiada pelo
            compromisso de entender a singularidade de cada indivíduo, unindo o acolhimento da
            psicologia clínica à precisão das neurociências.
          </p>
          <p className="content-text fade-in">
            Como cofundadora da Cognis, busco proporcionar um espaço seguro e técnico para que meus
            pacientes compreendam seu funcionamento cognitivo e emocional, superem desafios e
            alcancem maior qualidade de vida e autonomia.
          </p>
        </div>
      </div>
    </section>
  )
}
