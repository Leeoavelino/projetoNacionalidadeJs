function verificar(){
    var naci = document.querySelector('#nac')
    var res = document.querySelector('#res')

    var pais = String(naci.value)

    if(pais == 'Brasil' || pais == 'brasil'){

        res.innerHTML = 'Você é brasileiro';

    }

    else{
        res.innerHTML = 'Você é estrangeiro';
    }


}