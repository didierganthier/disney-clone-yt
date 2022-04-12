import '../styles/globals.css'
import { Provider } from 'next-auth/client';

function MyApp({ Component, pageProps }) {
  <Provider session={session}>
    <Component {...pageProps} />
  </Provider>
}

export default MyApp
