import Head from 'next/head';
import NavBar from '../components/NavBar';
import noticias from '../data/noticias.json';

export default function Noticias() {
  return (
    <>
      <Head>
        <title>Noticias - Movimiento Juan XXIII</title>
      </Head>
      <main style={{padding: '2rem', fontFamily: 'Arial'}}>
        <NavBar />
        <h1>Noticias y Actividades</h1>
        {noticias.length === 0 ? (
          <p>No hay noticias en este momento.</p>
        ) : (
          <ul>
            {noticias.map(noticia => (
              <li key={noticia.id} style={{marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem'}}>
                <h2>{noticia.titulo}</h2>
                <p><strong>Fecha:</strong> {noticia.fecha}</p>
                <p>{noticia.descripcion}</p>
                <p><em>Autor: {noticia.autor}</em></p>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}