export default function validarRegistro(valores) {
    let errores = {}
    if (!valores.nombre){
        errores.nombre = "El nombre es obligatorio"
    }
    if (!valores.apellido){
        errores.apellido = "El nombre es obligatorio"
    }
    
    if(!/^([0-9])*$/.test(valores.movil)){
        errores.movil = "Debe contener solo numeros"
    }else {
        if (!valores.movil){
            errores.movil = "El movil es obligatorio"
        }
    }
    if (!valores.lugar){
        errores.lugar = "El nombre es obligatorio"
    }
    if (!valores.instagram){
        errores.instagram = "El nombre es obligatorio"
    }
    if (!valores.email){
        errores.email = "El email es obligatorio"
    }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ){
        errores.email = "Email no valido"
    }
    if ((!valores.politicaDatos) || (valores.politicaDatos === '')){
        errores.politicaDatos = "Política de privacidad es obligatorio"
    }
    if ((!valores.tyc) || (valores.tyc === '')){
        errores.tyc = "Términos y Condiciones es obligatorio"
    }
    if ((!valores.edad) || (valores.edad === '')){
        errores.edad = "Mayor de edad es obligatorio"
    }

    return errores
}