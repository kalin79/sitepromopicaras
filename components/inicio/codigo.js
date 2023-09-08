import { useState, useEffect,useRef } from 'react'
 
import Image from 'next/image'
import Popup from '../../components/popup/codigoError'
import styles from  '../../styles/sass/home.module.sass'
import localFont from "next/font/local"



import { gsap } from 'gsap/dist/gsap.js'


import { CSSRulePlugin } from 'gsap/dist/CSSRulePlugin.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin.js'

gsap.registerPlugin(CSSRulePlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(ScrollToPlugin)

const fontAkira = localFont({ 
    src: "../../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../../fonts/Montserrat-Bold.ttf"
})

const fontMonserratSemiBold = localFont({ 
    src: "../../fonts/Montserrat-SemiBold.ttf"
})
const fontMonserratRegular = localFont({ 
    src: "../../fonts/Montserrat-Regular.ttf"
})

const fontPeckham = localFont({ 
    src: "../../fonts/PeckhamPress.otf"
})



const Codigo = ({updatePage,datos}) => {

    const inputCode = useRef(null);

    
    const [codigos, setCodigos] = useState([])
    const [errorCode, setErrorCode] = useState("")
   
   

    const handleSubmitCode = (e) => {
        e.preventDefault()
        console.log(codigos)
        if (codigos.length > 0){
            // Debemos hacer la implementacion de la api
            console.log("pase")
            updatePage(4)

        }else{
            console.log('error')
        }
        
    }

    const handleAddCode = async () => {
        setErrorCode("")
        console.log(inputCode.current.value)
        const _code = await inputCode.current.value
        // Comprobar si hay existe el codigo dentro del arreglo
        if (_code.trim().length != 0){
            if (codigos.some(codigoState => codigoState === _code )){
                console.log('Ya existe')
                setErrorCode("Ya ingreso ese código")
            }else{

                if (_code === "123456") {
                    // Si el codigo no existe en la BD mostramos el POPUP
                    const tl = gsap.timeline()
                    const codePopup = document.getElementById("codePopup")
                    tl.to(codePopup, {display:'block'})
                    tl.to(codePopup, {opacity: 1})
                }else{
                    // si el codigo no existe en el arreglo entonces lo agregamos
                    setCodigos([_code,...codigos])
                    inputCode.current.value = ""
                }
            }
        }else{
            setErrorCode("Debe ingresar el código")
        }
    }
    


    


    return (
        <>
            <Popup />
            <div className={`${styles.bgRegistro} ${ styles.pageCodigo }  heightView`} id='pageCodigo'>
                <div className='container'>
                <div className={`${styles.gridMain} separationTopMain2`}>
                        <div className={styles.itemWorld}>
                            <div className={styles.contentWorld}>
                                <Image src='/assets/mundo.png' width="288" height="288" className={styles.containerImg} alt='Comente el Mundo viajando' />
                            </div>
                        </div>
                        <div className={`${styles.itemForm} ${styles.itemFrom3}`}>
                            <div className={styles.containerImgCodigo}>
                                <Image src='/assets/codigo.png' width="340" height="183" alt='Comente el Mundo viajando' />
                            </div>
                            <div className={styles.imgTitle}>
                                <Image src='/assets/txtregistra.svg' width="371" height="42" alt='Registra los codigos de tus empaques' />
                            </div>
                            <form
                                onSubmit={handleSubmitCode}
                                noValidate
                            >
                                <h2 style={fontMonserratSemiBold.style}>
                                Puedes registrar todos los códigos <br />que tengas.
                                </h2>
                                <div className={styles.containerCode} style={fontMonserratSemiBold.style}>
                                    <input type="text" ref={inputCode} maxLength="12" name="code" placeholder='Ingresa tu código...'/>
                                    <button type='button' onClick={handleAddCode} style={fontMonserratBold.style}>AÑADIR CÓDIGO</button>
                                </div>
                                {errorCode && 
                                    <div className={`contentError ${styles.contentError}`}>
                                        <label style={fontMonserratRegular.style}>{errorCode}</label>
                                    </div>
                                }
                                <div className={styles.viewCode}>
                                    {Object.values(codigos)?.map((codigo,index) => (
                                        <div className={styles.items} key={index}>
                                            <p style={fontMonserratSemiBold.style}>{codigo}</p>
                                            {/* <div className={styles.ContentTrash}>
                                                <Image src='/assets/trash.png' width="30" height="33" alt='Eliminar Codigo' />
                                            </div> */}
                                        </div>
                                    ))}
                                    
                                </div>
                                <div>
                                    <button type='submit' style={fontMonserratBold.style}>ENVIAR CÓDIGOS</button>
                                </div>
                            </form>
                            <div className={styles.recordatorioUser}>
                                <Image src='/assets/recordarUsuario.png' alt='Mira el video de la promo' width="470" height="119" />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Codigo
