// Foi instalado o node-schedule

const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 5', function () { // 'SEGUNDOS MINUTOS HORAS DIA_DO_MES MES DIA_DA_SEMANA'
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})
// DIA_DA_SEMANA -> 0 - Domingo, 1 - Segunda ... 6 - Sábado
// * -> Qualquer segundo, horas, ... DIA_DA_SEMANA
// */ -> Periodiocidade. No exemplo será executado de 5 em 5 segundos


setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000) // 20 segundos

// Algumas opções do próprio JS
// setImmediate
// setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)] // Segunda a Sexta
regra.hour = 11
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})
