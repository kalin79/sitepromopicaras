import Layout from '../components/layout'
import ComoParticipar from '../components/comoParticipar'

import styles from  '../styles/sass/encuentrapicaras.module.sass'
export default function ComoSeParticipa() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <ComoParticipar />
                </div>
            </div>
        </Layout>
    </>
  )
}