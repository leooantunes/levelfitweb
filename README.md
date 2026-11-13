# Level Fit — site (Next.js)

Site de apresentação do app [Level Fit](https://github.com/leooantunes/levelfit), com a **Política de Privacidade** e a página de **exclusão de conta** exigidas pelas lojas. Feito com Next.js 16 (App Router), a identidade visual "Pôster de Luta" do app (fontes Bungee + Rubik, paleta cacau/brasa/cinturão e o mascote Brasa) e o mesmo texto da política que aparece dentro do app.

## Páginas

| Rota | O que é | Campo na loja |
|---|---|---|
| `/` | Apresentação do app: recursos, metas, como funciona, pontuação, privacidade, planos, perguntas frequentes (`#suporte`) e botões das lojas | App Store: Support URL → `/#suporte` |
| `/privacidade` | Política de privacidade completa (LGPD), com índice e âncoras por seção | App Store: Privacy Policy URL · Google Play: Política de privacidade |
| `/excluir-conta` | Passo a passo para excluir a conta | Google Play: URL para excluir a conta |

`/privacy` redireciona (308) para `/privacidade`.

## Onde fica o texto

O conteúdo da apresentação (recursos, hábitos e pontos, pacotes, passos, pontuação, ranks, planos e perguntas) está em [`src/content/app.ts`](src/content/app.ts), com os números tirados do app (`src/domain/habits.ts`, `scoring.ts` e `progression.ts`).


A política está em [`src/content/privacyPolicy.ts`](src/content/privacyPolicy.ts), organizado em seções e blocos (`p`, `ul`, `ol`, `callout`). O texto aceita `**negrito**`, `{{controller}}` e `{{email}}`. É a mesma política de `src/lib/privacyPolicy.ts` e `docs/index.html#privacidade` do app: mudou lá, mude aqui e atualize `UPDATED_AT`.

## Configuração

```bash
cp .env.example .env.local
```

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_CONTROLLER_NAME` | Nome da pessoa ou empresa controladora dos dados (LGPD) |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | E-mail de contato (o mesmo de `EXPO_PUBLIC_SUPPORT_EMAIL` no app) |
| `NEXT_PUBLIC_SITE_URL` | URL pública do site (metadados e canonical) |
| `NEXT_PUBLIC_APP_STORE_URL` / `NEXT_PUBLIC_PLAY_STORE_URL` | Links das lojas. Sem eles, os botões aparecem como “em breve” |

Enquanto não forem preenchidos, a página mostra os campos **destacados em amarelo** (`[SEU NOME OU EMPRESA]`, `[E-MAIL DE SUPORTE]`) para ninguém publicar com placeholder sem perceber.

Depois, no `.env` do app: `EXPO_PUBLIC_PRIVACY_POLICY_URL=https://<seu-dominio>/privacidade`.

## Rodando

```bash
npm install
```

```bash
npm run dev
```

```bash
npm run build
```
