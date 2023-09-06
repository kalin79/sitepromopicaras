import Layout from '../components/layout'
import EncuentraPicaras from '../components/encuentraPicaras'

import styles from  '../styles/sass/encuentrapicaras.module.sass'
export default function EncuentraTusPicaras() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <EncuentraPicaras />
                </div>
            </div>
        </Layout>
    </>
  )
}
