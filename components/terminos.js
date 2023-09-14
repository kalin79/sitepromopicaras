import { useState, useEffect } from 'react'
 
import Image from 'next/image'
import localFont from "next/font/local"
import styles from  '../styles/sass/terminos.module.sass'

import { gsap } from 'gsap/dist/gsap.js'

const fontAkira = localFont({ 
    src: "../fonts/AkiraExpanded-SuperBold.ttf"
})

const fontMonserratBold = localFont({ 
    src: "../fonts/Montserrat-Bold.ttf"
})

const fontMonserratSemiBold = localFont({ 
    src: "../fonts/Montserrat-SemiBold.ttf"
})
const fontMonserratRegular = localFont({ 
    src: "../fonts/Montserrat-Regular.ttf"
})

const fontPeckham = localFont({ 
    src: "../fonts/PeckhamPress.otf"
})



const Terminos = () => {

    return (
        <>
            <div className='' id='pageTerminos'>

                <div className='container'>

                    <div className={styles.boxTerm} style={fontMonserratRegular.style}>
                        <div>

                            <div className={styles.boxTitle}>
                                <h2>
                                    <Image src='/assets/title2.png' width="430" height="72" alt='Titulo' />
                                    <Image src='/assets/plane1.png' className={styles.avion1} width="452" height="242" alt='Avion' />
                                    <Image src='/assets/plane2.png' className={styles.avion2} width="339" height="278" alt='Avion' />
                                </h2>
                            </div>


                            <h6 style={fontMonserratBold.style}>1.- GENERALES</h6>
                                <p>1.1.- Nombre de la promoción: PROMO CÓMETE AL MUNDO VIAJANDO CON PÍCARAS</p>
                                <p>1.2.-Empresa responsable el “Organizador”: “COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A.” con domicilio en: Av. Maquinarias 2360, urbanización Conde de las Torres, distrito de Lima. RUC 20514584789.</p>
                                <p>1.3.- Ámbito de validez: Promoción válida a nivel nacional. Participan las siguientes presentaciones de productos de la marca Pícaras que cuentan con el código alfanumérico dentro del empaque:</p>
                                    <ul>
                                        <li>Pícaras Clásica x40g</li>
                                        <li>Pícaras Extrema x40g</li>
                                        <li>Pícaras Fresa x40g</li>
                                        <li>Pícaras Chips x40g</li>
                                        <li>Pícaras XL Clásica x60g</li>
                                        <li>Pícaras Menta x40g</li>
                                    </ul>
                                <p>1.4.- Vigencia de la promoción: Desde el 15 de Setiembre del 2023 a las 09:00 horas de la mañana hasta el 30 de Octubre de 2023 a las 17:00 horas de la tarde.</p>
                                <p>1.5.- Premios: (44) premios en total: 2 ganadores de viajes dobles destino a elección entre las cuatro opciones descritas en el punto 5. “Premios a otorgar”, 2 GoPro9, 5 Amazon Fire TV, 5 Scooter Eléctricos, 10 Alexa Amazon parlante y 20 Gifcards de S/200.00 (Doscientos y 00/100 soles) cada una distribuidos de la siguiente manera:</p>
                                
                                <br></br>

                                <div className={styles.scrollTable}>

                                    <div className={styles.tablas}>
                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>SORTEO 1: 09/10/2023</th>
                                                </tr>
                                                <tr>
                                                    <th>CANTIDAD</th>
                                                    <th>DESCRIPCIÓN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Viaje doble según destino a elección*</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Gopro9</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Amazon Fire TV</td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>Scooter Eléctrico</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Alexa Amazon Parlante</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>GiftCards S/.200</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                        <table className={styles.table}>
                                            <thead>
                                                <tr>
                                                    <th colSpan={2}>SORTEO 2: 31/10/2023</th>
                                                </tr>
                                                <tr>
                                                    <th>CANTIDAD</th>
                                                    <th>DESCRIPCIÓN</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Viaje doble según destino a elección*</td>
                                                </tr>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Gopro9</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Amazon Fire TV</td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Scooter Eléctrico</td>
                                                </tr>
                                                <tr>
                                                    <td>5</td>
                                                    <td>Alexa Amazon Parlante</td>
                                                </tr>
                                                <tr>
                                                    <td>10</td>
                                                    <td>GiftCards S/.200</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <br></br>


                            <h6 style={fontMonserratBold.style}>2.- PARTICIPANTES (Mayores de 18 años).</h6>
                                <p>Podrán participar todas aquellas personas naturales residentes dentro del territorio de Perú que sean mayores de edad. Identificados con DNI, CE o PTP.</p>
                                <p>Para participar de la promoción el consumidor debe leer y aceptar los términos y condiciones o bases del concurso, los cuales son publicados en la página web de COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ indicada a continuación: <a href="https://www.promopicaras.pe" alt="" target="_blank">www.promopicaras.pe</a></p>
                                <p>En caso de que una persona no resida en Perú y figure como candidato a cualquiera de los premios, será anulada inmediatamente su participación y otro participante será acreedor a dicho incentivo en sustitución, siempre y cuando este último cumpla con todos los requisitos que se mencionan en la presente promoción.</p>
                                <p>No podrá participar en el concurso ningún empleado de COMPAÑIA NACIONAL DE CHOCOLATES DE PERÚ S.A. ni de proveedores que estén implicados en el concurso.
                                No serán reconocidas como ganadoras aquellas personas de las cuales haya sospecha o conocimiento de intento de fraude, engaño o mala fe sobre todas las instancias de esta promoción.</p>


                            <h6 style={fontMonserratBold.style}>3.- MECÁNICA</h6>
                                <p>Promoción válida del 15 de Setiembre al 30 de Octubre del 2023. Válido a nivel nacional.</p>
                                <p>Las personas interesadas en participar en esta promoción obligatoriamente deberán cumplir con la mecánica detallada a continuación:</p>
                                <p><b>Paso 1:</b> Ingresar a la web <a href="https://www.promopicaras.pe" alt="" target="_blank">www.promopicaras.pe</a> con la finalidad de registrar sus datos personales (nombre y apellidos completos, documento de identidad, correo electrónico y teléfonos) así como seleccionar el destino que quisieran ganar. En tal oportunidad, tras identificarse, el usuario quedará registrado para participar en la promoción; desde dicho momento, podrá iniciar sesión (“loguearse”) con su Documento de Identidad.</p>
                                <p><b>Paso 2:</b> Una vez registrados, los participantes podrán registrar los códigos alfanuméricos (ocho dígitos) que podrán encontrar en el sticker que se encontrará dentro del empaque que participe de la promoción, señalizado por el cintillo amarillo en el frente del laminado.</p>
                                <p><b>Paso 3:</b> Al cumplir con lo establecido en el paso anterior, los participantes contarán con (1) una oportunidad para participar del sorteo por cada código ingresado.</p>
                                <p>Los participantes pueden registrar hasta veinte (20) códigos alfanuméricos por día.</p>
                                <p>Habrá máximo 1 premio por ganador. De ser ganador en el primer sorteo (09/10/2023) ya no podrá participar en el segundo sorteo (31/10/2023). </p>
                                <p>Quedarán excluidos de los sorteos quienes no hayan consignado sus datos o no los hayan consignado correctamente.
                                El participante deberá conservar y exhibir los empaques de todos los productos registrados, debiendo contener  el sticker pegado con el código alfanumérico de ocho dígitos. Es importante mantener los empaques en buen estado en los cuales se pueda verificar el código de forma legible. No se aceptan enmendaduras ni alteraciones al código. COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ se reserva el derecho de verificar a libre discreción los empaques de los productos con los cuales los concursantes participan para entregar el premio. Si perdiste tu envoltura con el código alfanumérico ganador, no podrás reclamar tu premio.
                                De resultar ganador, el participante deberá entregar el empaque con el código ganador registrado a su nombre para corroboración por parte de la agencia encargada de la entrega de premios.</p>
                                <p>El ganador será contactado vía telefónica en las próximas 48 horas para coordinar el recojo del premio que será, exclusivamente dentro del área geográfica del Perú. La entrega de premios será en la agencia asignada a la distribución de premios (Océano Azul Soluciones Integrales SAC) en sus oficinas en Av. Gerardo Unger Mz G Lt 4C. Comas –Lima.</p>
                                <p>Verifica los ganadores del primer sorteo el 10/10/23 y  del segundo sorteo el 01/11/23 en el siguiente link: <a href="https://www.promopicaras.pe" alt="" target="_blank">www.promopicaras.pe</a></p>


                            <h6 style={fontMonserratBold.style}>4.- RESTRICCIONES</h6>
                                <ul>
                                    <li>No pueden participar personas que residan en el extranjero, quedando a discreción de la empresa responsable, el derecho de no otorgar el premio a cualquier usuario que contravenga los términos y condiciones de la presente promoción.</li>
                                    <li>El participante es el único acreedor al premio por lo que es su obligación y responsabilidad estar enterado de las presentes bases y condiciones. </li>
                                    <li>El participante ganador hará efectivo el recojo de su premio presentando su documento nacional de identificación (DNI) o carné de extranjería de ser el caso. En caso desee delegar el recojo del premio, la persona delegada deberá  acercarse con una carta poder con firma legalizada notarial autorizando al tercero al recojo. Adicionalmente deberá adjuntarse la copia del documento de identidad (DNI) o carné de extranjería del usuario ganador; y la persona delegada para el recojo del premio deberá presentar físicamente su documento de identidad (DNI) o carné de extranjería.</li>
                                </ul>

                            <h6 style={fontMonserratBold.style}>5.- PREMIOS A OTORGAR</h6>
                                <ul>
                                    <li>5.1. Cuarenta y cuatro (44) premios en total: </li>
                                        <ul>
                                            <li>2 ganadores de viajes dobles destino a elección dentro de las opciones (Snowboard Argentina, Astroturismo Chile, Glamping Colombia o CCXP Brasil)</li>
                                            <li>2 GoPro9</li>
                                            <li>5 TV Amazon Fire TV Stick 2021- 3era generación</li>
                                            <li>5 Scooter Eléctricos E-SCOOTER ROADTRIP BLACK 2 350W 35KM 25KM/H</li>
                                            <li>10 Alexa Amazon parlante Echo Dot 3era Generación</li>
                                            <li>20 Gifcards de S/200.00 (Doscientos y 00/100 soles)</li>
                                        </ul>
                                    <p>Distribuidos de la siguiente manera:</p>
                                    
                                    <br></br>   
                                    <div className={styles.scrollTable}>                             
                                        <div className={styles.tablas}>
                                            <table className={styles.table}>
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2}>SORTEO 1: 09/10/2023</th>
                                                    </tr>
                                                    <tr>
                                                        <th>CANTIDAD</th>
                                                        <th>DESCRIPCIÓN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Viaje doble según destino a elección*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopro9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Amazon Fire TV</td>
                                                    </tr>
                                                    <tr>
                                                        <td>2</td>
                                                        <td>Scooter Eléctrico</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Alexa Amazon Parlante</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>GiftCards S/.200</td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                            <table className={styles.table}>
                                                <thead>
                                                    <tr>
                                                        <th colSpan={2}>SORTEO 2: 31/10/2023</th>
                                                    </tr>
                                                    <tr>
                                                        <th>CANTIDAD</th>
                                                        <th>DESCRIPCIÓN</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Viaje doble según destino a elección*</td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Gopro9</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Amazon Fire TV</td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Scooter Eléctrico</td>
                                                    </tr>
                                                    <tr>
                                                        <td>5</td>
                                                        <td>Alexa Amazon Parlante</td>
                                                    </tr>
                                                    <tr>
                                                        <td>10</td>
                                                        <td>GiftCards S/.200</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <br></br>

                                    <li>5.2. Detalle de los premios:</li>
                                    <p>En caso de robo y/o hurto de los premios al ganador y/o portador del premio, COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A no es responsable de los mismos. </p>
                                    <p>Todos los premios de gift cards no pueden cambiarse por dinero en efectivo y son de uso exclusivo al portador. En caso de daño o adulteración la gift cards, estas pierden su validez para cualquier efecto, no reembolsable en caso de expiración, pérdida, robo o destrucción de la tarjeta.</p>
                                    <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A no se hace responsable de la atención y/o calidad del servicio donde canjear los premios.</p>
                                    <p>El ganador debe considerar que las gift cards no son recargables, los consumos mayores al monto de la gift card será asumido por el participante. Se puede utilizar las gift cards para pagar el valor total o parte del valor de los artículos que compres en cualquiera de las tiendas físicas y/o virtuales, cabe señalar que hay gift cards que solo son de un solo uso.</p>
                                    <p>Además de lo antes señalado, cada premio se encuentra sujeto a las condiciones específicas siguientes:</p>

                                    <li>5.2.1 VIAJES:</li>
                                    <p>De ser ganador de 1 viaje doble según destino, el ganador podrá escoger un viaje de las cuatro opciones: Snowboard Argentina, Glamping Colombia, Astroturismo Chile o CCXP Brasil detallados en el presente punto.</p>
                                    <p>Todos los premios con relación boletos aéreos solo podrán salir de la ciudad de Lima, el premio de boletos de viaje no es transferible y  solo podrán ser utilizados por el ganador más un (01) acompañante. Los gastos de traslado de origen del ganador de provincia a Lima de corresponder son de cuenta del ganador.</p>
                                    <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A no se responsabiliza de los trámites migratorios, ni requisitos de ingreso a los países, ni de pasaportes vencidos, requisitorias, impedimento de salida del país, así como, pagos de TUA extra, de cancelaciones y/o reprogramaciones de vuelo por parte de la aerolínea, y por los casos en el que el ganador sea retirado de la zona de seguridad y embarque del aeropuerto y/o del avión.</p>
                                    <p>El ganador será responsable del check-in, los pasajes están sujetos a distintas regulaciones y restricciones en la descripción del premio, el ganador deberá tener en cuenta los horarios de check-in físico o virtual de acuerdo a la aerolínea del pasaje entregado, en caso de llegar fuera de la hora establecida, se tendrá en cuenta la política de restricciones de la aerolínea y no siendo responsable COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A de los costos y/o derechos y/o gastos que incurra la reprogramación del vuelo, siendo el ganador el único responsable de los mismos.</p>
                                    <p>El ganador deberá tener en cuenta la política de la aerolínea, con relación a viaje con mascotas, equipaje, pérdida de equipaje, cabe señalar que, COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A no se hace responsable de dichos costos y/o derechos y/o gastos que no estén contemplados en el detalle del premio.</p>
                                    <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A no asumirá ningún costo adicional de equipaje y/o sobrepeso, los equipajes se encuentran contemplados en las condiciones de cada premio.</p>
                                    <p>El ganador deberá tener en cuenta que deberá cumplir con los requisitos migratorios que se necesitan para el ingreso al país de destino, por lo cual, el ganador asumirá los costos y/o gastos por trámites documentarios, gastos de cobertura de seguros de viaje, assist card, tarjeta de vacunación, vacunas requeridas, entre otros requisitos de ingreso al país de destino, no siendo responsable COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A de estos.</p>
                                    <p>Los premios no incluyen gastos relacionados a viáticos y/o gastos personales, no incluye bolsa de viaje para el ganador ni acompañante. COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A solo asumirá gasto de alojamiento, más no, de servicios extras como son: servicios de lavandería, servicios exclusivos del hotel, servicio a la habitación, minibar, restaurantes y/o bar, entre otros. El check-in y el check-out se encuentran sujetos al horario del hotel.</p>
                                    <p>Los premios no se encuentran sujetos a reprogramaciones, asimismo, cada premio tiene condiciones particulares, como son:</p>
                                        <ul>
                                            <li>
                                                <b>SNOWBOARD – ARGENTINA:</b> Este premio es para dos (02) personas, incluye dos (02) boletos aéreos Lima/Buenos Aires vía LATAM Airlines +Buenos Aires/Bariloche vía Aerolíneas Argentinas y dos (02) boletos aéreos Bariloche/Buenos Aires vía Aerolíneas Argentinas + Buenos Aires/Lima vía LATAM Airlines, así como hospedaje: tres (03) días y dos (02) noches de alojamiento en NN HOTELES BARILOCHE EDELWEISS u hotel de la misma categoría, se incluye desayunos. Incluye traslados aeropuerto – hotel y viceversa. Punto de encuentro: Aeropuerto Jorge Chavez (Lima Perú). Los viajeros deberán presentarse en el aeropuerto 3 horas antes de la hora de embarque para garantizar la salida, el premio no cubre reprogramaciones producto de pérdidas del vuelo por tardanza. Especificaciones: Los pasajes son Tarifa Light, la cual incluye un (01) equipaje de mano con un peso máximo de 10 Kgs y un (01) bolso o mochila pequeña (alto = 45 cm x ancho= 35cm x profundidad=20 cm) por viajero. El alojamento consiste en (01) habitación Superior o de similar categoría, incluye el impuesto hotelero, el Check in y el Check Out se encuentran sujetas al horario del hotel. Se incluye una experiencia de Skiboarbing (clases personalizadas de Skiboard + alquiler de indumentaria (guía e instructor profesional/traslado compartido/ botas + esquís + tabla + bastones). Programación de viaje: Entre Junio y Julio del 2024. No aplica para feriados o temporadas altas. 
                                            </li>
                                            <br></br>
                                            <li>
                                                <b>GLAMPLING - COLOMBIA:</b> Este premio es para (02) personas, incluye (02) boletos aéreos Medellín/Lima vía LATAM Airlines y (02) boletos aéreos Lima/Medellín vía LATAM Airlines, así como hospedaje: tres (03) días y dos (02) noches de alojamiento en Bubblesky Guatapé Hotel (experiencia Glamping tipo Domo) u hotel de la misma categoría, incluye desayunos. Incluye traslados Aeropuerto-hotel Guatapé y viceversa. Punto de encuentro: Aeropuerto Jorge Chavez (Lima Perú). Los viajeros deberán presentarse en el aeropuerto 3 horas antes de la hora de embarque para garantizar la salida, el premio no cubre reprogramaciones producto de pérdidas del vuelo por tardanza. Especificaciones: Los pasajes son Tarifa Light, la cual incluye un (01) equipaje de mano con un peso máximo de 10 Kgs y un (01) bolso o mochila pequeña (alto = 45 cm x ancho= 35cm x profundidad=20 cm) por viajero. El alojamento consiste en (01) habitacion Crystal Glamping con Jacuzzi y Sauna o de similar categoría, incluye el impuesto hotelero (los viajeros deberán presentarse a la llegada a Colombia al módulo de migraciones para que les coloquen el sello PT que los exonera del pago de impuestos por viaje de turismo), el Check in y el Check Out se encuentran sujetas al horario del hotel. Programación de viaje: Entre el 27 de noviembre y el 20 de diciembre del 2023. No aplica para feriados y temporada alta. Premio no transferible.
                                            </li>
                                            <br></br>
                                            <li>
                                                <b>ASTROTURISMO – CHILE:</b> Este premio es para dos (02) personas, incluye dos (02) boletos aéreos Lima/Atacama vía LATAM Airlines y dos (02) boletos aéreos Atacama – Lima vía LATAM Airlines, así como hospedaje: tres (03) días y dos (02) noches de alojamiento en Terrantai Hotel u hotel de la misma categoría, se incluye desayunos. Incluye traslados aeropuerto – hotel y viceversa. Punto de encuentro: Aeropuerto Jorge Chavez (Lima Perú). Los viajeros deberán presentarse en el aeropuerto 3 horas antes de la hora de embarque para garantizar la salida, el premio no cubre reprogramaciones producto de pérdidas del vuelo por tardanza. Especificaciones: Los pasajes son Tarifa Light, la cual incluye un (01) equipaje de mano con un peso máximo de 10 Kgs y un(01) bolso o mochila pequeña (alto = 45 cm x ancho= 35cm x profundidad=20 cm) por viajero. El alojamento consiste en (01) habitación Terrantai o de similar categoría, incluye el impuesto hotelero, el Check in y el Check Out se encuentran sujetas al horario del hotel. Se incluye una experiencia de Astroturismo por las 2 noches (experiencia grupal guiada). Programación de viaje: Entre el 27 de noviembre y el 20 de diciembre del 2023. No aplica para feriados o temporadas altas. Premio no transferible.
                                            </li>
                                            <br></br>
                                            <li>
                                                <b>CCXP – BRASIL:</b> Este premio es para dos (02) personas, incluye dos (02) boletos aéreos Lima/Sao Paulo vía LATAM Airlines y dos (02) boletos aéreos Sao Paulo – Lima vía LATAM Airlines, así como hospedaje: cuatro (04) días y tres (03) noches de alojamiento en QOYA by Hilton Sao Paulo u hotel de la misma categoría, se incluye desayunos. Incluye traslados aeropuerto – hotel y viceversa. Punto de encuentro: Aeropuerto Jorge Chavez (Lima Perú). Los viajeros deberán presentarse en el aeropuerto 3 horas antes de la hora de embarque para garantizar la salida, el premio no cubre reprogramaciones producto de pérdidas del vuelo por tardanza. Especificaciones: Los pasajes son Tarifa Light, la cual incluye un (01) equipaje de mano con un peso máximo de 10 Kgs y un (01) bolso o mochila pequeña (alto = 45 cm x ancho= 35cm x profundidad=20 cm) por viajero. El alojamento consiste en (01) habitación Superior Qoya o de similar categoría, incluye el impuesto hotelero, el Check in y el Check Out se encuentran sujetas al horario del hotel. Se incluye boletos dobles para asistir a las CCXP Sao Paulo 2023 por 3 días (se incluye movilidad del hotel al evento y viceversa). Programación de viaje: Entre el 29 de noviembre y el 03 de diciembre del 2023. Premio no transferible.
                                            </li>
                                            <br></br>
                                        </ul>
                                    <br></br>
                                    

                                    <li>5.2.2 GIFTCARDS</li>
                                        <p>
                                            Tarjeta equivalente a 200 soles <br></br>
                                            Especificaciones de las tarjetas:
                                        </p>
                                            <ul>
                                                <li>Tipo De Producto: Tarjeta La Mágica No Recargable</li>
                                                <li>Emisor: Visa</li>
                                                <li>Condiciones: Tarjeta SOLO COMPRAS SIN disposición de efectivo La Mágica Negra</li>
                                                <li>Vigencia: 1 año</li>
                                                <li>Cobertura: a nivel nacional</li>
                                                <li>Consulta de saldos y movimientos, App Ligo</li>
                                                <li>El saldo de la tarjeta se imprime al final de cada voucher de compra</li>
                                                <li>Cambio de Clave en cajeros de la Red Unicard</li>
                                                <li>Central telefónica 714-4300 opción 2 – 4</li>
                                                <li>Consulta de saldos vía cajeros automáticos Visa diferentes a Unicard</li>
                                                <li>Consulta de saldo y activación de tarjeta también a través de la aplicación Ligo disponible en Play Store.</li>
                                            </ul>
                                            <br></br>

                                        <p>Condiciones:</p>
                                            <ul>
                                                <li>La Tarjeta es una tarjeta electrónica que permite a EL CLIENTE o a las personas que éste autorice (en adelante los “Usuarios”) realizar pagos por la adquisición de bienes y/o servicios . </li>
                                                <li>La Tarjeta es pre-pagada y sólo permite utilizar los fondos que asignados a TPP para asociarlos al uso de la Tarjeta, en este caso los s/ 200.00 (doscientos y 00/100 soles) correspondientemente. Tales fondos se registran como un valor monetario ligado a la Tarjeta, el mismo que se reduce cada vez que se realizan transacciones con la Tarjeta.</li>
                                                <li>La Tarjeta no se encuentra vinculada con ninguna cuenta de ahorros o cuenta bancaria del Usuario y no constituye una tarjeta de crédito o tarjeta de débito o supone, en modo alguno, el establecimiento de una relación bancaria con TPP, puesto que ésta únicamente presta los servicios de procesamiento electrónico y gestión de pagos y no realiza ningún tipo de intermediación financiera o actividades bancarias o de financiamiento.</li>
                                                <li>Para hacer uso de la Tarjeta, el Usuario deberá emplear la clave de identificación asignada a la Tarjeta.</li>
                                                <li>Una vez entregada la Tarjeta a USUARIO, éste asume el riesgo de su uso o pérdida, liberando a TPP de toda responsabilidad. En caso de pérdida o robo de la Tarjeta o si el USUARIO considera que alguien ha tenido acceso no autorizado a la clave de identificación asignada a la Tarjeta, EL USUARIO debe comunicar inmediatamente tales hechos a TPP, comunicándose con la Central de UNIBANCA en lima al teléfono 512-2030 y en Provincias al 0800-42121.</li>
                                                <li>El Cliente y/o el Usuario de la Tarjeta tiene un plazo máximo de 90 días para reclamar por la eventual realización de una operación de consumo y/o disposición de dinero no reconocida. Transcurrido dicho plazo no se admitirá reclamo alguno por este concepto.</li>
                                            </ul>

                                            <br></br>
                                    <li>5.3. Recojo de premios:</li>
                                        <p>Los ganadores serán contactados dentro de las 48 horas posterior al día del sorteo. Se solicitarán datos para coordinar el recojo de su premio en la agencia.</p>
                                        <p>Los premios serán recogidos por los ganadores una vez hayan brindado los datos correspondientes y se haya coordinado con ellos la entrega.</p>
                                        <p>Para efectos de coordinar el recojo de los premios respectivos, los ganadores serán contactados por la agencia Océano Azul Soluciones Integrales SAC encargada de la entrega. En esa comunicación se verificarán nuevamente sus datos con su DNI, el número de la boleta de venta y el detalle de los productos adquiridos, y se coordinará día y hora para el recojo del premio.</p>
                                        <p>En caso de que el ganador participe con un documento de identidad cuya dirección se encuentre ubicada en Lima Metropolitana, la entrega del premio se realizará en un plazo promedio de 15 días en la siguiente dirección: Av. Gerardo Unger Mz G Lt 4C. Comas –Lima correspondiente a la agencia Océano Azul Soluciones Integrales SAC encargada de la entrega de premios.</p>
                                        <p>En caso de que el ganador participe con un documento de identidad cuya dirección se encuentre ubicada fuera de Lima Metropolitana, se coordinará con él para el envío de su premio a su domicilio previa coordinación con la agencia encargada de la entrega, en un plazo de 15 días hábiles.</p>
                                        <p>En caso de que el ganador no pueda recoger el premio en la fecha acordada, COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ no se hace responsable por la entrega posterior del mismo. </p>
                                        <p>En caso surgiera un retraso en la entrega del premio debido a factores externos como eventos naturales o retrasos en el transporte, COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ no se hace responsable por tratarse de casos que se encuentran fuera de su control.</p>
                                        <p>En caso de que no sea posible contactar al ganador a partir de los datos registrados en la web <a href="https://www.promopicaras.pe" alt="" target="_blank">www.promopicaras.pe</a> dentro de los 04 días siguientes a la notificación, o habiéndose comunicado con el ganador éste no cumpla con recoger su premio, se entenderá que renuncia al premio y no podrá hacer reclamo alguno en contra de COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ, tampoco corresponderá la entrega del valor del premio.</p>
                                        <p>El participante ganador hará efectivo el recojo de su premio presentando su documento nacional de identificación (DNI) o carné de extranjería de ser el caso, así como el empaque con el código  alfanumérico ganador legible. En caso desee delegar el recojo del premio, la persona delegada deberá acercarse con una carta poder notarial con autorización de recojo. Adicionalmente deberá adjuntarse la copia del documento de identidad (DNI) o carné de extranjería del usuario ganador; y la persona delegada para el recojo del premio deberá presentar físicamente su documento de identidad (DNI) o carné de extranjería, así como el empaque con el código alfanumérico ganador legible.</p>
                                </ul>

                            <h6 style={fontMonserratBold.style}>6.- COMPAÑIA NACIONAL DE CHOCOLATES DEL PERÚ PODRÁ</h6>
                                <ul>
                                    <li>(i)	Ampliar, o modificar el número de Incentivos o premios establecidos en estas bases o reemplazarlos por otros de iguales valores;</li>
                                    <li>(ii)	modificar las fechas de comienzo y finalización del concurso, así como de entrega de premios y publicación de los mismos; </li>
                                    <li>(iii) modificar estas bases; y </li>
                                    <li>(iv) cancelar, suspender o modificar este concurso cuando ocurran circunstancias no imputables al Organizador y no previstas en estas bases o que constituyan caso fortuito o fuerza mayor que lo justifiquen. Toda modificación a los términos y condiciones establecidos en estas bases serán comunicadas al público en general. Todas aquellas personas que deseen participar podrán hacerlo según se establece en estas Bases. Toda la información que los participantes proporcionen con motivo de la presente Promoción será dirigida al “Organizador”.</li>
                                    <li>6.2	Excluyentes de responsabilidad: COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ no se hace responsable por fallas o errores que se presenten en cualquier etapa de la promoción por caso fortuito o fuerza mayor, así como fallas en el sistema que no le sea imputable ni previsible.</li>
                                    <li>6.3	Contacto: Si tiene dudas o comentarios respecto de esta promoción se puede contactar al Instagram de @galletaspicaras </li>
                                    <li>La participación en este sorteo implica la aceptación de las presentes condiciones.</li>
                                    <li>El usuario que participe en el presente sorteo se compromete a sacar en paz y a salvo a COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ de cualquier reclamación, demanda o acción legal de tercero que pudiera generarse, así como indemnizarlo de cualquier gasto erogado por COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ para el caso de cualquier controversia.</li>
                                </ul>

                            <h6 style={fontMonserratBold.style}>7.- CONDICIONES GENERALES DE PARTICIPACIÓN.</h6>
                                <p>El premio es intransferible, no reembolsable y tampoco es canjeable por dinero en efectivo, ni puede cederse para el pago de deudas de ningún tipo.</p>
                                <p>RESPONSABLE DE LA PROMOCION: COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ</p>
                                <p>La empresa “Organizadora” administrará los datos proporcionados por los usuarios y únicamente los utilizará para la finalidad esencial consistente en permitir la participación de los usuarios o miembros, así como el propio uso de las redes sociales, se sujetan a los términos y condiciones de dichas plataformas o sitios.</p>
                                <p>AUTORIZACIONES Y RESPONSABILIDADES</p>
                                <p>Los participantes aceptan que son los únicos responsables por la veracidad de los datos registrados y la falta de veracidad de los mismos les hará perder todo derecho a la asignación del premio.</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ se reserva el derecho de anular o eliminar a aquellos participantes que no cumplan con las condiciones aquí establecidas.</p>
                                <p>Es responsabilidad de COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ informar oportunamente a los ganadores y solicitar el recojo del premio según los plazos establecidos.</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ no se hace responsable en modo alguno por datos que no hayan sido correcta- mente registrados en el servidor, por cualquier interrupción, corte y/o deficiencia que pudiere impedir o dificultar a los participantes el acceso y/o navegación por Internet, incluyendo deficiencia en los servidores, así como cualquier otra situación de este tipo o cualquier otra causa de fuerza mayor toda vez que se entiende que éstas serían, en su caso, generadas por terceros.</p>
                                <p>Si bien el participante cuenta con la opción de no aceptar el tratamiento de sus datos personales para las finalidades esenciales antes señaladas, es importante precisar que ello es necesario para participar de la presente promoción y sorteo por lo que con su mera participación, los Participantes autorizan de manera irrevocable a COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ y/o cualquiera de sus empresas filiales, subsidiarias o relacionadas a usar los derechos de propiedad intelectual y/o derechos de autor y/o derechos de imagen que se deriven de las fotografías, entre otros, mediante las cuales hayan participado (entendiéndose que para dichos efectos conceden una licencia de uso de vigencia indefinida y a nivel mundial). En el supuesto de resultar ganador, el participante conviene en celebrar cualquier documento que sea necesario a fin de que COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ y/o cualquiera de sus empresas filiales, subsidiarias o relacionadas explote y/o uso los contenidos antes referidos.</p>
                                <p>Los participantes que remitan fotografías para participar en este sorteo, autorizan expresa e irrevocablemente a COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ y/o cualquiera de sus empresas filiales, subsidiarias o relacionadas, y/o a los terceros que ésta designe a difundir en los medios que consideren convenientes (señalando de forma enunciativa más no limitativa televisión abierta, televisión de paga, internet, medios impresos, paneles), cualquiera que ellos fueren, su imagen, nombre y apellidos, sin derecho a compensación alguna.</p>
                                <p>A los ganadores se comprometerán a firmar todos los documentos necesarios para acreditar la entrega del premio, así como a entre- gar todos los documentos que le sean requeridos por COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ para acreditar que son los ganadores.</p>
                                <p>RESTRICCIONES GENERALES</p>
                                <p>El premio no es ni canjeable por dinero en efectivo, ni por otros productos, ni es transferible.</p>
                                <p>La participación en esta promoción implicará la aceptación irrestricta e inapelable de sus Bases y condiciones, siendo COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ el único habilitado para su interpretación.</p>
                                <p>ACEPTACIÓN Y MODIFICACIÓN DE LAS BASES</p>
                                <p>Los ganadores se comprometen a prestar colaboración con el objeto de favorecer la difusión de dicho acontecimiento por los medios que COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ determine, a favor de la necesaria transparencia que exige la fe pública. De esta forma será condición para hacer efectivo el premio, que los ganadores participen de las actividades, promociones, eventos, programas o difusión que COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ determine.</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ se reserva el derecho a modificar o extender la vigencia del concurso en cualquier momento siendo ello pasible de aviso a los concursantes y usuarios en general. En el supuesto de que el concurso sea suspendido o cancelado COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ informará al público antes de los 10 días calendarios de finalizado el concurso a través del Instagram de la marca @galletaspicaras</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ se reserva el derecho a modificar el premio incluido en el concurso y sus condiciones, informándolo previamente para evitar algún tipo de afectación a las usuarias.</p>

                            <h6 style={fontMonserratBold.style}>8.- AVISO DE PRIVACIDAD.</h6>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ podrá decidir unilateralmente sobre cualquier punto o cuestión que no estuviese contemplada en las presentes bases, interpretarlas e incluso modificarlas.</p>
                                <p>Los datos personales proporcionados por usted serán utilizados por COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ con domicilio en av. Maquinarias 2360, Cercado de Lima, Perú para registrarle como participante en el presente sorteo, contactarle, realizar las acciones necesarias para determinar si usted es ganador de un concurso o promoción, responder a sus comentarios o solicitudes de información y en caso de que usted resulte ganador para realizar las acciones necesarias para la entrega del premio que corresponda así como para hacer pública su participación a través de distintos medios de comunicación físicos o impresos que COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ considere necesarios.</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A informa que todos los datos personales que nos ha proporcionado, serán tratados con la finalidad esencial de gestionar la participación en el concurso actual, así como la utilización publicitaria del nombre, apellidos y fotografías y/o diseños de los participantes en la promoción del actual o futuros concursos.</p>
                                <p>Se informa que ningún dato personal de contacto (correo electrónico, dirección, teléfono) será divulgado a terceros.</p>
                                <p>El participar de esta promoción implica que el participante previamente ha aceptado las finalidades esenciales para las cuales sus datos personales serán utilizados, con lo cual queda claro el consentimiento voluntario, explícito e informado a COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A domiciliada en Av. Maquinarias N° 2360, Urbanización Conde de las Torres, Lima para el tratamiento y transferencia de sus datos personales, almacenarlos en su banco de datos de Promociones Comerciales, en calidad de titular del banco de datos personales y que se compartan al encargado o responsable de su tratamiento, emisor de datos personales, por el plazo legal permitido y en tanto no revoque el presente consentimiento, a través de medios físicos o electrónicos, en forma directa o indirecta, incluyendo el tratamiento por medios tecnológicos tercerizados, la subcontratación de terceros, así como el intercambio de datos personales desde los ambientes de procesamiento o almacenamiento hacia cualquier destino fuera de las instalaciones físicas de la entidad para cumplir con la finalidad de hacer posible la presente promoción.</p>
                                <p>Asimismo, declara conocer el carácter obligatorio de brindar esta información respecto de la(s) finalidad(es) indicada(s) precedente- mente y que su negativa dificultaría la normal ejecución de las obligaciones propias de la promoción.</p>
                                <p>Finalmente, manifiesta estar instruido en sus derechos de acceso, rectificación, cancelación y oposición, los cuales podrá ejercer a través de la página web www.chocolates.com.pe mediante el Formulario Virtual N°1 Solicitud de Atención de Derechos ARCO, solicitándolo por escrito e indicando nombres y apellidos, documento de identidad, derecho a ejercer, petición concreta, domicilio o e-mail a efectos de las notificaciones, fecha y firma. Para consultas relacionadas podrá ponerse en contacto llamando al teléfono de la línea gratuita 0-800-21220.</p>
                                <p>Se informa al participante que sus datos personales serán usados para la ejecución de la promoción, razón por la cual COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A compartirá con la agencia Océano Azul Soluciones Integrales S.A.C., con RUC Nº  20601509157, domiciliado en Av. Gerardo Unger Mz G Lt 4C. Comas –Lima., Lima, la información del ganador para la entrega de los premios. La información será usada por la agencia por un lapso no mayor a 3 meses.</p>
                                <p>COMPAÑÍA NACIONAL DE CHOCOLATES DE PERÚ S.A declara que ha adoptado las medidas de seguridad adecuadas para mantener segura la información que el participante proporciona.
                                Los datos personales de los(as) consumidores(as) participantes serán de uso confidencial de las empresas involucradas.
                                Consulte	nuestra	Política	de	Protección	de	Datos	Personales	en	 <a href="https://chocolates.com.pe/wp-content/uploads/2021/01/PDFPoli%CC%81ticadeTratamientodeDatos-V3-CNCH.pdf">click aqu&iacute; </a>
                                </p>
                        </div>
                    </div>
                </div>
                


            </div>
        </>
    )
}

export default Terminos
