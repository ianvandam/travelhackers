export default function Home() {
  return (
    <main className="main">

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1>Unieke reizen. Zonder gedoe.</h1>
          <p>
            Ik plan jouw trip volledig op maat — goedkoper, slimmer en persoonlijk.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Gratis intake</a>
            <a href="#portfolio" className="btn-secondary">Bekijk reizen</a>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="trust">
        <p>✔ Persoonlijk • ✔ Uniek • ✔ Betaalbaar</p>
      </section>

      {/* HOE HET WERKT */}
      <section className="section">
        <h2>Hoe het werkt</h2>
        <div className="grid">
          <div className="card">
            <h3>1. Intake</h3>
            <p>Korte call over jouw wensen</p>
          </div>
          <div className="card">
            <h3>2. Plan</h3>
            <p>Volledig reisplan op maat</p>
          </div>
          <div className="card">
            <h3>3. Genieten</h3>
            <p>Jij boekt & gaat zorgeloos</p>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="section alt">
        <h2>Voorbeeldreizen</h2>
        <div className="grid">

          {/* DUPLICEER LATER */}
          {[1,2,3].map((i) => (
            <div key={i} className="trip-card">
              <div className="image-placeholder"></div>
              <h3>Reis titel</h3>
              <p>Korte beschrijving van de trip</p>
              <span className="tag">€ Budget</span>
            </div>
          ))}

        </div>
      </section>

      {/* REVIEWS */}
      <section className="section">
        <h2>Reviews</h2>
        <div className="grid">
          <div className="review">“Beste trip ooit”</div>
          <div className="review">“Alles perfect geregeld”</div>
          <div className="review">“Zou dit iedereen aanraden”</div>
        </div>
      </section>

      {/* PRIJZEN */}
      <section className="section alt">
        <h2>Prijzen</h2>
        <div className="grid">
          <div className="price-card">
            <h3>Gratis intake</h3>
            <p>Start hier</p>
          </div>
          <div className="price-card highlight">
            <h3>Reisplan</h3>
            <p>€XX</p>
          </div>
          <div className="price-card">
            <h3>Complete trip</h3>
            <p>€XX</p>
          </div>
        </div>
      </section>

      {/* NIEUWSBRIEF */}
      <section className="newsletter">
        <h2>Gratis reisroutes</h2>
        <p>Ontvang verborgen plekken</p>
        <input placeholder="Email" />
        <button className="btn-primary">Aanmelden</button>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <h2>Plan intake</h2>
        <form className="form">
          <input placeholder="Naam" />
          <input placeholder="Bestemming" />
          <input placeholder="Budget" />
          <textarea placeholder="Wat zoek je?" />
          <button className="btn-primary">Versturen</button>
        </form>
      </section>

      {/* STYLES */}
      <style jsx>{`

        .main {
          font-family: system-ui;
          color: #111;
        }

        /* HERO */
        .hero {
          padding: 60px 20px;
          text-align: center;
        }

        h1 {
          font-size: 2rem;
          margin-bottom: 15px;
        }

        h2 {
          font-size: 1.6rem;
          text-align: center;
          margin-bottom: 25px;
        }

        .hero p {
          font-size: 1rem;
        }

        .hero-buttons {
          margin-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .btn-primary {
          background: black;
          color: white;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
        }

        .btn-secondary {
          border: 1px solid black;
          padding: 12px;
          border-radius: 8px;
          text-decoration: none;
          text-align: center;
        }

        /* TRUST */
        .trust {
          text-align: center;
          padding: 10px;
          font-size: 0.9rem;
          background: #fafafa;
        }

        /* SECTIONS */
        .section {
          padding: 40px 20px;
        }

        .alt {
          background: #fafafa;
        }

        /* GRID MOBILE FIRST */
        .grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 15px;
        }

        /* CARDS */
        .card, .trip-card, .price-card {
          padding: 15px;
          border-radius: 10px;
          border: 1px solid #eee;
          background: white;
        }

        .highlight {
          border: 2px solid black;
        }

        .image-placeholder {
          height: 140px;
          background: #ddd;
          border-radius: 8px;
          margin-bottom: 10px;
        }

        .tag {
          font-size: 0.75rem;
          background: #eee;
          padding: 4px 8px;
          border-radius: 20px;
        }

        .review {
          padding: 15px;
          background: #f5f5f5;
          border-radius: 8px;
          font-style: italic;
        }

        /* NEWSLETTER */
        .newsletter {
          padding: 40px 20px;
          text-align: center;
        }

        .newsletter input {
          width: 100%;
          max-width: 300px;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
        }

        /* CONTACT */
        .contact {
          background: #111;
          color: white;
          padding: 50px 20px;
          text-align: center;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }

        .form input, .form textarea {
          width: 100%;
          max-width: 300px;
          padding: 10px;
          border-radius: 6px;
          border: none;
        }

        textarea {
          height: 100px;
        }

        /* DESKTOP UPGRADE */
        @media(min-width: 768px) {

          h1 {
            font-size: 3rem;
          }

          .hero-buttons {
            flex-direction: row;
            justify-content: center;
          }

          .grid {
            grid-template-columns: repeat(3, 1fr);
          }

        }

      `}</style>
    </main>
  );
}