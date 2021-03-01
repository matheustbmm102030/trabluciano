const trs = document.querySelectorAll('tr')
const tabelaD = document.querySelector('table')
const buttonS = document.querySelector('button')

tabelaD.addEventListener('mouseup', function(e){
    e.target.parentNode.remove()
    
})

buttonS.addEventListener('click', function(event){
    event.preventDefault();


    let inputNome = document.querySelector('input[name=nome]')
    let inputFuncao = document.querySelector('input[name=funcao]')
    var nome = inputNome.value
    var funcao = inputFuncao.value
    
    let tr = document.createElement('tr')
    let tdN = document.createElement('td')
    let tdF = document.createElement('td')

    tdN.innerText = nome
    tdF.innerText = funcao

    tr.appendChild(tdN)
    tr.appendChild(tdF)
    tabelaD.appendChild(tr)

    inputNome.value = ''
    inputFuncao.value = ''

})
