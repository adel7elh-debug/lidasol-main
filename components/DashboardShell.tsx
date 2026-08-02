"use client";

import Link from "next/link";
import { Award, BookOpen, CalendarDays, CircleDollarSign, ClipboardCheck, FileText, GraduationCap, LayoutDashboard, Settings, Users } from "lucide-react";
import { usePathname } from "next/navigation";

const student = [[LayoutDashboard,"Tableau de bord","/dashboard"],[BookOpen,"Mes formations","/dashboard/formations"],[CalendarDays,"Agenda","/dashboard/agenda"],[FileText,"Supports","/dashboard/supports"],[ClipboardCheck,"QCM & résultats","/dashboard/qcm"],[Award,"Attestations","/dashboard/attestations"],[CircleDollarSign,"Paiements","/dashboard/paiements"],[Settings,"Mon profil","/dashboard/profil"]] as const;
const adminLinks = [[LayoutDashboard,"Dashboard","/admin"],[BookOpen,"Formations","/admin/formations"],[Users,"Stagiaires","/admin/stagiaires"],[GraduationCap,"Formateurs","/admin/formateurs"],[CalendarDays,"Agenda","/admin/agenda"],[ClipboardCheck,"QCM","/admin/qcm"],[FileText,"Documents","/admin/documents"],[CircleDollarSign,"Paiements","/admin/paiements"],[Award,"Attestations","/admin/attestations"],[Settings,"Paramètres","/admin/parametres"]] as const;

export function DashboardShell({children,admin=false}:{children:React.ReactNode,admin?:boolean}) {
  const pathname = usePathname();
  const links = admin ? adminLinks : student;
  return <div className="dashboard-shell"><aside className="sidebar"><Link href="/" className="brand"><span className="brand-mark">L</span><span><strong>LIDA</strong><small>{admin?"ADMIN":"FORMATION"}</small></span></Link><nav className="side-nav">{links.map(([Icon,label,href])=><Link key={href} href={href} className={pathname===href?"active":""}><Icon size={18}/><span>{label}</span></Link>)}</nav></aside><main className="dash-main">{children}</main></div>;
}
