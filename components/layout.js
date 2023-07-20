import Head from "next/head"
import Header from './header'
import Footer from './footer'
export default function Layout({children,title='',description=''}) {
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
               </Head>
               <Header />
               {children}
               <Footer />
          </>
     )
}