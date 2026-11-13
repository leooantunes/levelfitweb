/**
 * Dados do responsável pelo app. Preencha no .env (veja .env.example).
 * Enquanto não estiverem preenchidos, a página mostra o campo destacado em amarelo
 * para ninguém publicar a política com placeholder sem perceber.
 */
export const site = {
  appName: 'Level Fit',
  tagline: 'Hábitos saudáveis viram uma luta.',
  controllerName: process.env.NEXT_PUBLIC_CONTROLLER_NAME || null,
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || null,
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
} as const;
