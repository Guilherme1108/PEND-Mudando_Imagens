"use strict"


const botaoTrocarImg = document.getElementById('trocar-img');

function trocarImg() {
    //constante do nome dda imagem, o .value pega o valor e o .trim tira os espaços
    const nomeImg = document.getElementById('img').value;

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




const botaoAuto = document.getElementById('botaoAuto');

//array de imagens
const imgs = [
    ['img/doflamingo.webp'],
    ['img/kid.webp'],
    ['img/law.webp'],
    ['img/lucci.webp'],
    ['img/luffy.webp']
];

let imgAtual = 0; // variável da imagem atual


function atualizarImagem() { //função que faz mudar a imagem
    let caminho = imgs[imgAtual][0];/* pega uma imagem da constante img */
    document.documentElement.style.setProperty('--img-background', `url(${caminho})`); //coloca o caminho da imagem no root
    imgAtual = (imgAtual + 1) % imgs.length; /* adiciona mais 1 ao imgAtual, fazendo mudar para a proxima imagem */
}                                            /* o operador % faz voltar para o inicio toda vez que acaba */

let intervalo = null; // para controlar o setInterval

// inicia a troca quando clicar no botão
botaoAuto.addEventListener('click', function () {
    if (intervalo) { //verifica se existe algum intervalo
        clearInterval(intervalo); //se existir ele vai limparo intervalo
        intervalo = null; //e definir que não existe mais
    } else { //se não existir intervalo ele recebe false e entra no else
        intervalo = setInterval(atualizarImagem, 2000); // e da um intervalo de 
    }
});

