const form = document.querySelector('#form-atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji festejando">'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji decepcionado">'
const atividades = []
const notas = []
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const NotaMinima = parseFloat(prompt('Digite a nota mínima:'))

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    calculaMediaFinal()
    atualizaMediaFinal()
})

function adicionaLinha(){
    const NomeAtividade= document.querySelector('#nome-atividade')
    const NotaAtividade= document.querySelector('#nota-atividade')

    if(atividades.includes(NomeAtividade.value)){
        alert(`A atividade: ${NomeAtividade.value} já foi inserida!`)
    } else {
        atividades.push(NomeAtividade.value)
        notas.push(parseFloat(NotaAtividade.value))

        let linha = '<tr>'
        linha += `<td> ${NomeAtividade.value} </td>`
        linha += `<td> ${NotaAtividade.value} </td>`
        linha += `<td> ${NotaAtividade.value >= NotaMinima ? imgAprovado : imgReprovado} </td>`
        linha += '</tr>'
        
        linhas += linha
    }    

    NomeAtividade.value = ''
    NotaAtividade.value = ''
    
}

function atualizaTabela(){
    const tbody = document.querySelector("tbody")
    tbody.innerHTML = linhas
}

function calculaMediaFinal(){
    let somaNotas = 0 

    for( let i = 0; i < notas.length; i++){
        somaNotas += notas[i]
    }

    return somaNotas / notas.length

}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal()
    
    document.querySelector('#valor-media').innerHTML = mediaFinal
    document.querySelector('#resultado-media').innerHTML = mediaFinal >= NotaMinima ? spanAprovado : spanReprovado
}