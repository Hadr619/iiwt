import Head from 'next/head';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Script from 'next/script';

export default function Layout({ children }) {

	
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
     </Head>
    <div className="layout">
    <Header />
        { children }
    <Footer />
      <ScrollToTop smooth />
		<Script src="https://kit.fontawesome.com/e5a98a2ef3.js" crossOrigin="anonymous"></Script>
    </div>
    </>
  )
}
