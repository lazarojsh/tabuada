function calcular() {
    let num= document.getElementById('tabtxtn') //input
    let sel= document.getElementById('tab') //select

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
        //se não adicionar nenhum número
    } else {
        let n= Number(num.value)
        let c= 1
        sel.innerHTML = '' //limpar para a proxima multiplicação
        while (c <= 10) {
            let item= document.createElement('option')
            item.text= `${n} x ${c} = ${n*c}`
            item.value= `sel${c}` //option => value
            sel.appendChild(item)
            c++

        }



    }
}