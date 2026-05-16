"use client";
 
import { useState, useEffect, useRef } from "react";
 
const reasons = [
  { num: "01", text: "Eres una mujer increible y maravillosa." },
  { num: "02", text: "Mi futura esposa, la mujer con quien quiero pasar cada día de mi vida." },
  { num: "03", text: "Me gustas muchisimo, me encantas muchisimo,." },
  { num: "04", text: "Te amo muchisimo." },
  { num: "05", text: "Eres mi vida entera." },
  { num: "06", text: "Amo absolutamente todo de ti." },
  { num: "07", text: "Gracias por estar en mi vida, por permitirme compartir tu vida contigo." },
  { num: "08", text: "Me haces el hombre mas feliz." },
  { num: "09", text: "Quiero compartir el resto de mi vida contigo." },
  { num: "10", text: "Eres mi amor, mi novia, mi vida, mi todo, mi futura esposa, mi vida entera." },
];
 
const vows = [
  { icon: "♥", text: "Amarte en los días buenos y en los difíciles, sin condiciones y sin medidas." },
  { icon: "☽", text: "Ser el lugar donde siempre puedas descansar cuando el mundo se sienta pesado." },
  { icon: "✦", text: "Hacerte reír todos los días, incluso en los momentos más ordinarios." },
  { icon: "∞", text: "Elegirte a ti, hoy, mañana, y todos los días que me queden." },
  { icon: "◇", text: "Nunca dejar que te vayas a dormir sin saber cuánto significas para mí." },
  { icon: "✿", text: "Crecer contigo en cada etapa de la vida." },
];
 
const memories = [
  { emoji: "💘", title: "Nuestra historia", text: "Nuestra historia de cómo nos conocimos es muy genuina y hermosa. Es increíble que tenga que agradecerle a Fortnite por haber hecho posible ese primer encuentro, por habernos emparejado en aquella partida que terminó siendo el inicio de algo tan especial. Desde ahí comenzó todo lo que hemos compartido y vivido juntos." },
  { emoji: "👩🏻‍❤️‍💋‍👨🏻", title: "Nuestros planes a futuro", text: "Que termines tu carrera, casarnos, vivir juntos y tener muchos gatitos" },
  { emoji: "💘📞", title: "Nuestras llamadas y videollamadas", text: "Me encanta hablar contigo, ya sea por mensaje, llamada o videollamada. Me gusta lo mucho que podemos durar hablando de todo, de cualquier cosa, ver películas, jugar o simplemente estar juntos hablando de la vida. Cada conversación contigo se siente especial." },
  { emoji: "💌", title: "Cosas que nos unen", text: "Me encanta conocer tus gustos, ya sea la música que escuchas, los libros que te llaman la atención o esas cosas que simplemente te gustan de ti. También me gusta poder compartir contigo mis gustos y descubrir poco a poco lo que tenemos en común, y lo que no, aprenderlo juntos. Es bonito ver cómo, con el tiempo, vamos conectando más, entendiendo mejor lo que nos gusta y haciendo de eso algo nuestro, y que se vaya a la goma el higado encebolla" },
];
 
const qualities = [
  { label: "Eres esa persona con la que puedo ser yo mismo, con la que cada conversación se siente importante y cada momento, por pequeño que sea, se vuelve significativo." },
  { label: "Eres alguien que me inspira, que me motiva y que sin darte cuenta ha cambiado la forma en la que veo muchas cosas." },
  { label: "Y aunque hoy te tengo como mi novia, en mi corazón y mente tengo muy claro algo que quiero que seas tú en todo lo que viene, que algún día seas mi futura esposa, con quien quiero compartirlo absolutamente todo." },
  { label: "Eres todo la persona que quiero en mi vida, hoy mañana y siempre." },
  { label: "Porque contigo quiero todo, siempre." },
];
 
const TOTAL = 7;
 
export default function LoveLetter() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);
 
