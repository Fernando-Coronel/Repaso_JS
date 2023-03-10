const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let diasSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    mes = meses[fecha.getMonth()];
    let year = fecha.getFullYear();

    document.getElementById("hora").innerHTML= `${hr}:${min}:${seg}`;
    document.getElementById("fecha").innerHTML = `${diasSemana} ${dia} ${mes} ${year}`;

    document.getElementById("contenedor").classList.toggle("animar");
}

const formatoHora = (hora) => {
    if(hora < 10) hora = "0" + hora; return hora;
}

setInterval(mostrarReloj, 1000);
