import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero';

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
        <main>
          <h1>Welcome to Disney+</h1>
        </main>
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