const goTo = (n: number) => {    if (n < 0 || n >= TOTAL) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    setCur(n);
    setAnimKey((k) => k + 1);
  };
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --rose:#c2185b; --rose-light:#f8bbd0; --rose-pale:#fce4ec;
          --rose-deep:#880e4f; --cream:#fffbf8; --text:#2d1520; --text-muted:#9e6b7a;
        }
        html { scroll-behavior: smooth; }
        body { background: var(--cream); font-family: 'Jost', sans-serif; color: var(--text); }
 
        @keyframes pgIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        @keyframes spinSlow { to{transform:rotate(360deg)} }
        @keyframes heartPulse { 0%,100%{transform:scale(1)} 50%{transform:scale(1.14)} }
        @keyframes floatUp {
          0%{transform:translateY(110vh);opacity:0} 10%{opacity:1}
          90%{opacity:.3} 100%{transform:translateY(-10vh);opacity:0}
        }
        @keyframes barGrow { from{width:0} to{width:var(--w)} }
        @keyframes shimmer {
          0%{background-position:-200% center} 100%{background-position:200% center}
        }
        @keyframes fadeSlideIn { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
 
        .love-app { max-width:480px; margin:0 auto; min-height:100svh; position:relative; overflow-x:hidden; }
        .page { animation: pgIn .5s cubic-bezier(.22,1,.36,1) both; }
 
        .top-nav {
          display:flex; justify-content:space-between; align-items:center;
          padding:14px 20px 10px; position:sticky; top:0; z-index:20;
          backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px);
        }
        .top-nav.dark { background:rgba(80,10,40,0.92); }
        .top-nav.light { background:rgba(255,251,248,0.92); border-bottom:1px solid var(--rose-pale); }
 
        .dot { width:6px; height:6px; border-radius:50%; border:none; cursor:pointer; transition:all .3s ease; }
        .dot.light-dot { background:var(--rose-light); }
        .dot.light-dot.active { background:var(--rose); width:22px; border-radius:3px; }
        .dot.dark-dot { background:rgba(255,255,255,.22); }
        .dot.dark-dot.active { background:#fff; width:22px; border-radius:3px; }
 
        .eyebrow { font-size:11px; letter-spacing:3px; text-transform:uppercase; margin-bottom:8px; }
        .divider { display:flex; align-items:center; gap:12px; margin:22px 0; }
        .divider::before,.divider::after { content:''; flex:1; height:1px; background:var(--rose-light); }
        .divider span { color:var(--rose); font-size:13px; }
 
        .reason-card {
          border-left:3px solid var(--rose-light); padding:14px 18px; margin-bottom:13px;
          border-radius:0 14px 14px 0; background:var(--cream);
          transition:border-color .2s,transform .2s;
        }
        .reason-card:hover { border-color:var(--rose); transform:translateX(5px); }
 
        .memory-card {
          border-radius:16px; padding:22px 20px; margin-bottom:16px;
          border:1px solid var(--rose-light); background:#fff;
          transition:transform .2s,box-shadow .2s;
        }
        .memory-card:hover { transform:translateY(-3px); box-shadow:0 8px 24px rgba(194,24,91,.08); }
 
        .quality-bar-track { height:6px; border-radius:99px; background:var(--rose-pale); overflow:hidden; margin-top:8px; }
        .quality-bar-fill {
          height:100%; border-radius:99px;
          background:linear-gradient(90deg,#f06292,#c2185b);
          animation:barGrow .9s cubic-bezier(.22,1,.36,1) both;
          animation-delay:var(--delay);
        }
 
        .shimmer {
          background:linear-gradient(90deg,#c2185b 0%,#f48fb1 40%,#c2185b 80%);
          background-size:200% auto; -webkit-background-clip:text;
          -webkit-text-fill-color:transparent; background-clip:text;
          animation:shimmer 3s linear infinite;
        }
 
        .quote-block {
          border-left:3px solid var(--rose); padding:16px 20px; margin:20px 0;
          background:var(--rose-pale); border-radius:0 12px 12px 0;
        }
 
        .nav-row { display:flex; justify-content:space-between; align-items:center; padding:16px 24px 32px; }
        .nav-btn {
          background:none; border:1.5px solid var(--rose-light); color:var(--rose);
          border-radius:50%; width:44px; height:44px;
          display:flex; align-items:center; justify-content:center;
          cursor:pointer; font-size:18px; transition:all .2s; font-family:'Jost',sans-serif;
        }
        .nav-btn:hover:not(:disabled) { background:var(--rose-pale); }
        .nav-btn:disabled { opacity:.18; cursor:default; }
        .nav-btn.dark-btn { border-color:rgba(255,255,255,.2); color:#fff; }
        .nav-btn.dark-btn:hover:not(:disabled) { background:rgba(255,255,255,.1); }
 
        .fheart { position:absolute; color:rgba(248,187,208,0.15); animation:floatUp linear infinite; pointer-events:none; }
      `}</style>
 
      <div className="love-app">
        <FloatingHearts />
        <TopNav cur={cur} goTo={goTo} />
        <div key={animKey} className="page">
          {cur === 0 && <PagePortada onNext={() => goTo(1)} />}
          {cur === 1 && <PageCarta onPrev={() => goTo(0)} onNext={() => goTo(2)} />}
          {cur === 2 && <PageRazones onPrev={() => goTo(1)} onNext={() => goTo(3)} />}
          {cur === 3 && <PageRecuerdos onPrev={() => goTo(2)} onNext={() => goTo(4)} />}
          {cur === 4 && <PageCualidades onPrev={() => goTo(3)} onNext={() => goTo(5)} />}
          {cur === 5 && <PagePromesas onPrev={() => goTo(4)} onNext={() => goTo(6)} />}
          {cur === 6 && <PageCierre onPrev={() => goTo(5)} />}
        </div>
      </div>
    </>
  );
}
 
function FloatingHearts() {
  const chars = ["♥", "♡", "❤"];
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
      {Array.from({ length: 18 }).map((_, i) => (
        <span key={i} className="fheart" style={{
          left: `${(i * 5.5) % 100}%`,
          fontSize: `${10 + (i % 4) * 5}px`,
          animationDuration: `${9 + (i % 5) * 2.2}s`,
          animationDelay: `${(i * 0.6) % 9}s`,
        }}>{chars[i % 3]}</span>
      ))}
    </div>
  );
}
 function TopNav({
  cur,
  goTo,
}: {
  cur: number;
  goTo: (n: number) => void;
}) {

  const dark = cur === 0 || cur === 5;
  return (
    <div className={`top-nav ${dark ? "dark" : "light"}`}>
      <div style={{ display: "flex", gap: 7 }}>
        {Array.from({ length: TOTAL }).map((_, i) => (
          <button key={i}
            className={`dot ${dark ? "dark-dot" : "light-dot"} ${cur === i ? "active" : ""}`}
            onClick={() => goTo(i)} aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>
      <span style={{
        fontSize: 11, letterSpacing: 2, textTransform: "uppercase",
        color: dark ? "rgba(255,255,255,.4)" : "var(--text-muted)",
      }}>{cur + 1} / {TOTAL}</span>
    </div>
  );
}
 
function PagePortada({
  onNext,
}: {
  onNext: () => void;
}) {
  return (
    <div style={{
      minHeight: "92svh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      background: "var(--rose-deep)", padding: "48px 28px 40px",
      textAlign: "center", position: "relative", zIndex: 1,
    }}>
      <div style={{ position: "relative", width: 160, height: 160, marginBottom: 32 }}>
        <svg style={{ position: "absolute", inset: 0, animation: "spinSlow 24s linear infinite" }}
          viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <g opacity=".28">
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((r) => (
              <path key={r} d="M80,80 C80,58 62,34 80,16 C98,34 80,58 80,80Z"
                fill="#f8bbd0" transform={`rotate(${r},80,80)`} />
            ))}
          </g>
        </svg>
        <svg style={{ position: "absolute", inset: 0, animation: "spinSlow 16s linear infinite reverse" }}
          viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
          <g opacity=".15">
            {[15,55,95,135,175,215,255,295].map((r) => (
              <path key={r} d="M80,80 C80,64 68,46 80,32 C92,46 80,64 80,80Z"
                fill="#ffffff" transform={`rotate(${r},80,80)`} />
            ))}
          </g>
        </svg>
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontSize: 52, animation: "heartPulse 1.8s ease-in-out infinite",
          filter: "drop-shadow(0 0 18px rgba(255,182,193,0.7))",
        }}>♥</div>
      </div>
 
      <div className="eyebrow" style={{ color: "rgba(248,187,208,.55)", marginBottom: 10 }}>una carta de amor</div>
 
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(36px, 10vw, 52px)", fontWeight: 300,
        color: "#fff", lineHeight: 1.1, marginBottom: 12,
      }}>
        Para ti,<br />
        <em style={{ fontStyle: "italic", color: "var(--rose-light)" }}>mi vida entera</em>
      </h1>
 
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(16px, 4.5vw, 19px)", fontStyle: "italic",
        color: "rgba(255,255,255,.42)", lineHeight: 1.75,
        marginBottom: 16, maxWidth: 280,
      }}>
        Esta carta es para ti mi amor, con mucho amor y cariño.
      </p>
 
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 44 }}>
        {["♥","♡","♥","♡","♥"].map((h, i) => (
          <span key={i} style={{
            color: i % 2 === 0 ? "var(--rose-light)" : "rgba(255,255,255,.18)",
            fontSize: 14, animation: `heartPulse ${1.6 + i * 0.2}s ease-in-out infinite`,
          }}>{h}</span>
        ))}
      </div>
 
      <button onClick={onNext} style={{
        background: "#fff", color: "var(--rose-deep)", border: "none",
        padding: "15px 44px", borderRadius: 50,
        fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500,
        letterSpacing: 1.5, cursor: "pointer", transition: "all .25s",
        boxShadow: "0 4px 24px rgba(0,0,0,0.18)",
      }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        Abrir mi carta &nbsp;→
      </button>
 
      <div style={{ marginTop: 28, fontSize: 12, color: "rgba(255,255,255,.18)", letterSpacing: 2 }}>
        7 páginas llenas de amor
      </div>
    </div>
  );
}
 
function PageCarta({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div style={{ background: "var(--cream)", position: "relative", zIndex: 1 }}>
      <div style={{
        background: "var(--rose-pale)", padding: "36px 28px 28px",
        textAlign: "center", borderBottom: "1px solid var(--rose-light)",
      }}>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>con todo mi corazón</div>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(24px, 7vw, 32px)", fontWeight: 300,
          fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.2,
        }}>Mi amor, mi mujer, mi futura esposa<br />mi todo, mi vida entera</h2>
      </div>
 
      <div style={{ padding: "32px 26px 8px" }}>
        {[
          <>Este detalle es para ti, mi amor para la mujer que llegó a mi vida a llenarla de felicidad, calma y momentos que jamás quiero olvidar.  <em style={{ color: "var(--rose)", fontStyle: "italic" }}>Agradezco profundamente a la vida por haberte puesto en mi camino y por poder compartir contigo algo tan bonito.</em></>,
          <>Me haces sentir el hombre más feliz del mundo. Eres la persona que ilumina cada uno de mis días, la que con un mensaje, una llamada, una videollamada puede cambiar por completo mi ánimo y hacer que todo se sienta mejor. Día con día me haces inmensamente feliz, y no imaginas lo mucho que significa para mí tenerte como mi novia. <em style={{ color: "var(--rose)", fontStyle: "italic" }}>Pero más hermoso aún es saber, sentir y soñar que algún día serás mi futura esposa, la mujer con la que quiero construir recuerdos, cumplir sueños y compartir toda una vida. Eres lo más hermoso, valioso y especial que tengo en mi vida.</em></>,
          <>Me encanta lo bonito que se siente lo nuestro, la manera tan especial en la que conectamos y cómo todo contigo fluye de una forma tan natural y sincera. Disfruto muchísimo cada momento contigo, cada conversación, cada tema, cada risa, cada ocurrencia, porque sin importar de qué estemos hablando, contigo todo se siente diferente, más bonito, más real.</>,
        ].map((text, i) => (
          <div key={i}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 5vw, 21px)", fontWeight: 300,
              color: "#3a1a26", lineHeight: 1.9, marginBottom: 6,
            }}>{text}</p>
            {i < 2 && <div className="divider"><span>♥</span></div>}
          </div>
        ))}
 
        <div className="quote-block" style={{ marginTop: 28 }}>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 5vw, 22px)", fontStyle: "italic",
            color: "var(--rose-deep)", lineHeight: 1.65,
          }}>Me encanta la paz que siento cuando estoy contigo, la felicidad tan sincera que provocas en mí y la manera tan hermosa en la que, con pequeños detalles, haces que mis días tengan mucho más sentido. Disfruto cada palabra, cada momento, cada risa y cada instante que compartimos, porque estar contigo se ha convertido en una de las cosas más bonitas, especiales y valiosas que tengo en mi vida.</p>
        </div>
 
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(18px, 5vw, 21px)", fontWeight: 300,
          color: "#3a1a26", lineHeight: 1.9, marginTop: 26, marginBottom: 4,
        }}>
          Te amo con <em style={{ color: "var(--rose)", fontStyle: "italic" }}>todo lo que me conforma</em>, con cada parte de quien soy. Y cada día que pasa lo hago un poco más, si es que eso es posible.
        </p>
 
        <div className="divider" style={{ marginTop: 28 }}><span>♥</span></div>
 
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(15px, 4vw, 17px)", fontWeight: 300,
          color: "var(--text-muted)", lineHeight: 1.8,
          textAlign: "center", fontStyle: "italic", marginBottom: 8,
        }}>
          Sigue leyendo, mi vida. Esto apenas empieza.
        </p>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>página 2 de 7</span>
        <button className="nav-btn" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
 
function PageRazones({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div style={{ background: "#fff", position: "relative", zIndex: 1 }}>
      <div style={{ padding: "36px 26px 20px", textAlign: "center", background: "var(--cream)", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--text-muted)" }}>Te adoro</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, color: "var(--rose-pale)", lineHeight: 1, marginBottom: -14 }}>∞</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontStyle: "italic", color: "var(--rose-deep)", fontWeight: 300 }}>
          Para ti mi amor.
        </h2>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8, fontStyle: "italic" }}>(Mi futura esposa, Valeria Gildanny)</p>
      </div>
 
      <div style={{ padding: "20px 20px 8px" }}>
        {reasons.map((r, i) => (
          <div key={r.num} className="reason-card">
            <div style={{ fontSize: 11, letterSpacing: 2, color: "var(--rose)", textTransform: "uppercase", marginBottom: 5 }}>{r.num}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 19px)", color: "var(--text)", lineHeight: 1.5 }}>{r.text}</div>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "18px 0 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", color: "var(--text-muted)" }}>
          TE AMO MI AMOR
        </div>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>página 3 de 7</span>
        <button className="nav-btn" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
 
function PageRecuerdos({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div style={{ background: "var(--cream)", position: "relative", zIndex: 1 }}>
      <div style={{ background: "var(--rose-pale)", padding: "34px 26px 24px", textAlign: "center", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>Mi novia</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--rose-deep)" }}>
          3 de Mayo 2026
        </h2>
      </div>
 
      <div style={{ padding: "28px 22px 8px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, marginBottom: 24, textAlign: "center" }}>
          El dia que te hiciste oficialmente mi novia
        </p>
 
        {memories.map((m, i) => (
          <div key={i} className="memory-card">
            <div style={{ fontSize: 32, marginBottom: 10 }}>{m.emoji}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 600, color: "var(--rose-deep)", marginBottom: 8 }}>{m.title}</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 4.5vw, 18px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.75 }}>{m.text}</p>
          </div>
        ))}
 
        <div className="quote-block">
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 5vw, 22px)", fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.65 }}>
            "Gracias por todas las enseñanzas que me das. Eres una persona muy interesante, y contigo aprendo muchísimas cosas día con día. Eres una mujer muy inteligente e increíble, y cada día admiro más la forma en la que piensas, ves la vida y compartes lo que sabes conmigo."
          </p>
        </div>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>página 4 de 7</span>
        <button className="nav-btn" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
 
function PageCualidades({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);
 
  return (
    <div style={{ background: "#fff", position: "relative", zIndex: 1 }}>
      <div style={{ background: "#fff", padding: "34px 26px 24px", textAlign: "center", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--text-muted)" }}>Mi todo</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--rose-deep)" }}>
Lo que eres para mí”        </h2>
      </div>
 
      <div style={{ padding: "28px 26px 8px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, marginBottom: 30 }}>
          Eres mi felicidad, mi tranquilidad y una de las razones más bonitas de mis días. Desde que llegaste, todo se siente más especial, más ligero y más bonito.
        </p>
 
        {qualities.map((q, i) => (
          <div key={i} style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--text)" }}>{q.label}</span>
              <span style={{ fontSize: 13, color: "var(--rose)", fontWeight: 500 }}>∞</span>
            </div>
            <div className="quality-bar-track">
              {visible && (
  <div
    className="quality-bar-fill"
    style={
      {
        "--w": "100%",
        "--delay": `${i * 0.12}s`,
        width: "100%",
      } as React.CSSProperties
    }
  />
)}
            </div>
          </div>
        ))}
 
        <div style={{ marginTop: 32, textAlign: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.3 }}>
          <span className="shimmer">Te amo muchisimo mi amor, gracias por tanto..<br />Lo eres todo para mi.</span>
        </div>
 
        <div className="divider" style={{ marginTop: 28 }}><span>♥</span></div>
 
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, textAlign: "center", marginBottom: 8 }}>
           <em style={{ color: "var(--rose)", fontStyle: "italic" }}>Te amo mi amor, continua a la siguiente pagina, esto aun no acaba.</em>
        </p>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>página 5 de 7</span>
        <button className="nav-btn" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
 
/* PAGE 6 */
function PagePromesas({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div style={{ background: "var(--rose-deep)", position: "relative", zIndex: 1 }}>
      <div style={{ padding: "36px 26px 24px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div className="eyebrow" style={{ color: "var(--rose-light)" }}>Para ti</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 6.5vw, 30px)", fontWeight: 300, fontStyle: "italic", color: "#fff" }}>
          Lo que te prometo cada día
        </h2>
      </div>
 
      <div style={{ padding: "24px 26px 8px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "rgba(255,255,255,.68)", lineHeight: 1.85, marginBottom: 28, textAlign: "center" }}>
          No necesito un altar para prometerte estas cosas. Te las prometo hoy, aquí, con todo lo que soy.
        </p>
 
        {vows.map((v, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "flex-start", gap: 16, padding: "18px 0",
            borderBottom: i < vows.length - 1 ? "1px solid rgba(255,255,255,.08)" : "none",
          }}>
            <div style={{
              width: 38, height: 38, borderRadius: "50%", background: "rgba(255,255,255,.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontSize: 17, color: "var(--rose-light)",
              fontFamily: "'Cormorant Garamond', serif",
            }}>{v.icon}</div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 4.5vw, 19px)", fontWeight: 300, color: "rgba(255,255,255,.88)", lineHeight: 1.65 }}>{v.text}</p>
          </div>
        ))}
 
        <div style={{ marginTop: 32, padding: "22px", borderRadius: 16, background: "rgba(255,255,255,.07)", border: "1px solid rgba(255,255,255,.1)", textAlign: "center" }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 5vw, 22px)", fontStyle: "italic", color: "var(--rose-light)", lineHeight: 1.7 }}>
            "Te elijo hoy. Te elegiré mañana.<br />
            Te elegiría mil veces más."
          </p>
        </div>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn dark-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,.4)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>página 6 de 7</span>
        <button className="nav-btn dark-btn" onClick={onNext}>→</button>
      </div>
    </div>
  );
}
 
function PageCierre({
  onPrev,
}: {
  onPrev: () => void;
}) {
  return (
    <div style={{ minHeight: "92svh", display: "flex", flexDirection: "column", background: "var(--cream)", position: "relative", zIndex: 1 }}>
      <div style={{ background: "var(--rose-pale)", padding: "48px 28px 36px", textAlign: "center", borderBottom: "1px solid var(--rose-light)" }}>
        <div style={{ fontSize: 14, letterSpacing: 10, color: "var(--rose-light)", marginBottom: 20 }}>♥ ♥ ♥</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px, 9vw, 42px)", fontWeight: 300, fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.2, marginBottom: 18 }}>
          Eres mi hogar,<br />mi todo,<br />mi vida entera.
        </h2>
        <div style={{ width: 48, height: 1, background: "var(--rose-light)", margin: "0 auto 18px" }} />
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(16px, 4.5vw, 19px)", fontWeight: 300, color: "var(--text-muted)", lineHeight: 1.8, maxWidth: 300, margin: "0 auto" }}>
          Y con todo lo que me conforma, con cada parte de quien soy, te amo a ti.
        </p>
      </div>
 
      <div style={{ padding: "32px 26px", flex: 1 }}>
        {["Hoy. Mañana. Siempre.", "En los días fáciles y en los que cuestan.", "Cuando estamos juntos y cuando nos extrañamos.", "Ahora y cuando seamos viejos."].map((line, i) => (
          <div key={i} style={{
            textAlign: "center", marginBottom: 20,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(18px, 5vw, 22px)", fontStyle: "italic",
            color: i === 0 ? "var(--rose-deep)" : "var(--text-muted)",
            fontWeight: i === 0 ? 600 : 300,
            animation: `fadeSlideIn .5s ease ${i * 0.12}s both`,
          }}>{line}</div>
        ))}
 
        <div className="divider"><span>♥</span></div>
 
        <div style={{ textAlign: "center", padding: "24px 0" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px, 5.5vw, 24px)", fontStyle: "italic", color: "var(--rose)", marginBottom: 6 }}>
            Tu futuro esposo
          </div>
          <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "var(--text-muted)" }}>con todo mi amor</div>
        </div>
 
        <div className="divider"><span>♥</span></div>
 
        <div style={{ textAlign: "center", marginTop: 8, marginBottom: 24, fontSize: "clamp(48px, 14vw, 72px)", animation: "heartPulse 1.8s ease-in-out infinite", color: "var(--rose)" }}>
          ♥
        </div>
      </div>
 
      <div className="nav-row">
        <button className="nav-btn" onClick={onPrev}>←</button>
        <span style={{ fontSize: 12, color: "var(--text-muted)", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic" }}>fin ♥</span>
        <button className="nav-btn" disabled>→</button>
      </div>
    </div>
  );
}