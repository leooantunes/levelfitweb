import type { Metadata } from 'next';
import Link from 'next/link';

import { RichText } from '@/components/RichText';
import { SECTIONS, SUMMARY, UPDATED_AT, type Block } from '@/content/privacyPolicy';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Quais dados o Level Fit usa, para quê e como você controla esses dados. Sem anúncios, sem venda de dados, fotos privadas e exclusão de conta pelo app.',
  alternates: { canonical: '/privacidade' },
};

const updatedLabel = new Date(`${UPDATED_AT}T12:00:00`).toLocaleDateString('pt-BR', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

function PolicyBlock({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return (
        <p>
          <RichText text={block.text} />
        </p>
      );
    case 'callout':
      return (
        <p className="callout">
          <RichText text={block.text} />
        </p>
      );
    case 'ul':
    case 'ol': {
      const List = block.type;
      return (
        <List>
          {block.items.map((item) => (
            <li key={item}>
              <RichText text={item} />
            </li>
          ))}
        </List>
      );
    }
  }
}

export default function PrivacyPage() {
  return (
    <div className="legal">
      <div className="wrap legal-grid">
        <aside className="toc" aria-label="Nesta página">
          <p className="toc-title">Nesta página</p>
          <ol>
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.title}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="doc">
          <p className="kicker">Documento legal</p>
          <h1>Política de Privacidade</h1>
          <p className="updated">
            Atualizada em <time dateTime={UPDATED_AT}>{updatedLabel}</time>
          </p>

          <div className="card summary">
            <h2>Resumo em 30 segundos</h2>
            <ul>
              {SUMMARY.map((s) => (
                <li key={s.text}>
                  <span aria-hidden>{s.icon}</span> {s.text}
                </li>
              ))}
            </ul>
          </div>

          {SECTIONS.map((section, i) => (
            <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
              <h2 id={`${section.id}-h`}>
                <span className="num">{i + 1}</span>
                {section.title}
              </h2>
              {section.blocks.map((block, j) => (
                <PolicyBlock key={j} block={block} />
              ))}
            </section>
          ))}

          <p className="see-also">
            Quer apagar seus dados? Veja <Link href="/excluir-conta">como excluir sua conta</Link>.
          </p>
        </article>
      </div>
    </div>
  );
}
