import { useState } from 'react'

import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/sass/globals.sass'

export default function App({ Component, pageProps }) {

    const VALORES_INICIALES = {
        tipoDoc: '',
        documento: '',
        nombre: '',
        apellido: '',
        email: '',
        movil: '',
        lugar: '',
        instagram: '',
        id: '',
    }

    const [datos, setDatos] = useState(VALORES_INICIALES)
    const [isuser, setIsuser] = useState(false)
    const [page, setPage] = useState(1)

    const agregarDato = (llave, dato) => {
        console.log(datos)
        setDatos({
            ...datos,
            [llave] : dato
        })
    }

    const eliminarDatos = () => {
        setDatos(VALORES_INICIALES)
    }

    const updateUser = (dato) => {
        setIsuser(dato)
    }

    const updatePage = (dato) => {
        setPage(dato)
    }
    
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
            <Component {...pageProps} 
                agregarDato={agregarDato}
                datos={datos}
                isuser={isuser}
                updateUser={updateUser}
                page={page}
                updatePage={updatePage}
                eliminarDatos={eliminarDatos}
            />
        </>
    )
}
