/**
 * Política de privacidade do Level Fit.
 *
 * Fonte: o app (leooantunes/levelfit), em src/lib/privacyPolicy.ts e docs/index.html#privacidade.
 * Mudou lá, mude aqui (e atualize UPDATED_AT).
 *
 * Os textos aceitam três marcações simples, resolvidas por <RichText />:
 *   **negrito**           → <strong>
 *   {{controller}}        → nome do controlador (NEXT_PUBLIC_CONTROLLER_NAME)
 *   {{email}}             → e-mail de suporte (NEXT_PUBLIC_SUPPORT_EMAIL), como link mailto
 */

export const UPDATED_AT = '2026-11-11';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'callout'; text: string };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export const SUMMARY: { icon: string; text: string }[] = [
  { icon: '🚫', text: 'Não vendemos seus dados nem mostramos anúncios.' },
  { icon: '🔒', text: 'Suas fotos de prova ficam privadas: só o seu rival no duelo vê.' },
  { icon: '⌚', text: 'Dados do relógio só se você ligar, e só o resultado do dia sai do celular.' },
  { icon: '🗑️', text: 'Você apaga a conta e tudo nela pelo próprio app, quando quiser.' },
];

export const SECTIONS: Section[] = [
  {
    id: 'quem-somos',
    title: 'Quem somos',
    blocks: [
      {
        type: 'p',
        text: 'O Level Fit é um app de duelos de hábitos saudáveis entre amigos, oferecido por {{controller}}, controlador dos dados tratados no app. Esta política explica quais dados o app usa, para quê e como você controla esses dados.',
      },
    ],
  },
  {
    id: 'dados-coletados',
    title: 'Dados que coletamos',
    blocks: [
      {
        type: 'ul',
        items: [
          '**Conta:** e-mail e senha. A senha é guardada criptografada pelo nosso provedor de login, e nós não temos acesso a ela.',
          '**Perfil:** nome ou apelido, avatar e cor que você escolhe.',
          '**Duelos:** nome do duelo, metas escolhidas, aposta (texto livre) e o rival.',
          '**Provas:** as fotos que você tira ou escolhe, a observação opcional, a data, as reações e as contestações.',
          '**Assinatura:** se você assina o Premium, recebemos da loja (App Store ou Google Play), por meio do RevenueCat, o status e a validade da assinatura. Não recebemos dados do seu cartão.',
          '**Denúncias e bloqueios** que você fizer.',
        ],
      },
    ],
  },
  {
    id: 'saude',
    title: 'Dados de saúde e do relógio',
    blocks: [
      {
        type: 'p',
        text: 'O app só lê dados de saúde se você ligar **“Relógio”** em Minha conta. Nesse caso, ele lê do **Apple Health** (iPhone) ou do **Health Connect** (Android): passos, treinos, sono, meditação e tempo ao ar livre. A leitura acontece no seu celular. Quando você bate uma meta, só o resultado do dia (ex.: “10.432 passos”) vai para o servidor como prova e aparece para o seu rival no duelo.',
      },
      {
        type: 'callout',
        text: 'Não guardamos o histórico de saúde, não gravamos nada no Apple Health ou no Health Connect, não usamos esses dados para anúncios ou marketing e não os vendemos nem compartilhamos com terceiros.',
      },
      {
        type: 'p',
        text: 'Você desliga a integração quando quiser em Minha conta e pode revogar a permissão nos ajustes do Saúde ou do Health Connect.',
      },
    ],
  },
  {
    id: 'uso',
    title: 'Para que usamos',
    blocks: [
      { type: 'p', text: 'Usamos os dados só para o app funcionar:' },
      {
        type: 'ul',
        items: [
          'entrar na sua conta;',
          'mostrar seus duelos, placar e provas para você e seu rival;',
          'liberar o Premium;',
          'analisar denúncias;',
          'impedir duelos com quem você bloqueou.',
        ],
      },
      {
        type: 'p',
        text: 'A base legal é a execução do serviço que você contratou ao criar a conta e, para dados de saúde, o seu consentimento (LGPD, arts. 7º e 11). **Não vendemos seus dados, não mostramos anúncios e não rastreamos você em outros apps ou sites.**',
      },
    ],
  },
  {
    id: 'fotos',
    title: 'Quem vê suas fotos',
    blocks: [
      {
        type: 'p',
        text: 'Suas provas ficam num armazenamento privado e só aparecem para quem participa do mesmo duelo. Se uma prova for denunciada, a equipe do Level Fit pode vê-la para analisar a denúncia.',
      },
    ],
  },
  {
    id: 'permissoes',
    title: 'Permissões do celular',
    blocks: [
      {
        type: 'ul',
        items: [
          '**Câmera e fotos:** usadas só quando você vai registrar uma prova.',
          '**Saúde (Apple Health / Health Connect):** usada só se você conectar o relógio.',
          '**Notificações:** lembretes diários criados no próprio aparelho, que você desliga em Minha conta.',
        ],
      },
      { type: 'p', text: 'Você pode negar qualquer permissão e continuar usando o resto do app.' },
    ],
  },
  {
    id: 'terceiros',
    title: 'Serviços de terceiros',
    blocks: [
      {
        type: 'ul',
        items: [
          '**Supabase:** hospeda contas, duelos e fotos. Os servidores podem ficar fora do Brasil, com as garantias exigidas pela LGPD para transferência internacional.',
          '**RevenueCat, Apple e Google:** processam a assinatura Premium.',
          '**Apple Health e Health Connect:** de onde o app lê os dados do relógio, no próprio celular.',
        ],
      },
      { type: 'p', text: 'Esses serviços tratam os dados só para prestar o serviço ao Level Fit.' },
    ],
  },
  {
    id: 'retencao',
    title: 'Por quanto tempo guardamos',
    blocks: [
      { type: 'p', text: 'Guardamos seus dados enquanto sua conta existir.' },
      {
        type: 'ul',
        items: [
          'Ao excluir uma prova, a foto é apagada.',
          'Ao bloquear alguém, suas provas naquele duelo são apagadas.',
          'Ao excluir a conta, apagamos sua conta, suas provas e fotos e os duelos em que você joga sozinho.',
        ],
      },
    ],
  },
  {
    id: 'direitos',
    title: 'Seus direitos',
    blocks: [
      { type: 'p', text: 'Pela LGPD, você pode pedir:' },
      {
        type: 'ul',
        items: [
          'confirmação e acesso aos seus dados;',
          'correção;',
          'exclusão;',
          'portabilidade;',
          'informações sobre compartilhamento;',
          'revogação do consentimento.',
        ],
      },
      {
        type: 'p',
        text: 'Você corrige o perfil em **Minha conta** e exclui tudo em **Minha conta → Excluir minha conta**, a qualquer momento. Para os demais pedidos, escreva para {{email}}.',
      },
    ],
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    blocks: [
      {
        type: 'p',
        text: 'Usamos conexão criptografada, armazenamento privado para as fotos e regras de acesso que só deixam cada pessoa ver os duelos de que participa.',
      },
    ],
  },
  {
    id: 'criancas',
    title: 'Crianças',
    blocks: [{ type: 'p', text: 'O Level Fit não é destinado a menores de 13 anos.' }],
  },
  {
    id: 'mudancas',
    title: 'Mudanças nesta política',
    blocks: [
      {
        type: 'p',
        text: 'Se a política mudar, atualizamos a data acima e avisamos no app quando a mudança for importante.',
      },
    ],
  },
  {
    id: 'contato',
    title: 'Contato',
    blocks: [{ type: 'p', text: '**Controlador:** {{controller}}. **E-mail:** {{email}}.' }],
  },
];

/** Passo a passo de exclusão (página exigida pelo Google Play). */
export const DELETE_ACCOUNT_STEPS = [
  'Abra o Level Fit e entre na sua conta.',
  'Vá em **Minha conta**.',
  'Toque em **Excluir minha conta** e confirme.',
];

export const DELETE_ACCOUNT_NOTE =
  'Na hora, apagamos sua conta, perfil, provas, fotos e os duelos em que você joga sozinho. Se não conseguir acessar o app, peça a exclusão pelo e-mail {{email}} usando o endereço da sua conta. Lembre-se de cancelar o Premium na loja, porque excluir a conta não cancela a assinatura.';
