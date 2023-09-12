import { useEffect, useState } from 'react';
import Image from 'next/image';
import localFont from 'next/font/local';
import styles from '../styles/sass/preguntas.module.sass';

const fontMontserratBold = localFont({
  src: '../fonts/Montserrat-Bold.ttf',
});

const fontMontserratRegular = localFont({
  src: '../fonts/Montserrat-Regular.ttf',
});

const Preguntas = () => {
  const faqData = [
    {
      question: '1 ¿Cómo participo en la promoción?',
      answer: `
      
      <p>Para participar de la promoción debes cumplir los siguientes pasos:</p>
      <ol>
      <li>Compra tu galleta Pícaras favorita (La clásica, La XL, La Extrema, La Fresa, La Chips o La Menta) identificada con el cintillo amarillo de la promoción.</li>
      <li>Ingresa a <a href="https://www.promopicaras.pe" target="_blank">www.promopicaras.pe</a>, regístrate y selecciona el destino al que quisieras viajar.</li>
      <li>Ingresa tu código alfanumérico (8 dígitos) que se encuentra dentro del empaque</li>
      <li>¡Listo! Ya estas participando de los sorteos.</li>
      </ol>
      
      <p>Recuerda guardar todos tus empaques con el código alfanumérico con los que participas para poder verificar en caso ser acreedor del premio.</p>
      
      <p>Para más información ver Términos y condiciones: <a href="https://promopicaras.pe/terminos-condiciones" target="_blank">aquí</a></p>
      `,
    },
    {
      question: '2 ¿Cuáles son los productos Pícaras que participan de la promoción?',
      answer: `
      <p>Participan las siguientes presentaciones identificadas con el cintillo amarillo:</p>
      <ul>
      <li>Pícaras Clásica 40g</li>
      <li>Pícaras Extema 40g</li>
      <li>Pícaras Fresa 40g</li>
      <li>Pícaras Chips 40g</li>
      <li>Pícaras Menta 40g</li>
      <li>Pícaras XL 60g</li>
      </ul>
      `,
    },
    {
      question: '3 ¿Cuál es la vigencia de la promoción?',
      answer: `
      <p>La promoción tiene vigencia desde el 15 de setiembre al 30 de Octubre de 2023, ambas fechas inclusive.
      <br>
      Para más información, ve a <a href="https://promopicaras.pe/terminos-condiciones">Términos y Condiciones</a>
      </p>
      `,
    },
    {
      question: '4. ¿Quiénes pueden participar de la promoción?',
      answer: `
      <ul>
      <li>Los participantes/usuarios deben ser mayores de 18 años.</li>
      <li>Los participantes/usuarios deben tener su residencia y domicilio en la República del Perú.</li>
      <li>No podrá participar en el concurso ningún empleado de COMPAÑIA NACIONAL DE CHOCOLATES DE PERÚ S.A. ni de proveedores que estén implicados en el concurso.</li>
      </ul>
      `,
    },
    {
      question: '5. ¿Dónde encuentro el código para participar del concurso?',
      answer: `
      <p>Encuentra los códigos alfanuméricos (8 dígitos) al interior de cada empaque de galleta Picaras que tenga el cintillo de la promoción.</p>
      `,
    },
    {
      question: '6. Si gané y se perdió mi envoltura donde estaba el código alfanumérico ganador ¿igual puedo reclamar mi premio?',
      answer: `
      <p>
      Si perdiste tu envoltura con el código alfanumérico ganador, no podrás reclamar tu premio.
      Para más información, ver <a href="https://promopicaras.pe/terminos-condiciones">Términos y Condiciones</a></p>
      `,
    },
    {
      question: '7. ¿Cuándo serán los sorteos?',
      answer: `
      <p>Los sorteos se realizarán el lunes 09 de octubre a las 17:00 horas y el martes 31 de octubre a las 17:00 horas.</p>
      `,
    },
    {
      question: '8.¿Cómo sé si gané?',
      answer: `
      <p>El ganador será contactado vía telefónica en las próximas 48 horas para coordinar el recojo del premio que será, exclusivamente dentro del área geográfica del Perú. </p>
      <p>Verifica los ganadores del primer sorteo el 10/10/23 y del segundo sorteo el 01/11/23 en el siguiente link: <a href="https://www.promopicaras.pe" target="_blank">www.promopicaras.pe</a></p>
      `,
    },
    {
      question: '9. ¿Un familiar puede recibir mi premio?',
      answer: `
      <p>En caso el ganador no pueda recibir el premio personalmente podrá nombrar a un apoderado para recibir el mismo, informando a la agencia encargada de la entrega del premio al momento del contacto, indicando los nombres y número de DNI del apoderado.    
      </p>
      <p>   El apoderado deberá presentar:
      </p>
      <ol>
      <li>Carta poder con firma legalizada notarial autorizando al tercero el recojo.</li>
      <li>Copia del documento de identidad (DNI) o carné de extranjería del usuario ganador; y la persona delegada para el recojo del premio deberá presentar físicamente su documento de identidad (DNI) o carné de extranjería.</li>
      <li>El empaque ganador, donde se pueda visualizer de forma legible el código alfanumérico ganador.</li>
      </ol>
      <p>Para más información, ver <a href="https://promopicaras.pe/terminos-condiciones">Términos y Condiciones</a></p>
      `,
    },
    {
      question: '10. ¿Puedo participar varias veces?',
      answer: `
      <p>Los participantes pueden registrar hasta veinte (20) códigos alfanuméricos por día.
      </p>
      <p>    Habrá máximo 1 premio por ganador. De ser ganador en el primer sorteo (09/10/2023) ya no podrá participar en el segundo sorteo (31/10/2023). 
      </p>
      `,
    },
    // Agrega más preguntas y respuestas aquí
  ];

  const [pagLista, setpagLista] = useState(false)
  const [activeQuestions, setActiveQuestions] = useState(Array(faqData.length).fill(false));

  const handleQuestionClick = (index) => {
    const newActiveQuestions = [...activeQuestions];
    newActiveQuestions[index] = !newActiveQuestions[index];
    setActiveQuestions(newActiveQuestions);
  };
  const createMarkup =  (data) => {
    return {__html: data}
    }


    useEffect( () => {
        setpagLista(true)
    },[])

  return pagLista ? (
    <>
      <div className='' id='preguntasFrecuentes'>
        <div className='container'>
          <div className={styles.boxFaq}>
            <div className={styles.boxTitle}>
                <h2>
                    <Image src='/assets/faq.svg' width='420' height='80' alt='Titulo' />
                    <Image src='/assets/plane1.png' className={styles.avion1} width='452' height='242' alt='Avion' />
                    <Image src='/assets/plane2.png' className={styles.avion2} width='339' height='278' alt='Avion' />
                </h2>
            </div>

            <div className={styles.faq}>
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className={styles.question}
                >
                
                    

                  <div className={styles.questionDiv}>
                    <div className={styles.borde}>
                        <Image src='/assets/borde1.png' width='885' height='78' alt='Borde' />

                    </div>
                    <h4 style={fontMontserratBold.style}>{item.question}</h4>
                    <div
                      className={styles.toggleButton}
                      onClick={() => handleQuestionClick(index)}
                    >
                      {activeQuestions[index] ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                          <path d="M29.6533 18.1283C24.5478 12.3161 19.7991 6.207 14.6993 0.394874C14.0029 -0.397158 12.8459 0.109512 12.5351 0.971431C11.1364 4.86753 9.63985 8.74034 7.60225 12.3453C5.56464 15.9502 3.01476 19.2115 0.367023 22.3738C-0.0876962 22.9154 -0.156767 23.6958 0.367023 24.2258C0.833256 24.6975 1.74269 24.7674 2.19742 24.2258C4.98329 20.9004 7.68859 17.4643 9.83556 13.6672C11.9825 9.87015 13.5539 5.77022 15.0332 1.67028L12.8689 2.24683C17.9745 8.05895 22.7231 14.1681 27.8229 19.9802C28.9338 21.244 30.7584 19.3862 29.6533 18.1283Z" fill="#FFD700"/>
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 25" fill="none">
                          <path d="M0.342807 6.47794C5.44833 12.2901 10.197 18.3992 15.2968 24.2113C15.9932 25.0034 17.1502 24.4967 17.461 23.6348C18.8597 19.7387 20.3562 15.8659 22.3938 12.2609C24.4314 8.65603 26.9813 5.39472 29.6291 2.23241C30.0838 1.6908 30.1529 0.910415 29.6291 0.380452C29.1628 -0.0912736 28.2534 -0.161159 27.7987 0.380452C25.0128 3.70583 22.3075 7.14186 20.1605 10.939C18.0136 14.7361 16.4422 18.836 14.9629 22.9359L17.1272 22.3594C12.0216 16.5472 7.27297 10.4381 2.1732 4.62598C1.0623 3.36222 -0.762335 5.22001 0.342807 6.47794Z" fill="#FFD700"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <div className={`${styles.answer} ${activeQuestions[index] ? styles.visible : styles.hidden}`}>
                    <p dangerouslySetInnerHTML={ createMarkup(item.answer) } style={fontMontserratRegular.style}></p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : null;
};

export default Preguntas;


