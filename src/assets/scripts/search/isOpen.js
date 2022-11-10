function isOpen(horario){
    var hoje = new Date()
    var hFunc = horario[hoje.getDay()]
    var horas = hFunc.split('-')
    var funcionamento = ''
    var classFunc = 'opened'
    horasInicio = horas[0].split(':')
    horasFim = horas[1].split(':')
    
    inicio = checkTime(horasInicio[0], horasFim[0], horasInicio[1], horasFim[1], hoje)
    //fim =  checkTime(horasFim[0], horasFim[1], hoje)
    
    
    if(inicio){
        funcionamento = 'Aberto'
    }else{
        funcionamento = 'Fechado'
        classFunc= 'closed'
    }

    
    return  `<div class="situation ${classFunc} mt-10">${ funcionamento }</div>`;
}

function checkTime(horaIni, horaFim, minIni, minFin, hoje){
    var estadoFunc = true;
    
    if(horaIni < hoje.getHours() && horaFim > hoje.getHours()){
        estadoFunc = true
    }else 
        if(horaIni > hoje.getHours() || horaFim < hoje.getHours()){
            estadoFunc = false
        }
        else{
            if(horaIni == hoje.getHours()){
                if(minIni <= hoje.getMinutes() || minFin >= hoje.getMinutes){
                    estadoFunc = true
                }
                else
                    estadoFunc = false
            }

        }

        return estadoFunc;
}