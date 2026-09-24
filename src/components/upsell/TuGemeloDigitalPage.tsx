import { type ReactNode, useEffect, useRef, useState } from "react";
import { ArrowRight, BadgeCheck, Brain, Check, ChevronDown, CircleCheck, Eye, Gauge, Layers3, Lightbulb, LockKeyhole, MessageSquareText, ShieldCheck, Sparkles, Target, Video, X } from "lucide-react";

import tuMenteEnGPTCover from "@/assets/tu-mente-en-gpt-cover-v2.png.asset.json";
import tuSegundoCerebroCover from "@/assets/tu-segundo-cerebro-cover-v2.png.asset.json";
import tuGemeloDigitalCover from "@/assets/tu-gemelo-digital-cover-v2.png.asset.json";
import elEspejoDigitalCover from "@/assets/el-espejo-digital-cover-v2.png.asset.json";
import comboCover from "@/assets/combo-mente-expandida-novo.png.asset.json";
import depoimento10 from "@/assets/depoimento-10.png.asset.json";
import depoimento11 from "@/assets/depoimento-11.png.asset.json";
import depoimento12 from "@/assets/depoimento-12.png.asset.json";
import depoimento13 from "@/assets/depoimento-13.png.asset.json";
import depoimento14 from "@/assets/depoimento-14.png.asset.json";
import depoimento15 from "@/assets/depoimento-15.png.asset.json";
import metodoNovo39 from "@/assets/metodo-novo-39.png.asset.json";
import metodoNovo40 from "@/assets/metodo-novo-40.png.asset.json";
import metodoNovo41 from "@/assets/metodo-novo-41.png.asset.json";
import metodoNovo42 from "@/assets/metodo-novo-42.png.asset.json";
import metodoNovo43 from "@/assets/metodo-novo-43.png.asset.json";
import metodoNovo44 from "@/assets/metodo-novo-44.png.asset.json";

const pilarImagens = [metodoNovo39, metodoNovo40, metodoNovo41, metodoNovo42, metodoNovo43, metodoNovo44];
const depoimentos = [depoimento10, depoimento11, depoimento12, depoimento13, depoimento14, depoimento15];
const guiasEsteira = [tuMenteEnGPTCover, tuSegundoCerebroCover, tuGemeloDigitalCover, elEspejoDigitalCover];
const faixaItens = ["MÉTODO MENTE EXPANDIDA™", "GUÍA PRINCIPAL + BONOS GRATIS", "PAGO ÚNICO", "ACCESO INMEDIATO", "GARANTÍA DE 7 DÍAS", "TU IA, A TU MANERA"];
const typewriterWords = ["CREAR.", "APRENDER.", "PRODUCIR.", "CONQUISTAR."];
const comboItens = [
  { nome: "Tu Mente en GPT", etiqueta: "Guía 1", destino: "#tu-mente-en-gpt", desc: "Personaliza ChatGPT con tu contexto" },
  { nome: "Tu Segundo Cerebro", etiqueta: "Guía 2", destino: "#tu-segundo-cerebro", desc: "Piensa con mayor claridad dentro de ChatGPT" },
  { nome: "Tu Gemelo Digital", etiqueta: "Guía 3", destino: "#tu-gemelo-digital", desc: "Transforma ideas en presencia digital" },
  { nome: "El Espejo Digital", etiqueta: "Bono", destino: "#el-espejo-digital", desc: "Reflexión guiada con el apoyo de ChatGPT" },
];

function TypewriterWord() {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  useEffect(() => {
    const word = typewriterWords[wordIndex]!;
    const delay = !deleting ? (charCount < word.length ? 110 : 1700) : (charCount > 0 ? 60 : 350);
    const timer = setTimeout(() => {
      if (!deleting) {
        if (charCount < word.length) setCharCount(charCount + 1);
        else setDeleting(true);
      } else if (charCount > 0) setCharCount(charCount - 1);
      else {
        setDeleting(false);
        setWordIndex((wordIndex + 1) % typewriterWords.length);
      }
    }, delay);
    return () => clearTimeout(timer);
  }, [charCount, deleting, wordIndex]);
  return <span className="relative inline-flex items-baseline"><span className="opacity-0" aria-hidden>CONQUISTAR.</span><span className="upsell-text-gradient-gold absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap" aria-hidden>{typewriterWords[wordIndex]!.slice(0, charCount)}<span className="ml-1 inline-block h-[0.85em] w-[3px] animate-pulse bg-upsell-gold align-baseline" /></span></span>;
}

