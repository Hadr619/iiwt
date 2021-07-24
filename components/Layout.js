import Header from './Header/Header';
import Footer from './Footer/Footer';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Script from 'next/script';

export default function Layout({ children }) {

	
  return (
    <div className="layout">
    <Header />
        { children }
    <Footer />
      <ScrollToTop smooth />
		<Script src="https://kit.fontawesome.com/e5a98a2ef3.js" crossOrigin="anonymous"></Script>
    </div>
  )
}
