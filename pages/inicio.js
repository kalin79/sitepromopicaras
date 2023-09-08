import Layout from '../components/layout'
import Documento from '../components/inicio/documento'
import Codigo from '../components/inicio/codigo'
import DatosPersonales from '../components/inicio/datos-personales'
import Gracias from '../components/inicio/gracias'

import styles from  '../styles/sass/home.module.sass'
export default function Home({agregarDato,datos,isuser,updateUser,page,updatePage,eliminarDatos}) {
  return (
    <>
        <Layout
            title={'Promo Picaras'}
            description={'Promo Picaras :: ¡Junta tus empaques!'}
        >
            <div className={styles.homePage}>
                <div className={styles.viewOverflow} id='viewOverflow'>
                    { page === 1 &&
                        <Documento 
                            agregarDato={agregarDato} 
                            updateUser={updateUser}
                            updatePage={updatePage}
                        />
                    }
                    { (isuser && page === 2) &&
                            <DatosPersonales 
                                agregarDato={agregarDato}
                                updatePage={updatePage}
                                datos={datos}
                            />
                    }

                    { (isuser && page === 3) &&
                        <Codigo 
                            updatePage={updatePage}
                            datos={datos}
                        />
                    }
                    { (isuser && page === 4) &&
                        <Gracias 
                            updateUser={updateUser}
                            updatePage={updatePage}
                            eliminarDatos={eliminarDatos}
                        />
                    }
                </div>
            </div>
        </Layout>
    </>
  )
}
