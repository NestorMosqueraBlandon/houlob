import { Seo } from '@/types/Seo';
import { NextPage } from 'next';
import Head from 'next/head';

const SEO: NextPage<Seo> = ({ description, author, title, meta = [] }: Seo) => {
  const metadata = [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'author',
      content: author,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title} - Houlob</title>

      {metadata.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}

      <link rel="icon" href="/favicon.ico" />

      <link href='https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css' rel='stylesheet' />
   
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    </Head>
  );
};

SEO.defaultProps = {
  lang: 'es-mx',
  meta: [],
};

export default SEO;
