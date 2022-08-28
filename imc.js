const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura")
const botao = document.querySelector("#botao")
const paragrafo1 = document.querySelector("#paragrafo1")

function imc (p,a) {
    let calculoFinal =''
    botao.addEventListener("click",()=>{ 
        let pesoFinal = peso.value
        let alturaFinal = altura.value
        p = pesoFinal * 10000
        a = alturaFinal * alturaFinal
        calculoFinal = p / a
        
            var imc = calculoFinal;
                if (imc < 18.5){
                    paragrafo1.innerHTML = calculoFinal.toFixed(1)
                    paragrafo2.innerHTML = `O resultado desse imc foi abaixo peso`
                }
                else if (imc >= 18.5 && imc < 25){ 
                    paragrafo1.innerHTML = calculoFinal.toFixed(1)
                    paragrafo2.innerHTML = `O resultado desse imc foi peso ideal`
                }
                else if (imc >= 25 && imc <= 30){
                    paragrafo1.innerHTML = calculoFinal.toFixed(1)
                    paragrafo2.innerHTML = `O resultado desse imc foi excesso de peso`
                }
                else if (imc >= 30 && imc < 35 ) {
                    paragrafo1.innerHTML = calculoFinal.toFixed(1)
                    paragrafo2.innerHTML = `O resultado desse imc foi Obesidade`
                }
                else if (imc > 35) {
                    paragrafo1.innerHTML = calculoFinal.toFixed(1)
                    paragrafo2.innerHTML = `O resultado desse imc foi Obesidade Extrema`
                }
                else {
                    paragrafo2.innerHTML = `Adicione os dados por favor!!`
                }


})
}

imc()
