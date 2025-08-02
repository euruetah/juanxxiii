import Link from 'next/link';

export default function NavBar() {
  return (
    <nav style={{marginBottom: '2rem'}}>
      <Link href="/">Inicio</Link> |{' '}
      <Link href="/about">Acerca de</Link> |{' '}
      <Link href="/noticias">Noticias</Link>
    </nav>
  );
}