export default function validarDNI(valores) {
    let errores = {}

    if(!/^([0-9])*$/.test(valores.documento)){
        errores.documento = "Debe contener solo numeros"
        return errores
    }else {
        if (!valores.documento){
            errores.documento = "Ingrese su número de documento"
            return errores
        }else{
            if (valores.tipoDoc === 'DNI'){
                if ((valores.documento).length != 8){
                    errores.documento = "Debe contener 8 digitos"
                    return errores
                }
            }else{
                if (valores.tipoDoc === 'CE'){
                    if ((valores.documento).length != 9){
                        errores.documento = "Debe contener 9 digitos"
                        return errores
                    }
                }
            }
        }
    }

    if (!valores.tipoDoc){
        errores.documento = "Seleccione el tipo de documento"
        return errores
    }

    return errores
}