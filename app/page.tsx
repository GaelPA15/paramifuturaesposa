"use client";
 
import { useState, useEffect, useRef } from "react";
 
const reasons = [
  { num: "01", text: "Por tu sonrisa, que hace que el tiempo se detenga cada vez que la veo." },
  { num: "02", text: "Porque con solo estar cerca de ti, todo problema parece más pequeño." },
  { num: "03", text: "Por la manera en que me miras y me haces sentir el hombre más afortunado de la tierra." },
  { num: "04", text: "Porque me enseñaste lo que significa amar de verdad, sin reservas y sin miedo." },
  { num: "05", text: "Por ser mi futura esposa, la mujer con quien quiero pasar cada día de mi vida." },
  { num: "06", text: "Por cada vez que me das la mano sin que yo lo pida, como si supieras exactamente lo que necesito." },
  { num: "07", text: "Por tu fuerza, que me inspira todos los días a ser mejor versión de mí mismo." },
  { num: "08", text: "Por los silencios contigo, que me resultan más cómodos que cualquier conversación." },
  { num: "09", text: "Porque contigo el tiempo ordinario se vuelve extraordinario sin que hagamos nada especial." },
  { num: "10", text: "Por elegirme a mí, todos los días, y hacer que eso se sienta como el regalo más grande del universo." },
];
 
const vows = [
  { icon: "♥", text: "Amarte en los días buenos y en los difíciles, sin condiciones y sin medidas." },
  { icon: "☽", text: "Ser el lugar donde siempre puedas descansar cuando el mundo se sienta pesado." },
  { icon: "✦", text: "Hacerte reír todos los días, incluso en los momentos más ordinarios." },
  { icon: "∞", text: "Elegirte a ti, hoy, mañana, y todos los días que me queden." },
  { icon: "◇", text: "Nunca dejar que te vayas a dormir sin saber cuánto significas para mí." },
  { icon: "✿", text: "Construir contigo el hogar que los dos merecemos, ladrillo a ladrillo, día a día." },
];
 
const memories = [
  { emoji: "🌅", title: "La primera vez", text: "Hubo un momento exacto en que supe que eras tú. No lo planeé. Solo lo supe, como se saben las cosas que importan de verdad." },
  { emoji: "🌧", title: "Los días grises", text: "Los días difíciles contigo son infinitamente mejores que los días perfectos sin ti. Eso lo aprendí y no lo voy a olvidar nunca." },
  { emoji: "🌙", title: "Las noches", text: "Hay noches en que solo con saber que existes en este mundo, puedo dormir tranquilo. Eso no lo hace nadie más. Solo tú." },
  { emoji: "☀️", title: "Las mañanas", text: "Cada mañana que empieza contigo es una razón de sobra para estar agradecido de todo lo que pasó para que pudiéramos encontrarnos." },
];
 
const qualities = [
  { label: "Tu fuerza" },
  { label: "Tu ternura" },
  { label: "Tu inteligencia" },
  { label: "Tu sonrisa" },
  { label: "Tu amor" },
];
 
const TOTAL = 7;
 
