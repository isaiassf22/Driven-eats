let prato;
function remaining(a){
    const b=document.querySelector('.prato .verde')
    if(b!==null){
    b.classList.remove('verde')}
    const seletor=document.querySelector(a)
   seletor.classList.add('verde')
     prato="ok"
     if(prato!==undefined && bebida!==undefined && sobremesa!==undefined ){
        check.innerHTML="Pronto para finalizar!!"
        habilitar.classList.add('habilit')
    }

}

let bebida;

function remaining2(a){
    const b=document.querySelector('.bebida .verde')
    if(b!==null){
    b.classList.remove('verde')}
    const seletor=document.querySelector(a)
   seletor.classList.add('verde')
    bebida="ok"
    if(prato!==undefined && bebida!==undefined && sobremesa!==undefined ){
        check.innerHTML="Pronto para finalizar!!"
        habilitar.classList.add('habilit')
}
}

let habilitar=document.querySelector('.confirmacao')
let sobremesa;

function remaining3(a){
    const b=document.querySelector('.sobremesa .verde')
    if(b!==null){
    b.classList.remove('verde')}
    const seletor=document.querySelector(a)
   seletor.classList.add('verde')
  sobremesa="ok"
  if(prato!==undefined && bebida!==undefined && sobremesa!==undefined ){
    check.innerHTML="Fechar pedido"
    habilitar.classList.add('habilit')
}
console.log(habilitar)
}

const check=document.querySelector('.finish')



/*              FOOTER
let c=document.querySelector('.finish')
    c.innerHTML="2 itens restantes para fechar o pedido"*/
