function analisar(){
    let res = document.getElementById('res')
    let time = new Date
    res.innerHTML = `<p>Dia: <mark>${time.getDate()}</mark></p><p>Mês: <mark>${time.getMonth()}</mark></p><p>Ano: <mark>${time.getFullYear()}</mark></p><p>Dia da Semana: <mark>${time}</mark></p><p>Hora: <mark>${time.getHours()}</mark></p><p>Minutos: <mark>${time.getMinutes()}</mark></p><p>Segundos: <mark>${time.getSeconds()}</mark></p>`
}