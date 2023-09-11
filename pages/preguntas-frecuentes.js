import Layout from '../components/layout'
import Preguntas from '../components/preguntas'

import styles from  '../styles/sass/preguntas.module.sass'
export default function PreguntasFrecuentes() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <Preguntas />
                </div>
            </div>
        </Layout>
    </>
  )
}