export default function LoveLetter() {
  const [cur, setCur] = useState(0);
  const [animKey, setAnimKey] = useState(0);
 
  const goTo = (n) => {
    if (n < 0 || n >= TOTAL) return;
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
 
function TopNav({ cur, goTo }) {
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
 
/* PAGE 1 */
function PagePortada({ onNext }) {
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
        Ábrela cuando quieras recordar cuánto te amo. Que nunca lo olvides.
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
 
/* PAGE 2 */
function PageCarta({ onPrev, onNext }) {
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
        }}>Mi amor, mi mujer,<br />mi todo</h2>
      </div>
 
      <div style={{ padding: "32px 26px 8px" }}>
        {[
          <>Quería escribirte esto porque las palabras que te digo todos los días a veces no alcanzan para decirte <em style={{ color: "var(--rose)", fontStyle: "italic" }}>lo enorme que es lo que siento por ti.</em></>,
          <>Eres mi novia, mi mujer, mi compañera y mi hogar. Eres la persona con quien quiero despertar cada mañana que me quede y a quien quiero tener de la mano cuando sea viejo. <em style={{ color: "var(--rose)", fontStyle: "italic" }}>No hay nadie más. Solo tú.</em></>,
          <>A veces me detengo en medio del día, sin ninguna razón, y pienso en ti. En tu voz. En cómo te ríes. En cómo me haces sentir que el mundo está bien cuando en realidad solo estás tú siendo tú.</>,
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
          }}>"No exageró nadie que dijo que el amor cambia todo. Desde que estás en mi vida, todo tiene más sentido."</p>
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
 
/* PAGE 3 */
function PageRazones({ onPrev, onNext }) {
  return (
    <div style={{ background: "#fff", position: "relative", zIndex: 1 }}>
      <div style={{ padding: "36px 26px 20px", textAlign: "center", background: "var(--cream)", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--text-muted)" }}>la lista que no tiene fin</div>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 80, fontWeight: 300, color: "var(--rose-pale)", lineHeight: 1, marginBottom: -14 }}>∞</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontStyle: "italic", color: "var(--rose-deep)", fontWeight: 300 }}>
          razones por las que te amo
        </h2>
        <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 8, fontStyle: "italic" }}>(estas son solo las primeras 10)</p>
      </div>
 
      <div style={{ padding: "20px 20px 8px" }}>
        {reasons.map((r, i) => (
          <div key={r.num} className="reason-card">
            <div style={{ fontSize: 11, letterSpacing: 2, color: "var(--rose)", textTransform: "uppercase", marginBottom: 5 }}>{r.num}</div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 19px)", color: "var(--text)", lineHeight: 1.5 }}>{r.text}</div>
          </div>
        ))}
        <div style={{ textAlign: "center", padding: "18px 0 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontStyle: "italic", color: "var(--text-muted)" }}>
          y podría seguir para siempre… ♥
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
 
/* PAGE 4 */
function PageRecuerdos({ onPrev, onNext }) {
  return (
    <div style={{ background: "var(--cream)", position: "relative", zIndex: 1 }}>
      <div style={{ background: "var(--rose-pale)", padding: "34px 26px 24px", textAlign: "center", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--rose)" }}>los momentos que guardo</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--rose-deep)" }}>
          Los que viven en mi memoria
        </h2>
      </div>
 
      <div style={{ padding: "28px 22px 8px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, marginBottom: 24, textAlign: "center" }}>
          Hay momentos que el tiempo no me va a quitar. Momentos tuyos que cargo conmigo a todas partes.
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
            "Cuando estoy contigo el tiempo pasa demasiado rápido. Y cuando no estás, va demasiado lento. Solo tú haces eso."
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
 
/* PAGE 5 */
function PageCualidades({ onPrev, onNext }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 200); return () => clearTimeout(t); }, []);
 
  return (
    <div style={{ background: "#fff", position: "relative", zIndex: 1 }}>
      <div style={{ background: "#fff", padding: "34px 26px 24px", textAlign: "center", borderBottom: "1px solid var(--rose-light)" }}>
        <div className="eyebrow" style={{ color: "var(--text-muted)" }}>lo que más admiro de ti</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontWeight: 300, fontStyle: "italic", color: "var(--rose-deep)" }}>
          Todo lo que eres
        </h2>
      </div>
 
      <div style={{ padding: "28px 26px 8px" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, marginBottom: 30 }}>
          No hay una sola parte de ti que no me enamore. Pero si tuviera que medirlo…
        </p>
 
        {qualities.map((q, i) => (
          <div key={i} style={{ marginBottom: 22 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "var(--text)" }}>{q.label}</span>
              <span style={{ fontSize: 13, color: "var(--rose)", fontWeight: 500 }}>∞</span>
            </div>
            <div className="quality-bar-track">
              {visible && <div className="quality-bar-fill" style={{ "--w": "100%", "--delay": `${i * 0.12}s`, width: "100%" }} />}
            </div>
          </div>
        ))}
 
        <div style={{ marginTop: 32, textAlign: "center", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(22px, 6vw, 28px)", fontStyle: "italic", color: "var(--rose-deep)", lineHeight: 1.3 }}>
          <span className="shimmer">Perfecta en todos los sentidos.<br />Perfecta para mí.</span>
        </div>
 
        <div className="divider" style={{ marginTop: 28 }}><span>♥</span></div>
 
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(17px, 4.5vw, 20px)", fontWeight: 300, color: "#3a1a26", lineHeight: 1.85, textAlign: "center", marginBottom: 8 }}>
          No busco a nadie perfecto. Te busco a ti. Que eres <em style={{ color: "var(--rose)", fontStyle: "italic" }}>exactamente lo que necesito.</em>
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
function PagePromesas({ onPrev, onNext }) {
  return (
    <div style={{ background: "var(--rose-deep)", position: "relative", zIndex: 1 }}>
      <div style={{ padding: "36px 26px 24px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,.12)" }}>
        <div className="eyebrow" style={{ color: "var(--rose-light)" }}>mis votos para ti</div>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 6.5vw, 30px)", fontWeight: 300, fontStyle: "italic", color: "#fff" }}>
          Lo que te juro cada día
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
 
/* PAGE 7 */
function PageCierre({ onPrev }) {
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