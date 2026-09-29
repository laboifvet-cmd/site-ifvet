import {
  ClipboardList,
  FileSearch,
  FlaskConical,
  Layers,
  Microscope,
  Snowflake,
  Star,
} from "lucide-react";

export const icones = {
  citologia: Microscope,
  histopatologia: Layers,
  necropsia: FileSearch,
  transcirurgica: Snowflake,
  complementares: FlaskConical,
  requisicao: ClipboardList,
};

export function LinkExterno({ href, className, children, ...resto }) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...resto}
    >
      {children}
    </a>
  );
}

export function Estrelas({ tamanho = 16 }) {
  return (
    <span className="estrelas" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={tamanho} />
      ))}
    </span>
  );
}

export function TituloSecao({ sobre, titulo, texto, claro, centro, id }) {
  return (
    <div className={`titulo-secao${centro ? " centro" : ""}`}>
      <span className={claro ? "sobretitulo claro" : "sobretitulo"}>
        {sobre}
      </span>
      <h2 id={id}>{titulo}</h2>
      {texto && <p>{texto}</p>}
    </div>
  );
}

export function iniciais(nome) {
  return nome
    .split(" ")
    .map((parte) => parte[0])
    .slice(0, 2)
    .join("");
}
