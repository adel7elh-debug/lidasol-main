import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><div><span>404</span><h1>Cette page n’existe pas.</h1><p>Le lien a peut-être changé. Retrouvez les expertises et formations depuis l’accueil.</p><Link className="button button-blue" href="/">Retour à l’accueil</Link></div></main>;
}
