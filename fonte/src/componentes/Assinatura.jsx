// Assinatura de quem fez o site: selo "FR", nome e e-mail (clicável). Discreta,
// no fim do rodapé; a cor vem do rodapé (currentColor).
export const ASSINATURA = { nome: "Fábio Ranyeri", email: "frnr.mv@icloud.com" };

export default function Assinatura() {
  return (
    <div className="assinatura">
      <span className="assinatura-selo" aria-hidden="true">
        FR
      </span>
      <span className="assinatura-txt">
        <span>Feito por {ASSINATURA.nome}</span>
        <a href={`mailto:${ASSINATURA.email}`}>{ASSINATURA.email}</a>
      </span>
    </div>
  );
}
