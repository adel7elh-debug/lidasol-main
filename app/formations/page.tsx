import type { Metadata } from "next";
import { BookOpenCheck, CheckCircle2, Headphones, MonitorPlay } from "lucide-react";
import { Header } from "@/components/Header";import { Footer } from "@/components/Footer";import { WhatsApp } from "@/components/WhatsApp";import { Catalog } from "@/components/Catalog";

export const metadata:Metadata={title:"Catalogue des formations",description:"Découvrez les formations professionnelles en ligne de LIDA Formation."};
export default function Formations(){return <><Header/><main><section className="catalog-hero"><div className="catalog-orb"/><div className="container catalog-hero-grid"><div><span className="hero-badge dark"><BookOpenCheck/> Catalogue des formations</span><h1>Développez la compétence qui fera <span>la différence.</span></h1><p>Des parcours pratiques, accompagnés et conçus pour les réalités de l’entreprise.</p></div><div className="catalog-proof"><span><MonitorPlay/>Cours en direct & replay</span><span><CheckCircle2/>Cas pratiques</span><span><Headphones/>Accompagnement</span></div></div></section><section className="section catalog-section"><div className="container"><Catalog/></div></section></main><Footer/><WhatsApp/></>}
