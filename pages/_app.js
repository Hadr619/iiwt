import '../styles/globals.scss'
import Layout from '../components/Layout'
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { FlipProvider } from 'react-easy-flip'

const progress = new ProgressBar({
  size: 2,
  color: "#f2ce3f",
  className: "bar-of-progress",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return (
    <FlipProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </FlipProvider>
  )
}

export default MyApp
