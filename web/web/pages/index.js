import Head from 'next/head';
import NavBar from '../components/NavBar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Movimiento Juan XXIII Colombia</title>
      </Head>
      <main style={{padding: '2rem', fontFamily: 'Arial'}}>
        <NavBar />
        {/* resto del contenido */}
      </main>
    </>
  );
}