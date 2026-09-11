import { createFileRoute } from "@tanstack/react-router";

import { TuGemeloDigitalPage } from "@/components/upsell/TuGemeloDigitalPage";

export const Route = createFileRoute("/upsell/tu-gemelo-digital")({
  head: () => ({
    meta: [
      { title: "Método Mente Expandida — Oferta exclusiva" },
      { name: "description", content: "Transforma la inteligencia artificial en una extensión de tu mente para conocerte, pensar contigo, multiplicar tus ideas y convertir el conocimiento en acción." },
      { property: "og:title", content: "Método Mente Expandida — Oferta exclusiva" },
      { property: "og:description", content: "Una inteligencia digital construida a tu alrededor: conoce, piensa, multiplica y evoluciona con la IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TuGemeloDigitalPage,
});
