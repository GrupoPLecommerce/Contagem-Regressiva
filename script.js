// Define a data de destino para 4 de novembro de 2024
const dataDestino = new Date("2024-11-04T00:00:00").getTime();

// Atualiza o contador a cada segundo
const intervalo = setInterval(() => {
    const agora = new Date().getTime();
    const tempoRestante = dataDestino - agora;

    // Calcula dias, horas, minutos e segundos
    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    // Exibe a contagem no elemento com id "contador"
    document.getElementById("contador").innerHTML =
        `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    // Para a contagem quando chegar ao zero
    if (tempoRestante < 0) {
        clearInterval(intervalo);
        document.getElementById("contador").innerHTML = "A contagem terminou!";
    }
}, 1000);
