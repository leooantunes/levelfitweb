import Image from 'next/image';
import Link from 'next/link';

import { SUMMARY } from '@/content/privacyPolicy';
import { site } from '@/content/site';

export default function Home() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <h1>
            LEVEL <span>FIT</span>
          </h1>
          <p className="lead">{site.tagline} Desafie um amigo, poste a prova e ganhe o cinturão.</p>
          <ul className="hero-points">
            {SUMMARY.map((s) => (
              <li key={s.text}>
                <span aria-hidden>{s.icon}</span> {s.text}
              </li>
            ))}
          </ul>
          <div className="actions">
            <Link className="btn" href="/privacidade">
              Ler a política de privacidade
            </Link>
            <Link className="btn alt" href="/excluir-conta">
              Excluir minha conta
            </Link>
          </div>
        </div>
        <Image
          className="mascot"
          src="/brasa.png"
          alt="Brasa, o mascote do Level Fit: um lutador de fogo em guarda"
          width={360}
          height={360}
          priority
        />
      </div>
    </section>
  );
}
