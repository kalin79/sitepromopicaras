import Layout from '../components/layout'
import Terminos from '../components/terminos'

import styles from  '../styles/sass/terminos.module.sass'
export default function TerminosCondiciones() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <Terminos />
                </div>
            </div>
        </Layout>
    </>
  )
}
