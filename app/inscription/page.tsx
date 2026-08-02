import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";

export default function Register(){return <main className="form-shell"><section className="form-aside"><span className="kicker gold">REJOIGNEZ-NOUS</span><h1>Donnez un nouvel élan à votre parcours.</h1><p>Remplissez le formulaire. Notre équipe vous recontacte pour confirmer votre besoin et les modalités.</p><div className="form-points"><span><CheckCircle2/> Conseil personnalisé</span><span><CheckCircle2/> Paiement flexible</span><span><CheckCircle2/> Accès rapide à la plateforme</span></div></section><section className="form-main"><div><Link href="/" className="brand"><span className="brand-mark">L</span><span><strong>LIDA</strong><small>FORMATION</small></span></Link><br/><RegistrationForm/></div></section></main>}
