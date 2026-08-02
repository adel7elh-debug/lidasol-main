# Audit initial

Le dépôt ne contenait aucun fichier applicatif et aucun commit. Il n'y avait donc aucun composant, schéma de données ou configuration à conserver.

## Fondation retenue

- React 19 + TypeScript strict + Vite/Vinext, compatible avec l'hébergement Sites.
- Tailwind CSS 4 et styles produit dédiés.
- Client Supabase isolé dans `lib/supabase.ts`, inactif tant que les variables ne sont pas fournies.
- Routes publiques, démonstration stagiaire et démonstration administrateur.
- Migration PostgreSQL/Supabase complète avec RLS activée.

## Points à brancher

Les interfaces utilisent actuellement des données de démonstration. Le raccordement Supabase doit remplacer progressivement ces données par des requêtes typées. Les formulaires publics et les vues d'administration doivent être connectés après création du projet Supabase et application de la migration.
