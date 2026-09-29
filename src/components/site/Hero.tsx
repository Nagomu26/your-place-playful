import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

const STATS = [
  { valor: "4.9★", etiqueta: "Likes de nuestros clientes" },
  { valor: "1 min", etiqueta: "Para pedir cita" },
  { valor: "7 días", etiqueta: "De antelación" },
];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-paper">
      <div
        className="pointer-events-none absolute -left-16 top-24 h-64 w-64 rounded-full bg-aqua/60 blur-3xl"
        aria-hidden="true"
      ></div>
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-72 w-72 rounded-full bg-berry/50 blur-3xl"
        aria-hidden="true"
      ></div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-[11px] font-bold uppercase tracking-widest text-white">
                ✨ Tu negocio en {CONFIG.zona}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl">
                Tu negocio{" "}
                <span className="text-accent">con vida</span>
                <br />
                propia, sin líos.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone sm:text-xl">
                Lo que ofreces, dónde estás y cómo contactar, todo claro y a la
                mano. Pide tu cita en un momento: {CONFIG.nombre}, en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="btn-sheen inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
                >
                  Pedir cita
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-full border-2 border-ink bg-paper px-8 py-4 text-sm font-bold uppercase tracking-wide text-ink transition-colors hover:bg-ink hover:text-paper"
                >
                  <Phone className="mr-2 h-4 w-4 text-aqua" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex max-w-md flex-col gap-3 sm:flex-row sm:gap-5">
                {STATS.map((stat) => (
                  <div key={stat.etiqueta} className="flex items-center gap-3">
                    <p className="font-display text-3xl font-semibold leading-none text-ink">
                      {stat.valor}
                    </p>
                    <p className="text-xs text-stone">{stat.etiqueta}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="lg:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 rotate-3 rounded-[2.5rem] bg-sun"
                aria-hidden="true"
              ></div>
              <div className="absolute -inset-4 -rotate-2 rounded-[2.5rem] bg-aqua"
                aria-hidden="true"
              ></div>
              <div className="relative overflow-hidden rounded-[2rem] border-4 border-ink bg-white">
                <img
                  src="img/haircut-close.jpg"
                  alt="Detalle de tu negocio"
                  className="h-[460px] w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}