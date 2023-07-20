import Head from "next/head"
import Script from 'next/script'

import Header from './header'
import Footer from './footer'
export default function Layout({children,title='',description=''}) {
     let GTM_ID = process.env.NEXT_PUBLIC_GTM
     return (
          <>
               <Head>
                    <title>{title}</title>
                    <meta name="title" content={title} />
                    <meta name="description" content={description} />
                    <meta property="og:image" content="https://promopicaras.pe/assets/post.png" />
                    <meta property="og:image:type" content="png" />
                    <meta property="og:title" content="Promo Picaras" />
                    <meta property="og:description" content="Promo Picaras" />
                    <meta property="og:site_name" content="https://promopicaras.pe/, Lima Peru" />
                    
                    <meta name="twitter:image" content="https://promopicaras.pe/assets/post.png" />
                    <meta name="twitter:title" content="Promo Picaras" />
                    <meta name="twitter:description" content="Promo Picaras" />
                    <meta name="twitter:site" content="@publisher_handle" />

                    <meta name="robots" content="index,follow"/>
                    {/* <meta
                         http-equiv="Content-Security-Policy" 
                         content="default-src 'self'; img-src https://*; child-src 'none';" 
                    /> */}
                    <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
                    <Script id="google-analytics">
                         {`
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());
                    
                              gtag('config', '${GTM_ID}');
                         `}
                    </Script>
               </Head>
               <Header />
               {children}
               <Footer />
          </>
     )
}