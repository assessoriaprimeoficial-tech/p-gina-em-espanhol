import { useEffect } from "react";

const DESTINOS = [
  "#tu-mente-en-gpt",
  "#tu-segundo-cerebro",
  "#tu-gemelo-digital",
  "#el-espejo-digital",
];

export function OfferGuideFix() {
  useEffect(() => {
    const section = Array.from(document.querySelectorAll("section")).find((node) =>
      node.textContent?.includes("INCLUYE EL MÉTODO COMPLETO"),
    );
    if (!section) return;

    const grid = section.querySelector(".grid.gap-4");
    if (!grid) return;

    const cards = Array.from(grid.children).slice(0, 4) as HTMLElement[];

    cards.forEach((card, index) => {
      const destino = DESTINOS[index];
      if (!destino) return;

      card.setAttribute("role", "link");
      card.setAttribute("tabindex", "0");
      card.style.cursor = "pointer";
      card.style.userSelect = "none";

      const go = () => {
        const target = document.querySelector(destino);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          window.history.replaceState(null, "", destino);
        }
      };

      card.onclick = go;
      card.onkeydown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          go();
        }
      };
    });

    const bonusTitle = cards[3]?.querySelector("h3");
    if (bonusTitle) {
      bonusTitle.textContent = "Bono";
    }
  }, []);

  return null;
}
