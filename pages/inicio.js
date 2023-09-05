import Layout from '../components/layout'
import Documento from '../components/inicio/documento'
import Codigo from '../components/inicio/codigo'
import DatosPersonales from '../components/inicio/datos-personales'
// import Gracias from '../components/inicio/gracias'

import styles from  '../styles/sass/home.module.sass'
export default function Home() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className={styles.homePage}>
                <div className={styles.viewOverflow} id='viewOverflow'>
                  <Documento />
                  <DatosPersonales />
                  
                  <Codigo />
                  {/* <Gracias /> */}
                </div>
            </div>
        </Layout>
    </>
  )
}
