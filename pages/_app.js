import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/sass/globals.sass'

export default function App({ Component, pageProps }) {
    let GTM_ID = process.env.NEXT_PUBLIC_GTM
    // console.log(GTM_ID)
    return (
        <>
            <Script 
                strategy="afterInteractive"  
                src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
            />
            <Script id="google-analytics" strategy="afterInteractive"  >
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GTM_ID}');
                `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}
