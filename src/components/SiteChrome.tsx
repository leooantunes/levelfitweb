import Image from 'next/image';
import Link from 'next/link';

import { site } from '@/content/site';

export function Wordmark() {
  return (
    <span className="wordmark">
      LEVEL <span>FIT</span>
    </span>
  );
}

const SECTIONS = [
  { href: '/#recursos', label: 'Recursos' },
  { href: '/#como-funciona', label: 'Como funciona' },
  { href: '/#planos', label: 'Planos' },
  { href: '/#suporte', label: 'Suporte' },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/" className="brand" aria-label="Level Fit, página inicial">
          <Image src="/icon.png" alt="" width={36} height={36} priority />
          <Wordmark />
        </Link>
        <nav aria-label="Principal">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s.href} className="nav-section">
                <Link href={s.href}>{s.label}</Link>
              </li>
            ))}
            <li>
              <Link href="/#baixar" className="btn btn-sm">
                Baixar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div>
          <Wordmark />
          <p>{site.tagline}</p>
        </div>
        <nav aria-label="Rodapé" className="footer-links">
          <Link href="/#recursos">Recursos</Link>
          <Link href="/#planos">Planos</Link>
          <Link href="/#suporte">Suporte</Link>
          <Link href="/privacidade">Política de Privacidade</Link>
          <Link href="/excluir-conta">Excluir conta</Link>
          {site.supportEmail && <a href={`mailto:${site.supportEmail}`}>{site.supportEmail}</a>}
        </nav>
        <p className="copy">
          © {new Date().getFullYear()} {site.controllerName ?? '[SEU NOME OU EMPRESA]'} · {site.appName}
        </p>
      </div>
    </footer>
  );
}
