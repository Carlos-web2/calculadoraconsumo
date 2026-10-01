function calcularConsumo(){
    let km = parseFloat(document.getElementById('inputKM').value) 
    let litros = parseFloat(document.getElementById('inputLT').value)
    let consumo = km / litros
    if (opcao1.isChecked == true){
        alert("O seu consumo foi de " + consumo + "KM/L com gasolina")
    }
    else if (opcao2.isChecked == true){
        alert("O seu consumo foi de " + consumo + "KM/L com diesel")
    }
    else if (opcao3.isChecked == true){
        alert("O seu consumo foi de " + consumo + "KM/L com álcool")
    }
    
}