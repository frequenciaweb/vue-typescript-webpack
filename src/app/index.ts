
import Vue from 'vue'

const componenteH1 = (texto: string) => {

    let elemento = document.createElement("h1") as HTMLHeadingElement;
    elemento.innerHTML = texto;

    return elemento;
}

var app = new Vue({
    el: '#appTeste',
    data: {
      message: 'Hello Vue!'
    }
  })


document.body.appendChild(componenteH1("Olá Mundo!"));
