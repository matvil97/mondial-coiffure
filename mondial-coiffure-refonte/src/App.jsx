import "./App.css";

const services = [
  "Coupe & coiffage",
  "Barbe & contours",
  "Tresses & nattes",
  "Coloration",
  "Soins capillaires",
  "Lissage",
];

const expertise = [
  "Salon mixte : homme, femme, enfant",
  "Expertise coiffure & barbier",
  "Tous types de cheveux",
  "Image premium et professionnelle",
  "Réservation simple et rapide",
  "Situé à Mâcon",
];

const reviews = [
  {
    text: "Très bon accueil, prestation propre et résultat impeccable. Une adresse sérieuse à Mâcon.",
    author: "Client satisfait",
  },
  {
    text: "Salon professionnel, moderne et à l’écoute. Le rendu est toujours net et soigné.",
    author: "Cliente fidèle",
  },
  {
    text: "Dégradé précis, barbe impeccable, ambiance agréable. Je recommande sans hésiter.",
    author: "Client barbier",
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <span className="logo-mark">MW</span>
            <div className="logo-text">
              <span>Mondial Coiffure</span>
              <small>Black & White · Mâcon</small>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">Salon</a>
            <a href="#services">Prestations</a>
            <a href="#expertise">Expertise</a>
            <a href="#reviews">Avis</a>
            <a href="#contact">Contact</a>
          </nav>

          <a className="btn btn-light" href="#contact">
            Réserver
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay"></div>

          <div className="container hero-inner">
            <div className="hero-topline reveal reveal-1">
              <span>Mâcon</span>
              <span>Salon de coiffure & barbier</span>
            </div>

            <div className="hero-title-wrap">
              <div className="title-line-mask">
                <h1 className="hero-title reveal-title reveal-title-1">BLACK</h1>
              </div>
              <div className="title-line-mask">
                <h1 className="hero-title reveal-title reveal-title-2">& WHITE</h1>
              </div>
            </div>

            <p className="hero-subtitle reveal reveal-2">
              Une nouvelle vision du salon : minimaliste, premium, précis.
              Coupe, barbe, tresses, coloration, soins et coiffure mixte dans
              une interface pensée pour marquer dès le premier regard.
            </p>

            <div className="hero-actions reveal reveal-3">
              <a className="btn btn-light" href="#contact">
                Réserver maintenant
              </a>
              <a className="btn btn-outline" href="#services">
                Découvrir les prestations
              </a>
            </div>

            <div className="hero-meta reveal reveal-4">
              <div>
                <span>Adresse</span>
                <strong>328 Quai Jean Jaurès, 71000 Mâcon</strong>
              </div>
              <div>
                <span>Horaires</span>
                <strong>Lundi — Samedi · 09:00 — 19:00</strong>
              </div>
              <div>
                <span>Contact</span>
                <strong>06 52 87 33 69</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container about-grid">
            <div className="section-label">01 / Le concept</div>

            <div className="about-content">
              <h2>Une identité forte. Une présence premium. Une lecture claire.</h2>
              <p>
                Cette refonte place Mondial Coiffure dans un univers plus
                contemporain, plus haut de gamme et plus impactant. L’idée n’est
                pas seulement de présenter les services, mais de faire ressentir
                immédiatement le niveau de style, de précision et de modernité
                du salon.
              </p>
              <p>
                Le noir et blanc devient ici une vraie signature visuelle :
                élégant, urbain, intemporel. Chaque section est pensée pour
                valoriser l’image du salon et pousser naturellement à la prise
                de rendez-vous.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="section-head">
              <div className="section-label">02 / Prestations</div>
              <h2>Des services lisibles, structurés, désirables.</h2>
            </div>

            <div className="services-list">
              {services.map((service, index) => (
                <article className="service-row" key={service}>
                  <span className="service-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{service}</h3>
                  <span className="service-arrow">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section expertise">
          <div className="container expertise-grid">
            <div className="section-label light">03 / Expertise</div>

            <div className="expertise-content">
              <h2>Une interface qui inspire confiance dès les premières secondes.</h2>
              <div className="expertise-list">
                {expertise.map((item) => (
                  <div className="expertise-item" key={item}>
                    <span></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section showcase">
          <div className="container">
            <div className="section-head">
              <div className="section-label">04 / Direction visuelle</div>
              <h2>Minimalisme radical, impact maximal.</h2>
            </div>

            <div className="showcase-grid">
              <div className="showcase-card large">
                <span>Interface noir & blanc</span>
                <strong>Design éditorial premium</strong>
              </div>
              <div className="showcase-card">
                <span>Structure claire</span>
                <strong>Navigation rapide</strong>
              </div>
              <div className="showcase-card">
                <span>Conversion</span>
                <strong>CTA réservation visibles</strong>
              </div>
              <div className="showcase-card">
                <span>Image de marque</span>
                <strong>Présence plus haut de gamme</strong>
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section reviews">
          <div className="container">
            <div className="section-head">
              <div className="section-label">05 / Avis</div>
              <h2>Une perception renforcée par la preuve sociale.</h2>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <article className="review-card" key={review.author + review.text}>
                  <div className="review-stars">★★★★★</div>
                  <p>{review.text}</p>
                  <strong>{review.author}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="contact-left">
              <div className="section-label">06 / Contact</div>
              <h2>Prêt à passer à une image plus forte ?</h2>
            </div>

            <div className="contact-right">
              <div className="contact-line">
                <span>Adresse</span>
                <strong>328 Quai Jean Jaurès, 71000 Mâcon</strong>
              </div>
              <div className="contact-line">
                <span>Téléphone</span>
                <strong>06 52 87 33 69</strong>
              </div>
              <div className="contact-line">
                <span>Horaires</span>
                <strong>Lundi au samedi · 09:00 à 19:00</strong>
              </div>

              <div className="contact-actions">
                <a className="btn btn-dark" href="tel:+33652873369">
                  Appeler le salon
                </a>
                <a className="btn btn-outline-dark" href="#">
                  Lien de réservation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <span>© 2026 Mondial Coiffure / Black & White</span>
          <span>Refonte concept premium · React</span>
        </div>
      </footer>
    </div>
  );
}