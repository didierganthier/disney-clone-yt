import { getSession, useSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero';
import Slider from '../components/Slider';

export default function Home() {
  const [session] = useSession();

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {!session? (
        <Hero/>
      ): (
        <section>
          <Slider/>
        </section>
      )}
    </div>
  )
}

export async function getServerSideProps(context){
  const session = await getSession(context);

  return {
      props: {
          session,
      },
  };
}
