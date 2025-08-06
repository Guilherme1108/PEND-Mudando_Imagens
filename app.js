"use strict"

const botaoTrocarImg = document.getElementById('trocar-img')

function trocarImg(){
    const img = document.getElementById('fundo').value
    document.documentElement.style.setProperty('--img-background', fundo)
}

botaoTrocarImg.addEventListener('click', trocarImg)





//  ESTÁ TROCANDO PORÉM ELE ATIVA DIRETO, O BOTÃO NÃO ESTÁ FUNCIONANDO
// const botaoAuto = document.getElementById('trocar-auto')
// const imgs = [
//     ['img/doflamingo.webp'],
//     ['img/kid.webp'],
//     ['img/law.webp'],
//     ['img/lucci.jpeg'],
//     ['img/luffy.webp']
// ]

// let imgAtual = 0 /* váriavel da imagem atual */
// const fundo = document.getElementById('carrossel') /* constante que guarda as imagens */

// function trocarAuto(){
//     const imgs = document.getElementById('fundo').value
//     document.documentElement.style.setProperty('--img-background', fundo)
// }

// function atualizarImagem(){
//     carrossel.style.backgroundImage = `url(${imgs[imgAtual][0]})` /* pega uma imagem da constante imgs */
//     imgAtual = (imgAtual + 1) % imgs.length /* adiciona mais 1 ao imgAtual, fazendo mudar para a proxima imagem */
// }                                           /* o operador % faz voltar para o inicio toda vez que acaba */

// setInterval(atualizarImagem, 3000)
// botaoAuto.addEventListener('click', trocarAuto)