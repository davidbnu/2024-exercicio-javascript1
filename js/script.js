const btCalcular = document.querySelector('.btCalcularImc');
const inputNome = document.querySelector('#input-nomeCompleto');
const inputAltura = document.querySelector('#input-altura');
const inputPeso = document.querySelector('#input-peso');
const resultado = document.querySelector('.resultado');

btCalcular.addEventListener('click', () => {
    const nomeInformado = inputNome.value;
    const alturaInforamdo = formataNumero(inputAltura.value);
    const pesoInformado = formataNumero(inputPeso.value);   

    const imc = calculaIMC(alturaInforamdo, pesoInformado);
    console.log(imc);
    const textoResultadoIMC = resultadoIMC(imc);

    resultado.textContent = `Olá ${nomeInformado}. Seu imc é de ${imc}. Nesse caso você está ${textoResultadoIMC}.`;
               
})

function calculaIMC(altura, peso) {    
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function formataNumero(numero) {
    return numero.replace(',','.');
}

function resultadoIMC(imc){
    let descricaoResultadoIMC;
    if (imc > 30) {
        descricaoResultadoIMC = 'Obesidade';
    } else  if (imc > 25) {
        descricaoResultadoIMC = 'Sobrepeso';        
    } else if (imc > 18.5) {
        descricaoResultadoIMC = 'Peso Normal';
    } else {
        descricaoResultadoIMC = 'Abaixo do Peso';
    }

    return descricaoResultadoIMC;
}
