import '../styles/App.scss'
import Script from "next/script";
import Head from 'next/head'
// import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }) {
	return (
		<>
		 <Script id="gtag-src"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="gtag-config" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
			<Head>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Component {...pageProps} />
		</>
	)
}
export default MyApp
