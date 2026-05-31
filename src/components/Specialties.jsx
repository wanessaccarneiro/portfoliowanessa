const specialties = [
  {
    icon: '🧠',
    title: 'Psicologia Clínica',
    desc: 'Atendimento psicoterápico focado no acolhimento de demandas emocionais, autoconhecimento e saúde mental, ajudando a lidar com os desafios do cotidiano.',
  },
  {
    icon: '📝',
    title: 'Avaliação Neuropsicológica',
    desc: 'Investigação detalhada das funções cognitivas (como memória, atenção e linguagem). Essencial para auxiliar em diagnósticos precisos e direcionar tratamentos de forma eficaz.',
  },
  {
    icon: '💡',
    title: 'Estimulação Cognitiva',
    desc: 'Treinamento e intervenções práticas voltadas para potencializar ou reabilitar as funções cerebrais, promovendo mais autonomia e bem-estar em diferentes fases da vida.',
  },
]

export default function Specialties() {
  return (
    <section className="content-section" id="specialties">
      <p className="section-label fade-in">Áreas de Atuação</p>
      <h2 className="section-title fade-in">Como posso te ajudar?</h2>
      <div className="specialties-grid">
        {specialties.map((s, i) => (
          <div className="specialty-card fade-in" key={i}>
            <div className="specialty-icon">{s.icon}</div>
            <h3 className="specialty-title">{s.title}</h3>
            <p className="specialty-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
