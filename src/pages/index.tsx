import Layout from '@/components/Layout';
import SEO from '@/components/seo/seo';
import { Banner } from '@/sections';
import type { NextPage } from 'next';

const Home: NextPage = () => 
{  
return (
    <Layout>
      <SEO title="Inicio" />
      <Banner />
    </Layout>
  );
};

export default Home;
