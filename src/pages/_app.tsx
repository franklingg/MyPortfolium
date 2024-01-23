import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps, NextWebVitalsMetric } from "next/app";
import Head from "next/head";
import { LangProvider } from "~/contexts/langContext";
import { Navbar, ContactForm, Footer } from "~/components";
import "~/i18n";

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Franklin Regis | Developer</title>
      </Head>
      <LangProvider>
        <Navbar />
        <ContactForm />
        <Component {...pageProps} />
        <Footer />
      </LangProvider>
    </>
  );
}
export default MyApp;
