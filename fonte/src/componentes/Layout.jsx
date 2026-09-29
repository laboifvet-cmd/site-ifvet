import { useEffect } from "react";
import Cabecalho from "./Cabecalho.jsx";
import Rodape, { WhatsFlutuante } from "./Rodape.jsx";
import Estatisticas from "./Estatisticas.jsx";

// Anima a entrada dos elementos com a classe "revelar" quando aparecem na tela.
function useRevelar() {
  useEffect(() => {
    const raiz = document.documentElement;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    raiz.classList.add("animar");
    const observador = new IntersectionObserver(
      (entradas) =>
        entradas.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visivel");
            observador.unobserve(e.target);
          }
        }),
      { rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll(".revelar").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight)
        el.classList.add("visivel");
      else observador.observe(el);
    });
    return () => observador.disconnect();
  }, []);
}

export default function Layout({ base = "", children }) {
  useRevelar();
  return (
    <>
      <a className="pular" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Cabecalho base={base} />
      <main id="conteudo">{children}</main>
      <Rodape base={base} />
      <WhatsFlutuante />
      <Estatisticas />
    </>
  );
}
