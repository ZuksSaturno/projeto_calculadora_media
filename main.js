const form = document.getElementById('formatividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji feliz">';
const imgReprovado ='<img src="./images/reprovado.png" alt="emoji triste">';
const atividades=[];
const notas=[];
const spanaprovado='<span class="resultado aprovado">Aprovado</span>'
const spanreprovado='<span class="resultado reprovado">Reprovado</span>'
const notaminima= parseFloat(prompt('Digite a nota mínima'));
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    atualizamediafinal()
    calculaMediFinal()
})

function adicionaLinha(){
    const inputNome = document.getElementById('nome-atividade');
    const inputNota = document.getElementById('nota-atividade');

    if(atividades.includes(inputNome.value)){
        alert('Essa atividade já existe')
    }
    else{
    atividades.push(inputNome.value)
    notas.push(parseFloat(inputNota.value))

    let linha = `<tr>`
    linha += `<td>${inputNome.value}</td>`
    linha += `<td>${inputNota.value}</td>`
    linha += `<td>${inputNota.value >= notaminima ? imgAprovado : imgReprovado}</td>`
    linha += `</tr>` ;
    linhas += linha; 
    }
    inputNome.value=''
    inputNota.value=''
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML= linhas;
}
function calculaMediFinal(){
    let somaDasNotas=0;
    for (let i= 0; i <notas.length; i++){
        somaDasNotas += notas[i]
    }
    return somaDasNotas / notas.length;  
}
function atualizamediafinal(){
    const mediafinal=calculaMediFinal()
    document.getElementById('media-final-resultado').innerHTML= mediafinal.toFixed(2)
    document.getElementById('media-final-valor').innerHTML= mediafinal >= notaminima ? spanaprovado : spanreprovado; 
}