const problemas = [
  "Abres el chat y empiezas desde cero. Todos los días. En cada conversación.",
  "Pierdes minutos (y energía) explicando otra vez quién eres, qué haces y qué quieres lograr.",
  "Recibes respuestas genéricas que podrían haber sido escritas para cualquier persona — menos para ti.",
  "Tienes buenas ideas, pero se quedan en tu cabeza porque no consigues organizarlas, priorizarlas ni ejecutarlas.",
];
const beneficiosMente = [
  "Respuestas más coherentes con tu contexto",
  "Menos correcciones, repeticiones y retrabajo",
  "Una IA más alineada con tu forma de comunicarte",
  "Más claridad desde el inicio de cada conversación",
];
const beneficiosSegundo = [
  "Organizar pensamientos e ideas con mayor claridad",
  "Desarrollar posibilidades antes de tomar una decisión",
  "Convertir objetivos en planes de acción concretos",
  "Avanzar con menos dudas y más criterio",
];
const beneficiosGemelo = [
  "Transformar ideas en videos con mayor facilidad",
  "Crear contenido sin depender de grabaciones constantes",
  "Ampliar tu presencia digital con menos esfuerzo",
  "Aplicarlo de forma sencilla aunque seas principiante",
];
const beneficiosEspejo = [
  "Observar patrones presentes en tus conversaciones",
  "Reconocer fortalezas y oportunidades",
  "Reflexionar sobre comportamientos y decisiones",
  "Obtener nuevas perspectivas sobre tu forma de actuar",
];
const recursos = ["Perfil Maestro", "Prompt Maestro", "Comandos de Alto Valor", "Sistema de Decisiones", "Planes de Acción", "Análisis de Riesgos", "Avatar con IA", "Voz con IA", "Guiones para Video", "Prompts de Reflexión", "Mapa de Fortalezas", "Preguntas de Evolución"];
const resultados = [
  { icon: Brain, title: "Una IA que te conoce", text: "Menos respuestas genéricas y más contexto para trabajar desde el lugar correcto." },
  { icon: Lightbulb, title: "Ideas que se desarrollan", text: "Convierte pensamientos dispersos en posibilidades, estructuras y próximos pasos." },
  { icon: Target, title: "Decisiones con más claridad", text: "Analiza prioridades, alternativas y puntos ciegos antes de actuar." },
  { icon: Layers3, title: "Mente más organizada", text: "Reduce la dispersión y transforma información e ideas en algo más fácil de ejecutar." },
  { icon: MessageSquareText, title: "Contenido con menos fricción", text: "Pasa de una idea a un contenido claro sin perder tu identidad." },
  { icon: Video, title: "Más presencia digital", text: "Lleva tus ideas a formatos audiovisuales sin convertir la creación en una tarea pesada." },
  { icon: Gauge, title: "Más velocidad de ejecución", text: "Acorta la distancia entre pensar, organizar y poner una idea en práctica." },
  { icon: Eye, title: "Nuevas perspectivas", text: "Haz mejores preguntas y observa posibilidades que antes podían pasar desapercibidas." },
];
const perguntas = [
  ["¿Necesito saber programar?", "No. El método fue diseñado para aplicarse sin programación y sin conocimientos técnicos avanzados."],
  ["¿Necesito experiencia con inteligencia artificial?", "No. Puedes empezar desde cero y avanzar siguiendo el paso a paso de cada guía."],
  ["¿El método funciona con ChatGPT?", "Sí. Tu Mente en GPT y Tu Segundo Cerebro fueron creados para usar ChatGPT como base de trabajo."],
  ["¿Puedo aplicarlo en mi negocio?", "Sí. El método puede ayudarte a organizar ideas, crear contenido, analizar decisiones y planificar proyectos."],
  ["¿Necesito saber editar videos?", "No. Tu Gemelo Digital está pensado para simplificar la producción de contenido audiovisual."],
  ["¿Cómo recibo el acceso?", "Después de confirmar el pago, el acceso se entrega digitalmente a través de la plataforma de compra."],
  ["¿El pago es único?", "Sí, la oferta de esta página es de pago único. Las condiciones finales se confirman en el checkout seguro."],
  ["¿Cómo funciona la garantía de 7 días?", "Tienes 7 días para conocer el método. Si decides que no es para ti, solicitas la garantía según las condiciones de la plataforma."],
];

