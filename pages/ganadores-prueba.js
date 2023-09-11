import Layout from '../components/layout'
import Ganadores1 from '../components/ganadores1'

import styles from  '../styles/sass/ganadores1.module.sass'
export default function Ganador() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <Ganadores1 />
                </div>
            </div>
        </Layout>
    </>
  )
}