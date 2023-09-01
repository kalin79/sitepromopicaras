import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/sass/globals.sass'

export default function App({ Component, pageProps }) {
    let GTM_ID = process.env.NEXT_PUBLIC_GTM
    let PIXEL_ID = process.env.NEXT_PUBLIC_PIXEL
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
            <Script id="facebook-pixel">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', ${PIXEL_ID});
                        fbq('track', 'CompleteRegistration');
                    `}
            </Script>
            <Component {...pageProps} />
        </>
    )
}
