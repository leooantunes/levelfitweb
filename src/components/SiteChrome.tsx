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
            <li>
              <Link href="/privacidade">Privacidade</Link>
            </li>
            <li>
              <Link href="/excluir-conta">Excluir conta</Link>
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
      <div className="wrap">
        <p>
          © {new Date().getFullYear()} {site.controllerName ?? '[SEU NOME OU EMPRESA]'} · {site.appName}
        </p>
        <p className="footer-links">
          <Link href="/privacidade">Política de Privacidade</Link>
          <Link href="/excluir-conta">Excluir conta</Link>
          {site.supportEmail && <a href={`mailto:${site.supportEmail}`}>Suporte</a>}
        </p>
      </div>
    </footer>
  );
}
