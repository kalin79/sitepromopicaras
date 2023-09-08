import Layout from '../components/layout'
import Ganadores from '../components/ganadores'

import styles from  '../styles/sass/ganadores.module.sass'
export default function Ganador() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <Ganadores />
                </div>
            </div>
        </Layout>
    </>
  )
}