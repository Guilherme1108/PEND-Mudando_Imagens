"use strict"


const botaoTrocarImg = document.getElementById('trocar-img');

function trocarImg() {
    //constante do nome dda imagem, o .value pega o valor e o .trim tira os espaços
    const nomeImg = document.getElementById('img').value.trim();

    if (nomeImg == 'doflamingo'|| nomeImg == 'kid' || nomeImg == 'law' || nomeImg == 'luffy' || nomeImg == 'lucci'){

        //monta oque foi digitado com o caminho certo da imagem 
        let caminho = `./img/${nomeImg}${'.webp'}`;

        //setando o caminho da imagem no root
        document.documentElement.style.setProperty('--img-background', `url(${caminho})`);
    } else {
        let caminho = `./img/notFound.webp`;
        document.documentElement.style.setProperty('--img-background', `url(${caminho})`);   
    }

}
botaoTrocarImg.addEventListener('click', trocarImg);


//  ESTÁ TROCANDO PORÉM ELE ATIVA DIRETO, O BOTÃO NÃO ESTÁ FUNCIONANDO
const botaoAuto = document.getElementById('trocar-auto')
const imgs = [
    ['img/doflamingo.webp'],
    ['img/kid.webp'],
    ['img/law.webp'],
    ['img/lucci.jpeg'],
    ['img/luffy.webp']
]

let imgAtual = 0 /* váriavel da imagem atual */
const fundo = document.getElementById('carrossel') /* constante que guarda as imagens */

function atualizarImagem(){
    carrossel.style.backgroundImage = `url(${imgs[imgAtual][0]})` /* pega uma imagem da constante imgs */
    imgAtual = (imgAtual + 1) % imgs.length /* adiciona mais 1 ao imgAtual, fazendo mudar para a proxima imagem */
}                                           /* o operador % faz voltar para o inicio toda vez que acaba */


botaoAuto.addEventListener('click', setInterval(atualizarImagem, 3000))