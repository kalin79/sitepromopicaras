import Layout from '../components/layout'
import Premios from '../components/premios/principal'

export default function TerminosCondiciones() {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className=''>
                <div className=''>
                  <Premios />
                </div>
            </div>
        </Layout>
    </>
  )
}
