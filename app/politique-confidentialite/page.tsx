import type {Metadata} from "next";
import {Footer} from "@/components/Footer";
import {Header} from "@/components/Header";
import {siteConfig} from "@/data/site";

export const metadata: Metadata = {title: "Politique de confidentialité"};

export default function PrivacyPage() {
  return <><Header/><main><section className="page-hero compact"><div className="container"><span className="eyebrow">Confidentialité</span><h1>Politique de confidentialité</h1><p>Comment les informations transmises via ce site sont utilisées.</p></div></section><section className="section"><div className="container legal-content"><h2>Données collectées</h2><p>Lorsque vous utilisez le formulaire de contact, vous pouvez transmettre votre nom, votre entreprise, votre téléphone, votre e-mail, le service souhaité et votre message.</p><h2>Finalité</h2><p>Ces informations sont utilisées uniquement pour répondre à votre demande et assurer le suivi de l’échange professionnel.</p><h2>Transmission du formulaire</h2><p>Le site ne stocke pas directement les formulaires. Selon la configuration disponible, votre demande est préparée pour être envoyée via WhatsApp ou votre messagerie électronique.</p><h2>Vos droits</h2><p>Pour toute question relative à vos informations, contactez-nous à <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></div></section></main><Footer/></>;
}
