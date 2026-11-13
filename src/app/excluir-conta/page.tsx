import type { Metadata } from 'next';
import Link from 'next/link';

import { RichText } from '@/components/RichText';
import { DELETE_ACCOUNT_NOTE, DELETE_ACCOUNT_STEPS } from '@/content/privacyPolicy';

export const metadata: Metadata = {
  title: 'Excluir conta',
  description: 'Como excluir sua conta do Level Fit e todos os dados ligados a ela.',
  alternates: { canonical: '/excluir-conta' },
};

export default function DeleteAccountPage() {
  return (
    <div className="legal">
      <div className="wrap">
        <article className="doc doc-narrow">
          <p className="kicker">Seus dados</p>
          <h1>Como excluir sua conta e seus dados</h1>
          <ol className="steps">
            {DELETE_ACCOUNT_STEPS.map((step) => (
              <li key={step}>
                <RichText text={step} />
              </li>
            ))}
          </ol>
          <p className="callout">
            <RichText text={DELETE_ACCOUNT_NOTE} />
          </p>
          <p className="see-also">
            Detalhes sobre o que guardamos e por quanto tempo estão na{' '}
            <Link href="/privacidade#retencao">Política de Privacidade</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}
