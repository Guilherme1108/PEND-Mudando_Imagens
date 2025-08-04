"use strict"

const botaoTrocarImg = document.getElementById('trocar-img')

function trocarImg(){
    const img = document.getElementById('backgroud-img', img).value
    document.documentElement.style.setProperty('--img-background', fundo)
}

botaoTrocarImg.addEventListener('click', trocarImg)