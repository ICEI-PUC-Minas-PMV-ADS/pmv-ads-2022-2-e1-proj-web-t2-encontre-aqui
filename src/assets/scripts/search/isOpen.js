function isOpen(horario){
    var hoje = new Date()
    var hFunc = horario[hoje.getDay()]
    var horas = hFunc.split('-')
    var funcionamento = ''

    horasInicio = horas[0].split(':')
    horasFim = horas[1].split(':')
    
    inicio = checkTime(horasInicio[0], horasInicio[1], hoje)
    fim =  checkTime(horasFim[0], horasFim[1], hoje)
    
    console.log(inicio)
    console.log(fim)

    if(inicio === true || fim === true){
        funcionamento = 'Aberto'
    }else{
        funcionamento = 'Fechado'
    }

    
    return  `<div class="situation opened mt-10">${ funcionamento }</div>`;
}

function checkTime(hora, min, hoje){
    var estadoFunc = true;
    
    if(hora > hoje.getHours()){
        estadoFunc = true
    }else 
        if(hora < hoje.getHours()){
            estadoFunc = false
        }
        else{
            if(hora == hoje.getHours()){
                if(min >= hoje.getHours()){
                    estadoFunc = true
                }
                else
                    estadoFunc = false
            }

        }

        return estadoFunc;
}