import Header from './Header/Header';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import Script from 'next/script';

export default function Layout({ children }) {

	
  return (
    <div className="layout">
    <Header />
        { children }
      <footer>
		<div>
        	<p>Copyright 2021 Is It Worse Than...</p>
		</div>
      </footer>
      <ScrollToTop />
		<Script src="https://kit.fontawesome.com/e5a98a2ef3.js" crossOrigin="anonymous"></Script>
    </div>
  )
}
