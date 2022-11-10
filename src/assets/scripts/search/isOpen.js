function isOpen(horario){
    var hoje = new Date()
    var hFunc = horario[hoje.getDay()]
    var horas = hFunc.split('-')
    var funcionamento = ''
    var classFunc = 'opened'
    horasInicio = horas[0].split(':')
    horasFim = horas[1].split(':')
    
   
    strh1 = horas[1];
   
    
    check = checkTime(horas[0],horas[1], hoje)
    
    if(check){
        funcionamento = 'Aberto'
    }else{
        funcionamento = 'Fechado'
        classFunc= 'closed'
    }

    return  `<div class="situation ${classFunc} mt-10">${ funcionamento }</div>`;
}

function checkTime(horaIni,horaFin, hoje){
    var horaAtual = `${hoje.getHours()}:${hoje.getMinutes()}`
    var estadoFunc = true;
    if(horaIni > horaAtual || horaFin < horaAtual)
        estadoFunc = false;
    
    console.log(estadoFunc, horaIni, horaFin, horaAtual)
    return estadoFunc;
}