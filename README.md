# Level Fit — site (Next.js)

Example **Privacy Policy** page for the [Level Fit](https://github.com/leooantunes/levelfit) app, built with Next.js 16 (App Router), the app's "Fight Poster" visual identity (Bungee + Rubik fonts, cocoa/ember/gold palette, and Brasa the mascot) and the same text as the policy shown inside the app.

## Pages

| Route | What it is | Store field |
|---|---|---|
| `/` | Short landing page with the privacy summary | — |
| `/privacidade` | Full privacy policy (LGPD), with a table of contents and anchors per section | App Store: Privacy Policy URL · Google Play: Privacy policy |
| `/excluir-conta` | Step-by-step guide to deleting your account | Google Play: account deletion URL |

`/privacy` redirects (308) to `/privacidade`.

## Where the text lives

All the content is in [`src/content/privacyPolicy.ts`](src/content/privacyPolicy.ts), structured as sections and blocks (`p`, `ul`, `ol`, `callout`). The text supports `**bold**`, `{{controller}}` and `{{email}}`. It is the same policy as the app's `src/lib/privacyPolicy.ts` and `docs/index.html#privacidade`: when one changes, change the other and update `UPDATED_AT`.

## Configuration

```bash
cp .env.example .env.local
```

| Variable | Use |
|---|---|
| `NEXT_PUBLIC_CONTROLLER_NAME` | Name of the person or company that controls the data (LGPD) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Contact email (the same as `EXPO_PUBLIC_SUPPORT_EMAIL` in the app) |
| `NEXT_PUBLIC_SITE_URL` | Public site URL (metadata and canonical) |

Until these are filled in, the page shows the fields **highlighted in yellow** (`[SEU NOME OU EMPRESA]`, `[E-MAIL DE SUPORTE]`) so no one publishes with a placeholder by accident.

Afterwards, in the app's `.env`: `EXPO_PUBLIC_PRIVACY_POLICY_URL=https://<your-domain>/privacidade`.

## Running

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```
