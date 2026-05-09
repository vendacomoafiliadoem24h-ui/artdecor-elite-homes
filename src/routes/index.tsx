import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-interior.jpg";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import adrianaImg from "@/assets/adriana.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArtDecor | Gestão e Execução de Obras de Alto Padrão" },
      {
        name: "description",
        content:
          "Gestão impecável e execução de elite para obras de alto padrão no Rio de Janeiro. Mais de 27 anos transformando projetos arquitetônicos em realidade.",
      },
      { property: "og:title", content: "ArtDecor | Obras de Alto Padrão" },
      {
        property: "og:description",
        content:
          "Acabamentos premium, gestão técnica rigorosa e execução de elite. Adriana Moraes — Diretora Técnica.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Landing,
});

const services = [
  {
    title: "Gesso e Design",
    desc: "Sancas, nichos e forros com acabamento superior e alinhamento perfeito.",
    icon: "M4 4h16v4H4zM4 12h10v8H4zM16 12h4v8h-4z",
  },
  {
    title: "Revestimentos",
    desc: "Assentamento técnico especializado de porcelanatos de grandes formatos.",
    icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z",
  },
  {
    title: "Pintura Especial",
    desc: "Pintura premium com sistemas de lixamento e aspiração industrial.",
    icon: "M4 20l4-1 9-9-3-3-9 9zM14 5l3 3 3-3-3-3z",
  },
  {
    title: "Gestão de Obra",
    desc: "Controle absoluto de cronograma e custos para sua total tranquilidade.",
    icon: "M9 11l3 3 8-8M3 12a9 9 0 1018 0 9 9 0 00-18 0z",
  },
];

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const els = document.querySelectorAll(".fade-in");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="font-serif text-2xl tracking-wide">
            <span className="text-gradient-gold">Art</span>Decor
          </a>
          <nav className="hidden md:flex items-center gap-10 text-sm">
            <a href="#sobre" className="hover:text-gold transition-colors">Sobre Nós</a>
            <a href="#servicos" className="hover:text-gold transition-colors">Serviços</a>
            <a href="#portfolio" className="hover:text-gold transition-colors">Portfólio</a>
            <a href="#ia" className="hover:text-gold transition-colors">Inteligência™</a>
          </nav>
          <a
            href="https://wa.me/5521983479550"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-medium text-deep-black shadow-gold hover:opacity-90 transition"
          >
            Falar com Adriana
          </a>
          <button
            aria-label="Menu"
            className="md:hidden text-gold"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-border glass">
            <div className="px-6 py-4 flex flex-col gap-4 text-sm">
              <a onClick={() => setMenuOpen(false)} href="#sobre">Sobre Nós</a>
              <a onClick={() => setMenuOpen(false)} href="#servicos">Serviços</a>
              <a onClick={() => setMenuOpen(false)} href="#portfolio">Portfólio</a>
              <a onClick={() => setMenuOpen(false)} href="#ia">Inteligência™</a>
              <a onClick={() => setMenuOpen(false)} href="https://wa.me/5521983479550" className="text-gold">
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative h-svh min-h-[640px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Interior de alto padrão executado pela ArtDecor"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover zoom-bg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,oklch(0.72_0.11_80/0.18),transparent_60%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 h-full flex flex-col justify-center">
          <p className="fade-in text-gold tracking-[0.3em] text-xs md:text-sm uppercase mb-6">
            Engenharia de Alto Nível
          </p>
          <h1 className="fade-in font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl">
            Gestão Impecável.
            <br />
            <span className="italic text-gradient-gold">Execução de Elite.</span>
          </h1>
          <p className="fade-in mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
            Transformamos projetos arquitetônicos ambiciosos em realidade, com
            rigor técnico absoluto e acabamentos premium.
          </p>
          <div className="fade-in mt-10 flex flex-wrap gap-4">
            <a
              href="https://wa.me/5521983479550"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium text-deep-black shadow-gold hover:opacity-90 transition"
            >
              Iniciar Meu Projeto
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-7 py-3.5 text-sm font-medium text-gold hover:bg-gold/10 transition"
            >
              Nosso Diferencial
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Sobre Nós</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mb-8">
              Experiência que <br />
              <span className="italic text-gradient-gold">materializa sonhos.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              A ArtDecor nasceu da paixão por transformar projetos sofisticados
              em obras impecáveis. Com mais de 27 anos de experiência, Adriana
              Moraes conduz cada etapa com excelência técnica, atenção aos
              detalhes e compromisso absoluto com a qualidade.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nossa missão é entregar ambientes elegantes, funcionais e
              executados com perfeição, respeitando cada linha do projeto
              arquitetônico e proporcionando tranquilidade total durante toda a
              obra.
            </p>

            <div className="mt-10 flex items-center gap-5 glass rounded-2xl p-5">
              <img
                src={adrianaImg}
                alt="Adriana Moraes"
                width={80}
                height={80}
                loading="lazy"
                className="h-20 w-20 rounded-full object-cover ring-2 ring-gold/60"
              />
              <div>
                <p className="font-serif text-xl">Adriana Moraes</p>
                <p className="text-gold text-sm">Diretora Técnica</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Referência em gestão e execução de alto padrão.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-in relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl glass">
              <img
                src={portfolio2}
                alt="Banheiro de alto padrão"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-6xl text-gradient-gold">+27</p>
                <p className="text-sm tracking-widest uppercase text-muted-foreground mt-1">
                  Anos de História
                </p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden md:block w-32 h-32 border border-gold/40 rounded-full" />
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 md:py-40 px-6 bg-graphite">
        <div className="mx-auto max-w-7xl">
          <div className="fade-in flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">01 — Galeria</p>
              <h2 className="font-serif text-4xl md:text-5xl leading-tight">
                Obras que <span className="italic text-gradient-gold">inspiram</span>.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Cada projeto reflete nosso compromisso com acabamentos impecáveis e
              iluminação que valoriza cada detalhe do ambiente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="fade-in group relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={portfolio1}
                alt="Iluminação especial em forro de gesso"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6">
                <p className="text-gold text-xs tracking-widest uppercase">Iluminação</p>
                <p className="font-serif text-2xl">Iluminação Especial</p>
              </div>
            </div>
            <div className="fade-in group relative aspect-[4/3] overflow-hidden rounded-3xl">
              <img
                src={heroImg}
                alt="Acabamentos impecáveis em sala de estar"
                width={1280}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6">
                <p className="text-gold text-xs tracking-widest uppercase">Acabamentos</p>
                <p className="font-serif text-2xl">Acabamentos Impecáveis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="py-28 md:py-40 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="fade-in text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-xs uppercase mb-4">Nossa Entrega</p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Serviços <span className="italic text-gradient-gold">Exclusivos</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="fade-in glass rounded-2xl p-8 hover:border-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition">
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d={s.icon} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA */}
      <section id="ia" className="py-28 md:py-40 px-6 bg-graphite">
        <div className="mx-auto max-w-3xl">
          <div className="fade-in glass rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gold-gradient flex items-center justify-center text-deep-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 013 3v1h2a3 3 0 013 3v3a3 3 0 01-3 3h-1l-3 4-3-4H7a3 3 0 01-3-3V9a3 3 0 013-3h2V5a3 3 0 013-3z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-2xl">Assistente ArtDecor™</h3>
                <p className="text-sm text-gold">Consultoria Técnica Inteligente</p>
              </div>
            </div>

            <div className="rounded-2xl bg-background/60 border border-border p-5 mb-6 text-sm leading-relaxed text-muted-foreground">
              Olá! Sou o consultor virtual da ArtDecor. Posso ajudar com dúvidas
              sobre prazos, custos ou nossa metodologia de gestão de obras de
              alto padrão.
            </div>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Digite sua dúvida..."
                className="flex-1 rounded-full bg-background/60 border border-border px-5 py-3 text-sm focus:outline-none focus:border-gold transition"
              />
              <button className="rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-deep-black shadow-gold hover:opacity-90 transition">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-16 px-6">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 gap-10">
          <div>
            <p className="font-serif text-3xl">
              <span className="text-gradient-gold">Art</span>Decor
            </p>
            <p className="text-muted-foreground mt-3 max-w-sm">
              Excelência em gestão e execução de lares extraordinários.
            </p>
          </div>
          <div className="md:text-right text-sm space-y-2">
            <p className="text-foreground">Rio de Janeiro</p>
            <p>
              <a href="https://wa.me/5521983479550" className="text-gold hover:underline">
                WhatsApp: (21) 98347-9550
              </a>
            </p>
            <p className="text-muted-foreground text-xs pt-4">
              © 2026 ArtDecor Gestão de Obras. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
