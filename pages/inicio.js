import Head from "next/head"

import Layout from '../components/layout'


export default function Home() {
  return (
    <>
        <Head>
            <title>Promo Picaras</title>
            <meta name="title" content='Promo Picaras :: ¡Junta tus empaques!' />
            <meta name="description" content='Muy pronto vas a comerte el mundo' />
            <meta property="og:image" content="https://promopicaras.pe/assets/post.png" />
            <meta property="og:image:type" content="png" />
            <meta property="og:title" content="Promo Picaras" />
            <meta property="og:description" content="Muy pronto vas a comerte el mundo" />
            <meta property="og:site_name" content="https://promopicaras.pe/, Lima Peru" />
            
            <meta name="twitter:image" content="https://promopicaras.pe/assets/post.png" />
            <meta name="twitter:title" content="Promo Picaras" />
            <meta name="twitter:description" content="Muy pronto vas a comerte el mundo" />
            <meta name="twitter:site" content="@publisher_handle" />

            <meta name="robots" content="index,follow"/>
        </Head>
        <Layout
            title={'Digitas Perú'}
            description={'Digitas Perú :: Somos Digitas Perú'}
        >
            dddd
        </Layout>
    </>
  )
}
