import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>Acerca del Movimiento Juan XXIII</title>
      </Head>
      <main style={{padding: '2rem', fontFamily: 'Arial'}}>
        <h1>Sobre el Movimiento Juan XXIII</h1>
        <p>
          El Movimiento Juan XXIII nació con el propósito de renovar la fe y el compromiso cristiano en la sociedad.
        </p>
        <ul>
          <li><strong>Historia:</strong> Origen y expansión en el mundo y Colombia.</li>
          <li><strong>Carisma:</strong> Evangelización, servicio y comunidad.</li>
          <li><strong>Espiritualidad:</strong> Basada en la oración, los sacramentos y la formación continua.</li>
        </ul>
        <a href="/">Volver al inicio</a>
      </main>
    </>
  );
}