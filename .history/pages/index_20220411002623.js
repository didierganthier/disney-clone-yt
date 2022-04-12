import { getSession } from 'next-auth/client';
import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  const [session] = useSession();

  return (
    <div>
      <Head>
        <title>Disney+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}

export async function getServerSideProps(context){
  const session = getSession(context);

  return {
      props: {
          session,
      },
  };
}
