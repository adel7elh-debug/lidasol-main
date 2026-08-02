# Plan d'implémentation

## Phase 1 - Fondation (livrée)

- Architecture, design responsive, routes principales et données de démonstration.
- Client Supabase, variables d'environnement, schéma PostgreSQL, indexes et RLS.
- Premiers tableaux de bord stagiaire et administration.

## Phase 2 - Données et authentification

- Créer le projet Supabase, appliquer la migration et générer les types.
- Brancher inscription, connexion, récupération du mot de passe et protections de routes.
- Remplacer le catalogue de démonstration par les requêtes Supabase.

## Phase 3 - LMS

- Éditeur de formations/modules/chapitres/leçons.
- Lecteur de cours, navigation précédente/suivante, progression et ressources signées.
- QCM, tentatives, corrections et soumissions d'exercices.

## Phase 4 - Exploitation

- Agenda, paiements, notifications, attestations PDF/QR et paramètres WhatsApp.
- Pagination, loaders, tests d'intégration RLS, audit accessibilité et performance.
- Variables Vercel, domaine `formation.lidasol.com`, monitoring et sauvegardes.