function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0, last = 0;
    const fontSize = 16;
    const chars = "アイウエオカキクケコサシスセソ01<>[]{}#$%&";
    let drops: number[] = [];
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      drops = Array.from({ length: Math.ceil(canvas.width / fontSize) }, () => Math.floor(Math.random() * -50));
    };
    resize();
    window.addEventListener("resize", resize);
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 78) return;
      last = t;
      ctx.fillStyle = "rgba(6, 10, 24, 0.2)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Share Tech Mono", monospace`;
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)] ?? "0";
        ctx.fillStyle = Math.random() > 0.975 ? "rgba(191, 219, 254, 0.5)" : "rgba(96, 165, 250, 0.22)";
        ctx.fillText(ch, i * fontSize, y * fontSize);
        drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
      });
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} aria-hidden className="upsell-matrix pointer-events-none absolute inset-0 h-full w-full opacity-60" />;
}

function TituloSecao({ etiqueta, titulo, light = false, children }: { etiqueta: string; titulo: ReactNode; light?: boolean; children?: ReactNode }) {
  return <div className="mx-auto max-w-3xl text-center">
    <div className={`upsell-eyebrow mb-4 text-xs tracking-[0.28em] uppercase ${light ? "text-upsell-light-blue" : "text-upsell-blue"}`}>{etiqueta}</div>
    <h2 className={`text-3xl font-bold tracking-[-0.01em] sm:text-4xl md:text-5xl ${light ? "text-upsell-light-text" : "text-white"}`}>{titulo}</h2>
    {children ? <div className={`mt-5 text-base leading-7 sm:text-lg ${light ? "text-upsell-light-muted" : "text-upsell-text-muted"}`}>{children}</div> : null}
  </div>;
}

function CTA({ children = "QUIERO EMPEZAR →", href = "#oferta" }: { children?: ReactNode; href?: string }) {
  return <a href={href} className="upsell-cta inline-flex w-full max-w-[380px] items-center justify-center gap-2 whitespace-nowrap rounded-2xl px-6 py-4 text-center text-sm tracking-wide text-white uppercase sm:gap-3 sm:px-8 sm:text-base">{children}</a>;
}

function MetodoVisual() {
  return <div className="relative flex justify-center">
    <img src={comboCover.url} alt="Combo Método Mente Expandida con las 4 guías" className="w-full max-w-[490px] rounded-[24px] object-cover" />
  </div>;
}

function CapaCard({ cover, nome }: { cover: { url: string }; nome: string }) {
  return <div className="w-[220px] shrink-0 overflow-hidden rounded-[24px] p-1 sm:w-[280px]"><img src={cover.url} alt={`Portada ${nome}`} className="h-[240px] w-full rounded-[18px] object-cover sm:h-[290px]" /></div>;
}
function DepoimentoCard({ imagem, index }: { imagem: { url: string }; index: number }) {
  return <div className="w-[240px] shrink-0 overflow-hidden rounded-[20px] p-1 sm:w-[300px]"><img src={imagem.url} alt={`Testimonio de cliente ${index + 1}`} className="h-auto w-full rounded-[14px] object-contain" /></div>;
}
function GuiasEsteira() {
  const destinos = ["#tu-mente-en-gpt", "#tu-segundo-cerebro", "#tu-gemelo-digital", "#el-espejo-digital"];
  const nomes = ["Tu Mente en GPT", "Tu Segundo Cerebro", "Tu Gemelo Digital", "El Espejo Digital"];
  return <div className="upsell-marquee-mask mt-7 overflow-hidden">
    <div className="upsell-marquee flex w-max items-center gap-5 px-5">
      {[...guiasEsteira, ...guiasEsteira].map((cover, index) => { const posicao = index % guiasEsteira.length; return <a key={`${cover.url}-${index}`} href={destinos[posicao]} aria-label={`Ver ${nomes[posicao]}`} className="block w-[190px] shrink-0 cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-1 shadow-[0_24px_70px_-35px_rgba(96,165,250,0.45)] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upsell-blue sm:w-[250px]"><img src={cover.url} alt={`Portada de ${nomes[posicao]}`} className="aspect-square w-full rounded-[18px] object-cover" /></a>; })}
    </div>
  </div>;
}
const compradores = ["Mariana S.", "Carlos P.", "Fernanda L.", "João M.", "Ana Paula R.", "Ricardo T.", "Camila V.", "Diego A.", "Patrícia G."];
function NotificacoesVendas() {
  const [atual, setAtual] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setAtual((value) => (value + 1) % compradores.length), 4200);
    return () => clearInterval(timer);
  }, []);
  return <div className="fixed bottom-4 left-4 z-40 hidden max-w-[320px] rounded-2xl border border-green-400/40 bg-gradient-to-r from-green-700 via-green-600 to-green-700 p-4 shadow-[0_12px_35px_-12px_rgba(34,197,94,0.75)] backdrop-blur-md sm:block">
    <div className="flex items-center gap-3"><div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/15 text-white"><Check className="h-4 w-4" /></div><div><p className="text-xs leading-5 text-white"><span className="font-bold">{compradores[atual]}</span> adquirió el <span className="font-bold text-white">Combo Método Mente Expandida</span></p><p className="mt-1 text-[10px] text-white/75">Hace pocos minutos</p></div></div>
  </div>;
}

function ProdutoIndividual({ id, cover, etiqueta, nome, titulo, texto, beneficios, light = false, icon: Icon, cta = "QUIERO EL MÉTODO →" }: {
  id?: string; cover: { url: string }; etiqueta: string; nome: string; titulo: string; texto: ReactNode; beneficios: string[]; light?: boolean; icon: typeof Brain; cta?: string;
}) {
  return <section id={id} className={light ? "bg-upsell-light px-5 py-12 sm:px-6 sm:py-16" : "border-y border-white/10 bg-white/[0.02] px-5 py-12 sm:px-6 sm:py-16"}>
    <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">
      <div className={`flex justify-center ${light ? "lg:order-2" : "lg:order-1"}`}>
        <div className="relative w-full max-w-[330px]">
          <div className={`pointer-events-none absolute inset-6 rounded-full blur-[80px] ${light ? "bg-upsell-light-blue/20" : "bg-upsell-blue/15"}`} />
          <img src={cover.url} alt={`Portada ${nome}`} className="relative mx-auto w-full rounded-[28px] object-cover shadow-[0_25px_80px_-35px_rgba(37,99,235,0.5)]" />
        </div>
      </div>
      <div className={`text-center ${light ? "lg:order-1 lg:text-left" : "lg:order-2 lg:text-left"}`}>
        <div className={`upsell-eyebrow text-xs tracking-[0.24em] uppercase ${light ? "text-upsell-light-blue" : "text-upsell-blue"}`}>{etiqueta}</div>
        <div className={`mt-3 inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${light ? "border-upsell-light-blue/25 bg-upsell-light-blue/10 text-upsell-light-blue" : "border-upsell-blue/25 bg-upsell-blue/10 text-upsell-blue"}`}><Icon className="h-6 w-6" /></div>
        <h2 className={`mt-4 text-3xl font-bold sm:text-4xl ${light ? "text-upsell-light-text" : "text-white"}`}>{nome}</h2>
        <h3 className={`mt-3 text-lg font-semibold sm:text-xl ${light ? "text-upsell-light-text/85" : "text-white/90"}`}>{titulo}</h3>
        <div className={`mt-4 text-sm leading-7 sm:text-base ${light ? "text-upsell-light-muted" : "text-upsell-text-muted"}`}>{texto}</div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {beneficios.map((item) => <div key={item} className={`flex items-start gap-3 rounded-2xl border p-4 text-left ${light ? "border-upsell-light-border bg-upsell-light-surface" : "border-upsell-blue/20 bg-upsell-blue/[0.06]"}`}><Check className={`mt-0.5 h-4 w-4 shrink-0 ${light ? "text-upsell-light-blue" : "text-upsell-blue"}`} /><span className={`text-sm leading-6 ${light ? "text-upsell-light-text/85" : "text-white/85"}`}>{item}</span></div>)}
        </div>
        <div className="mt-7 flex justify-center lg:justify-start"><CTA>{cta}</CTA></div>
      </div>
    </div>
  </section>;
}

export function TuGemeloDigitalPage() {
  return <main className="upsell-font overflow-hidden bg-upsell-bg text-upsell-text selection:bg-upsell-blue selection:text-white">
    <div className="border-b border-red-500/40 bg-gradient-to-r from-red-700 via-red-600 to-red-700 px-4 py-2.5 text-center text-[9px] font-bold leading-4 tracking-[0.08em] text-white uppercase sm:text-xs sm:tracking-[0.14em]">OFERTA POR TIEMPO LIMITADO</div>

    <section id="oferta-completa-topo" className="relative overflow-hidden border-b border-white/10 bg-black/25 px-5 py-12 sm:px-6 sm:py-16">
      <MatrixRain />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-gold/10 blur-[150px]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
          <div className="text-center lg:text-left">
            <span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-5 py-2 text-xs tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Método Mente Expandida™</span>
            <h1 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-white sm:text-4xl md:text-5xl">Método Mente Expandida</h1>
            <h2 className="mt-3 text-xl font-semibold text-white/90 sm:text-2xl"><span className="block">HAZ QUE LA IA TE CONOZCA, PIENSE CONTIGO Y TRABAJE A TU FAVOR</span></h2>
            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">Crea tu propio GPT personalizado con tu contexto, tu estilo y tus objetivos para que la IA trabaje mucho más alineada contigo desde el inicio. Y descubre cómo llevarla más allá: úsala como tu segundo cerebro y transforma tus ideas en contenido, incluso en videos sin tener que grabarte cada vez.</p>
            
          </div>
          <div className="relative mx-auto w-full max-w-[550px]">
            <div className="mb-5 flex flex-wrap items-end justify-center gap-4">
              <div className="text-center"><span className="block text-[10px] tracking-[0.16em] text-red-400 uppercase">Precio normal</span><span className="text-2xl font-bold text-red-400 line-through decoration-red-400">US$ 69,90</span></div>
              <div className="text-center"><span className="block text-[10px] tracking-[0.16em] text-upsell-success uppercase">Oferta por tiempo limitado</span><span className="text-3xl font-bold text-upsell-success">US$ 9,99</span></div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-8 rounded-full bg-upsell-blue/20 blur-[100px]" />
              <MetodoVisual />
            </div>
            <div className="mt-6 flex justify-center"><CTA>QUIERO EMPEZAR →</CTA></div>
            <p className="mt-3 text-center text-xs font-semibold text-white/55">Pago único · Acceso inmediato</p>
          </div>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden px-5 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20"><MatrixRain /><div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-upsell-blue/15 blur-[140px]" /><div className="relative mx-auto max-w-7xl"><div className="mx-auto max-w-5xl text-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-blue/25 bg-upsell-blue/10 px-4 py-2 text-[11px] tracking-[0.22em] text-upsell-blue uppercase sm:text-xs"><Sparkles className="h-4 w-4" /> Método Mente Expandida™</span><h2 className="mt-7 text-xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl md:text-4xl">DESCUBRE CÓMO EXTRAER EL MÁXIMO PODER DE LA INTELIGENCIA ARTIFICIAL Y TRANSFORMARLA EN UNA VERDADERA <span className="upsell-text-gradient-blue">MÁQUINA DE RESULTADOS PARA</span><span className="mt-1.5 block text-3xl font-extrabold tracking-wide sm:text-5xl md:text-6xl"><TypewriterWord /></span></h2><GuiasEsteira /><p className="mx-auto mt-8 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-xl sm:leading-8">Tu ChatGPT parece genérico porque todavía no te conoce. Aprende a crear una inteligencia personalizada con <span className="font-semibold text-white">tu contexto, tu identidad, tu tono de voz y tus objetivos</span> — y deja de explicarlo todo de nuevo en cada conversación.</p><p className="mx-auto mt-5 max-w-3xl rounded-2xl border border-upsell-blue/25 bg-upsell-blue/[0.07] px-5 py-4 text-sm leading-6 text-white/80 sm:text-base">Sin programación, sin código y sin configuraciones complicadas. Sigue el paso a paso, copia, adapta y empieza a construir tu inteligencia personalizada.</p><div className="mt-9 flex justify-center"><CTA>QUIERO ACCEDER</CTA></div><div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55 sm:text-sm"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acceso digital inmediato</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pago 100% seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> 7 días de garantía</span></div></div></div></section>
    <div className="relative overflow-hidden border-y border-white/10 bg-black/30 py-4"><div className="flex w-max animate-[marquee_28s_linear_infinite] gap-3 whitespace-nowrap px-3"><div className="flex gap-3">{["CREAR MÁS RÁPIDO","APRENDER MEJOR","PRODUCIR MÁS","ORGANIZAR IDEAS","GANAR CLARIDAD","CRECER EN DIGITAL","TOMAR DECISIONES","CONQUISTAR OBJETIVOS"].map((item)=><span key={item} className="rounded-xl border border-upsell-blue/30 bg-upsell-blue/10 px-4 py-2 text-xs font-bold tracking-wide text-upsell-light-blue sm:text-sm">{item}</span>)}</div><div className="flex gap-3" aria-hidden="true">{["CREAR MÁS RÁPIDO","APRENDER MEJOR","PRODUCIR MÁS","ORGANIZAR IDEAS","GANAR CLARIDAD","CRECER EN DIGITAL","TOMAR DECISIONES","CONQUISTAR OBJETIVOS"].map((item)=><span key={item} className="rounded-xl border border-upsell-blue/30 bg-upsell-blue/10 px-4 py-2 text-xs font-bold tracking-wide text-upsell-light-blue sm:text-sm">{item}</span>)}</div></div></div>
    <div className="upsell-marquee-mask border-y border-upsell-blue/30 bg-gradient-to-r from-blue-700 via-upsell-blue to-blue-700 py-3.5"><div className="upsell-marquee flex w-max items-center gap-8 px-4">{[...faixaItens, ...faixaItens, ...faixaItens, ...faixaItens].map((item, index) => <span key={index} className="upsell-eyebrow flex items-center gap-8 whitespace-nowrap text-xs tracking-[0.22em] text-white uppercase sm:text-sm">{item}<span className="text-white/50">◆</span></span>)}</div></div>

    <section className="bg-upsell-light px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <TituloSecao light etiqueta="INCLUYE EL MÉTODO COMPLETO" titulo={<>Cuatro materiales que se complementan <span className="text-upsell-light-blue">en una sola experiencia.</span></>}>El método reúne un producto principal, dos guías complementarias y un bono especial para acompañarte desde el contexto y el pensamiento hasta la presencia digital y las nuevas perspectivas.</TituloSecao>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            [tuMenteEnGPTCover, "Tu Mente en GPT", "Producto principal", "La base del método."],
            [tuSegundoCerebroCover, "Tu Segundo Cerebro", "Guía complementaria", "Pensamiento e ideas con más claridad."],
            [tuGemeloDigitalCover, "Tu Gemelo Digital", "Guía complementaria", "Ideas transformadas en presencia digital."],
            [elEspejoDigitalCover, "Bono", "", "Reflexión guiada con el apoyo de ChatGPT"],
          ].map(([cover, nome, tag, desc]) => <a href={nome === "Tu Mente en GPT" ? "#tu-mente-en-gpt" : nome === "Tu Segundo Cerebro" ? "#tu-segundo-cerebro" : nome === "Tu Gemelo Digital" ? "#tu-gemelo-digital" : "#el-espejo-digital"} key={nome as string} className={`rounded-[26px] border p-4 text-center ${tag === "Bono" ? "border-upsell-gold/40 bg-upsell-gold/[0.08]" : "border-upsell-light-border bg-upsell-light-surface"}`}><img src={(cover as {url:string}).url} alt={`Portada ${nome}`} className="mx-auto aspect-square w-full max-w-[190px] rounded-[18px] object-cover" /><div className={`upsell-eyebrow mt-4 text-[10px] tracking-[0.18em] uppercase ${tag === "Bono" ? "text-upsell-gold" : "text-upsell-light-blue"}`}>{tag}</div><h3 className="mt-2 flex items-center justify-center gap-2 text-lg font-bold text-upsell-light-text">{nome}</h3><p className="mt-1 text-sm leading-6 text-upsell-light-muted">{desc}</p></a>)}
        </div>
        <div className="mt-8 flex justify-center"><CTA>QUIERO EL MÉTODO →</CTA></div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-white/[0.02] px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <TituloSecao etiqueta="EL VERDADERO PROBLEMA" titulo={<>La IA ya es brillante.<br /><span className="upsell-text-gradient-blue">El problema es no saber aprovecharla.</span></>}>Si ya utilizas ChatGPT, probablemente no necesitas otra herramienta. Necesitas aprender a sacar más provecho de la que ya tienes, sin repetir constantemente el mismo contexto ni dejar buenas ideas a medias.</TituloSecao>
        <div className="mx-auto mt-8 grid max-w-5xl gap-3 sm:grid-cols-2">{problemas.map((problema) => <div key={problema} className="flex items-start gap-4 rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-600/15 to-red-500/[0.04] p-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-red-400/40 bg-red-500/15 text-red-300"><X className="h-4 w-4" /></span><p className="text-sm leading-6 font-semibold text-red-100">{problema}</p></div>)}</div>
      </div>
    </section>

    <ProdutoIndividual id="tu-mente-en-gpt" cover={tuMenteEnGPTCover} etiqueta="01 · BASE DEL MÉTODO" nome="Tu Mente en GPT" titulo="Una inteligencia que entiende mejor tu contexto." texto={<>La guía te ayuda a pasar de conversaciones genéricas a una experiencia más alineada con tu identidad, objetivos y forma de comunicarte. El objetivo es que puedas trabajar con más contexto y reducir la necesidad de empezar de cero.</>} beneficios={beneficiosMente} icon={Brain} cta="QUIERO EL MÉTODO →" />
    <ProdutoIndividual id="tu-segundo-cerebro" cover={tuSegundoCerebroCover} etiqueta="02 · CONTINUIDAD DEL MÉTODO" nome="Tu Segundo Cerebro" titulo="Descubre posibilidades que nunca imaginaste antes." texto={<>En esta etapa, aprendes a usar la inteligencia artificial para mirar tus ideas desde nuevos ángulos y descubrir soluciones que todavía no habías considerado. Un paso a paso sencillo para ampliar tu visión y transformar ese “¿cómo no se me ocurrió antes?” en acción.</>} beneficios={beneficiosSegundo} light icon={Lightbulb} cta="QUIERO EL MÉTODO →" />
    <ProdutoIndividual id="tu-gemelo-digital" cover={tuGemeloDigitalCover} etiqueta="03 · PRESENCIA DIGITAL" nome="Tu Gemelo Digital" titulo="Crea tu propio avatar y dale vida a tu clon digital." texto={<>En esta etapa, aprendes paso a paso a crear una versión digital de ti para presentar tus ideas en videos, sin tener que grabarte cada vez. Tu presencia, tu mensaje y más libertad para crear — incluso empezando desde cero.</>} beneficios={beneficiosGemelo} icon={Video} cta="QUIERO EL MÉTODO →" />
    <ProdutoIndividual id="el-espejo-digital" cover={elEspejoDigitalCover} etiqueta="04 · BONO ESPECIAL" nome="El Espejo Digital" titulo="Una nueva perspectiva sobre tus patrones y decisiones." texto={<>Como bono de la oferta, encuentras una experiencia de reflexión guiada que puede ayudarte a observar patrones presentes en tus conversaciones, reconocer fortalezas y descubrir nuevas perspectivas.</>} beneficios={beneficiosEspejo} light icon={Eye} cta="QUIERO EL MÉTODO →" />

    <section className="relative overflow-hidden border-y border-white/10 bg-black/25 px-5 py-12 sm:px-6 sm:py-14">
      <MatrixRain />
      <div className="relative mx-auto max-w-5xl text-center">
        <div className="upsell-eyebrow text-xs tracking-[0.26em] text-upsell-gold uppercase">LA CONEXIÓN DEL MÉTODO</div>
        <h2 className="mt-4 text-2xl font-bold text-white sm:text-4xl">De conocerte a ayudarte a pensar, crear y ver nuevas posibilidades.</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-4">
          {[
            ["01", "LA IA TE CONOCE", Brain],
            ["02", "TE AYUDA A PENSAR", Lightbulb],
            ["03", "TRANSFORMA IDEAS EN PRESENCIA", Video],
            ["04", "REVELA NUEVAS PERSPECTIVAS", Eye],
          ].map(([num, text, Icon]) => <div key={num as string} className="relative rounded-2xl border border-upsell-blue/25 bg-upsell-blue/[0.06] p-5"><div className="mx-auto grid h-10 w-10 place-items-center rounded-xl bg-upsell-blue/15 text-upsell-blue"><Icon className="h-5 w-5" /></div><div className="upsell-eyebrow mt-3 text-[10px] text-upsell-blue">{num}</div><p className="mt-2 text-xs font-bold leading-5 text-white">{text}</p></div>)}
        </div>
        <div className="mt-8 flex justify-center"><CTA>QUIERO EL MÉTODO →</CTA></div>
      </div>
    </section>

    <section className="py-14 sm:py-20">
      <div className="px-5 sm:px-6">
        <TituloSecao etiqueta="RECURSOS" titulo={<>Todo organizado para que puedas <span className="upsell-text-gradient-blue">aplicar el método.</span></>}>
          12 recursos listos para usar, creados para que apliques el método sin teoría innecesaria:
        </TituloSecao>
      </div>
      <div className="upsell-marquee-mask mt-12 overflow-hidden">
        <div className="upsell-marquee-reverse flex w-max gap-3 px-4">
          {[...recursos, ...recursos].map((recurso, index) => (
            <div key={`${recurso}-${index}`} className="flex min-w-[230px] items-center gap-3 rounded-2xl bg-white/[0.035] px-5 py-4">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Check className="h-4 w-4" /></div>
              <span className="text-sm font-semibold text-white/85">{recurso}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center px-5 sm:px-6"><CTA>QUIERO ACCEDER</CTA></div>
    </section>

    <section className="px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <TituloSecao etiqueta="BENEFICIOS Y RESULTADOS" titulo={<>Lo que puede cambiar cuando <span className="upsell-text-gradient-blue">aplicas el método.</span></>}>Resultados prácticos para organizar mejor tu relación con la IA, desarrollar ideas y llevarlas a la acción.</TituloSecao>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{resultados.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6 text-center transition-transform duration-300 hover:-translate-y-1"><div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-upsell-blue/10 text-upsell-blue"><Icon className="h-5 w-5" /></div><h3 className="mt-4 text-lg font-bold text-white">{title}</h3><p className="mt-2 text-sm leading-6 text-upsell-text-muted">{text}</p></article>)}</div>
      </div>
    </section>

    <section className="relative overflow-hidden border-y border-white/10 bg-black/25 px-5 py-12 sm:px-6 sm:py-14">
      <MatrixRain />
      <div className="relative mx-auto max-w-7xl text-center">
        <div className="mx-auto max-w-3xl">
          <div className="upsell-eyebrow mb-4 text-xs tracking-[0.28em] text-upsell-gold uppercase">MIRA CÓMO COBRA VIDA EL MÉTODO</div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Mira el método cobrar vida.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-upsell-text-muted sm:text-base">Conoce los materiales que forman parte del Método Mente Expandida y visualiza la experiencia completa.</p>
        </div>
        <div className="upsell-marquee-mask mt-8 overflow-hidden">
          <div className="upsell-marquee flex w-max items-center gap-5 px-5">
            {[...pilarImagens, ...pilarImagens, ...pilarImagens].map((cover, index) => <CapaCard key={index} cover={cover} nome="Método Mente Expandida" />)}
          </div>
        </div>
        <div className="mt-8 flex justify-center"><CTA>QUIERO EL MÉTODO →</CTA></div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-black/25 px-5 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">
        <TituloSecao light etiqueta="TESTIMONIOS" titulo={<><span className="text-upsell-light-blue">Personas que ya comenzaron a aplicar el método.</span></>} />
      </div>
      <div className="upsell-marquee-mask mt-8 overflow-hidden"><div className="upsell-marquee-reverse flex w-max items-center gap-5 px-5">{[...depoimentos, ...depoimentos].map((item, index) => <DepoimentoCard key={index} imagem={item} index={index % depoimentos.length} />)}</div></div>
      <div className="mt-8 flex justify-center"><CTA>QUIERO EL MÉTODO →</CTA></div>
    </section>

    <section id="combo" className="relative border-y border-white/10 bg-black/25 px-5 py-14 sm:px-6 sm:py-20"><div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-upsell-gold/10 blur-[150px]" /><div className="relative mx-auto max-w-5xl text-center"><span className="upsell-eyebrow inline-flex items-center gap-2 rounded-full border border-upsell-gold/30 bg-upsell-gold/10 px-5 py-2 text-xs tracking-[0.18em] text-upsell-gold uppercase"><Sparkles className="h-4 w-4" /> Valor promocional por tiempo limitado</span><h2 className="mt-6 text-3xl font-bold tracking-[-0.01em] text-white sm:text-4xl md:text-5xl">MÉTODO MENTE EXPANDIDA COMPLETO<span className="upsell-text-gradient-gold block">3 GUÍAS + 1 BONO EN UN SOLO COMBO.</span></h2><p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-upsell-text-muted sm:text-lg">Todo lo que viste hasta aquí, reunido en un solo combo: crea tu GPT personalizado, conviértelo en tu segundo cerebro, aprende a crear contenido con tu avatar digital y recibe El Espejo Digital como bono especial.</p><img src={comboCover.url} alt="Combo Método Mente Expandida con las 4 guías" className="mx-auto mt-10 w-full max-w-[340px] rounded-[28px] object-cover sm:max-w-md" /><div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-[32px] border border-upsell-gold/30 bg-white/[0.045] text-left shadow-[0_25px_100px_-40px_rgba(250,204,21,0.35)]"><div className="grid gap-3 p-5 sm:p-8">{comboItens.map(item => <a key={item.nome} href={item.destino} className="block select-text cursor-pointer rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-left no-underline transition-colors duration-200 hover:border-upsell-blue/40 hover:bg-upsell-blue/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-upsell-blue"><p className="select-text font-bold text-white">{item.nome} <span className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wider uppercase ${item.etiqueta === "Bono" ? "bg-upsell-gold/20 text-upsell-gold" : "bg-upsell-blue/20 text-upsell-blue"}`}>{item.etiqueta}</span></p><p className="select-text mt-1 text-xs text-upsell-text-muted">{item.desc}</p></a>)}</div><div className="mx-5 mb-5 rounded-2xl border border-white/10 bg-black/30 p-5 text-center sm:mx-8 sm:mb-8 sm:p-7"><p className="upsell-eyebrow text-xs tracking-[0.22em] text-upsell-gold uppercase">valor del combo completo</p><div className="mt-2"><div className="mt-1 text-lg font-bold leading-tight text-center text-white min-[360px]:text-xl sm:text-3xl">QUIERO LAS 3 GUÍAS + EL BONO POR <span className="text-upsell-success">US$9,99</span></div></div><div className="mt-7 flex justify-center"><CTA href="#combo">QUIERO EL COMBO</CTA></div><div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-white/55"><span className="flex items-center gap-2"><CircleCheck className="h-4 w-4 text-upsell-success" /> Acceso inmediato</span><span className="flex items-center gap-2"><LockKeyhole className="h-4 w-4 text-upsell-success" /> Pago 100% seguro</span><span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-upsell-success" /> Garantía de 7 días</span></div></div></div></div></section>
    <section className="bg-upsell-light-alt px-5 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl text-center">
        <div className="relative mx-auto grid h-48 w-48 place-items-center rounded-full border-2 border-upsell-success/50 bg-upsell-success/10 sm:h-56 sm:w-56"><div className="absolute inset-3 rounded-full border border-dashed border-upsell-success/40" /><div><BadgeCheck className="mx-auto h-9 w-9 text-upsell-success" /><div className="mt-1 text-6xl font-bold leading-none text-upsell-light-text">7</div><div className="upsell-eyebrow mt-1 text-xs tracking-[0.24em] text-upsell-light-text/70">DÍAS</div><div className="mt-2 text-[10px] font-bold tracking-[0.2em] text-upsell-success uppercase">Garantía total</div></div></div>
        <div className="mt-7"><div className="upsell-eyebrow text-xs tracking-[0.22em] text-upsell-success uppercase">GARANTÍA DE 7 DÍAS</div><h2 className="mt-3 text-3xl font-bold text-upsell-light-text sm:text-4xl">Conoce el método durante 7 días.</h2><p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-upsell-light-muted sm:text-base">Si decides que no es para ti, puedes solicitar la garantía dentro del plazo según las condiciones de la plataforma de compra.</p></div>
        <div className="mt-7 flex justify-center"><CTA>QUIERO EMPEZAR →</CTA></div>
      </div>
    </section>

    <section className="bg-upsell-light px-5 py-12 sm:px-6 sm:py-14">
      <div className="mx-auto max-w-4xl"><TituloSecao light etiqueta="PREGUNTAS FRECUENTES" titulo="El último paso antes de comenzar." /><div className="mt-8 space-y-3">{perguntas.map(([pergunta, resposta]) => <details key={pergunta} className="group rounded-2xl border border-upsell-light-border bg-upsell-light-surface p-5 open:border-upsell-light-blue/40"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-upsell-light-text"><span>{pergunta}</span><ChevronDown className="h-5 w-5 shrink-0 text-upsell-light-blue transition group-open:rotate-180" /></summary><p className="mt-4 pr-6 text-sm leading-7 text-upsell-light-muted sm:text-base">{resposta}</p></details>)}</div><div className="mt-8 flex justify-center"><CTA>QUIERO EMPEZAR →</CTA></div></div>
    </section>

    <NotificacoesVendas />
    <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-white/35 sm:px-6"><div className="upsell-eyebrow tracking-[0.18em] text-white/55">MÉTODO MENTE EXPANDIDA™</div><p className="mt-3">Producto digital. Los resultados dependen de la aplicación individual del método y de las herramientas utilizadas.</p><p className="mt-4 text-[10px] text-white/25">© 2026 We Digital Mindset · Creado por Soeliz M. Dragaud</p><p className="mt-1 text-[10px] text-white/25"><a href="#politica-de-privacidad" className="underline-offset-2 transition-colors hover:text-white/50">Política de Privacidad</a> · <a href="#terminos-de-uso" className="underline-offset-2 transition-colors hover:text-white/50">Términos de Uso</a> · <a href="#contacto" className="underline-offset-2 transition-colors hover:text-white/50">Contacto</a></p></footer>
  </main>;
}
