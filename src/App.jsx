import styles from './App.module.css'

function App() {
  const championships = [
    {
      id: 1,
      name: 'Libertadores',
      icon: '/images/libertadores.jpg',
      titles: 4,
      years: '1981, 1982, 2019, 2022'
    },
    {
      id: 2,
      name: 'Campeonato Brasileiro',
      icon: '/images/CBrasileiro.png',
      titles: 9,
      years: '1980, 1982, 1983, 1987, 1992, 1999, 2009, 2019, 2025'
    },
    {
      id: 3,
      name: 'Copa do Brasil',
      icon: '/images/copaDbrasil.webp',
      titles: 4,
      years: '1990, 2006, 2013, 2022'
    },
    {
      id: 4,
      name: 'Campeonato Carioca',
      icon: '/images/carioca.webp',
      titles: 37,
      years: '1907, 1908, 1910... (37 títulos)'
    },
    {
      id: 5,
      name: 'Recopa Sul-Americana',
      icon: '/images/recopa.png',
      titles: 1,
      years: '2023'
    },
    {
      id: 6,
      name: 'Taça Guanabara',
      icon: '/images/TG.jpg',
      titles: 24,
      years: 'Múltiplas ocasiões'
    },
  ]

  return (
    <div className={styles.container}>

      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <img src="/images/flamengo.webp" className={styles.logoImg} alt="" />
            <a href="https://www.instagram.com/flamengo/" target="_blank" rel="noopener noreferrer" className={styles.clubName}>FLAMENGO</a>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#home">Início</a></li>
            <li><a href="#titulos">Títulos</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className={`${styles.section} ${styles.section1}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>FUTEBOL</div>
            <h1 className={styles.mainTitle}>
              FLAMENGO VENCE O CEARÁ E CONQUISTA O BRASILEIRÃO PELA NONA VEZ
            </h1>
            <p className={styles.subtitle}>
              Com gol de Samuel Lino, Mengão faz 1 a 0 no Maracanã e levanta o troféu com uma rodada de antecedência
            </p>
            <button className={styles.ctaButton}>Leia a Matéria Completa</button>
          </div>

          <div className={styles.heroCards}>
            <div className={styles.heroCard}>
              <h4>Vídeo: Melhores momentos</h4>
              <p>Assista aos lances e comemorações na FlamengoTV.</p>
            </div>
            <div className={styles.heroCard}>
              <h4>Galeria de Fotos</h4>
              <p>Veja as melhores fotos do jogo no Maracanã.</p>
            </div>
            <div className={styles.heroCard}>
              <h4>Resumo</h4>
              <p>Fla assegura título com atuação sólida e gols decisivos.</p>
            </div>
          </div>
        </div>
        <div className={styles.heroOverlay}></div>
      </section>

      {/* Seção 2 - Campeonatos Vencidos */}
      <section id="titulos" className={`${styles.section} ${styles.section2}`}>
        <div className={styles.championsSection}>
          <h2 className={styles.championsTitle}>Títulos e Campeonatos</h2>
          <p className={styles.championsSubtitle}>História vitoriosa do Flamengo</p>
          
          <div className={styles.championsGrid}>
            {championships.map((championship) => (
              <div key={championship.id} className={styles.championshipCard}>
                <div className={styles.cardIcon}>
                  {typeof championship.icon === 'string' && championship.icon.startsWith('/') ? (
                    <img src={championship.icon} alt={championship.name} className={styles.iconImg} />
                  ) : (
                    championship.icon
                  )}
                </div>
                <h3 className={styles.cardTitle}>{championship.name}</h3>
                <div className={styles.titleCount}>
                  <span className={styles.number}>{championship.titles}</span>
                  <span className={styles.label}>títulos</span>
                </div>
                <p className={styles.cardYears}>{championship.years}</p>
              </div>
            ))}
          </div>

          <div className={styles.totalInfo}>
            <p className={styles.infoText}>
              <img src="/images/trofeus.jpg" alt="" /> <strong>Total de títulos oficiais: 77+</strong>
            </p>
            <p className={styles.infoText}>
              O Flamengo é um dos clubes mais vitoriosos da história do futebol brasileiro
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 - Contatos */}
      <section id="contato" className={`${styles.section} ${styles.section3}`}>
        <div className={styles.contactSection}>
          <h2 className={styles.contactTitle}>Entre em Contato</h2>
          <p className={styles.contactSubtitle}>Fale conosco e seja parte da torcida Rubro-Negra</p>
          
          <div className={styles.contactContent}>
            <div className={styles.contactInfo}>
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📧</div>
                <h3>Email</h3>
                <p><a href="mailto:contato@flamengo.com.br">contato@flamengo.com.br</a></p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📞</div>
                <h3>Telefone</h3>
                <p><a href="tel:+552133347777">(21) 3334-7777</a></p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>📍</div>
                <h3>Endereço</h3>
                <p>Gávea - Rio de Janeiro<br />Ninho do Urubu</p>
              </div>
              
              <div className={styles.infoCard}>
                <div className={styles.infoIcon}>🌐</div>
                <h3>Redes Sociais</h3>
                <div className={styles.socialLinks}>
                  <a href="https://www.instagram.com/flamengo/" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://www.facebook.com/flamengo" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <a href="https://www.twitter.com/flamengo" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
              </div>
            </div>

            <form className={styles.contactForm}>
              <input type="text" placeholder="Seu Nome" required />
              <input type="email" placeholder="Seu Email" required />
              <textarea placeholder="Sua Mensagem" rows="6" required></textarea>
              <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App


