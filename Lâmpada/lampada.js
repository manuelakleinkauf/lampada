let body=document.querySelector("body")
let divLamp= document.createElement("div")
divLamp.setAttribute("id","lamp")
let lamp=document.createElement("img")
lamp.setAttribute("src","./imagens/ligada.png")
let divBtn= document.createElement("div")
divBtn.setAttribute("id","btn")
let interruptor=document.createElement("img")
interruptor.setAttribute("src","./imagens/on.png")

divLamp.append(lamp)
divBtn.append(interruptor)
body.append(divLamp)
body.append(divBtn)

divBtn.onclick=function(){

    if(lamp.getAttribute("src")=="./imagens/desligada.png"){
        lamp.setAttribute("src","./imagens/ligada.png")
        interruptor.setAttribute("src","./imagens/on.png")
        body.style.background="#FFF"
    }
    else{
        lamp.setAttribute("src","./imagens/desligada.png")
        body.style.background="#000"
        interruptor.setAttribute("src","./imagens/off.png")
    }
    
    
}