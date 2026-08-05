# LIDA Solutions & Consulting

Site vitrine professionnel de LIDA Solutions & Consulting, construit avec Next.js, TypeScript et vinext.

## Positionnement

Le site présente cinq domaines d’intervention complémentaires :

- conseil et accompagnement ;
- digitalisation des activités ;
- gestion et organisation ;
- accompagnement ISO ;
- formation professionnelle.

Les pages de catalogue, fiches de formation, inscription, à propos, FAQ et contact restent disponibles. Le projet ne contient ni espace administrateur, ni compte client, ni authentification.

## Développement local

Prérequis : Node.js `>=22.13.0`.

```bash
npm install
npm run dev
```

## Vérifications

```bash
npm run lint
npm run build
npm test
```

## Coordonnées

Les coordonnées publiques sont centralisées dans `data/site.ts`. L’e-mail et la localisation sont renseignés. Les constantes `phoneNumber` et `whatsappNumber` sont volontairement laissées à `null` tant que les numéros officiels n’ont pas été fournis. Le formulaire prépare alors une demande par e-mail et aucun faux message de succès n’est affiché.
