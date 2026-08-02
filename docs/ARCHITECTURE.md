# Architecture LIDA Formation

## Surfaces

1. **Public** : accueil, catalogue, fiche formation, organisme, formateurs, FAQ, contact, inscription et connexion.
2. **Stagiaire** : tableau de bord, formations autorisées, agenda, leçons, ressources, QCM, résultats, paiements et attestations.
3. **Administration** : catalogue pédagogique, utilisateurs, inscriptions, planning, contenus, évaluations et finance.

## Sécurité

Supabase Auth est la source d'identité. Le rôle est stocké dans `user_roles`, jamais déduit d'une valeur envoyée par le client. Toutes les tables métier utilisent RLS. `has_course_access()` centralise le contrôle d'accès. Les fichiers sont dans un bucket privé ; une URL signée n'est créée qu'après autorisation. La clé service role est réservée aux fonctions serveur.

## Hiérarchie pédagogique

`courses -> modules -> chapters -> lessons -> lesson_resources / assignments / quizzes`. L'accès part de `enrollments`. La progression est enregistrée par couple utilisateur/leçon.
