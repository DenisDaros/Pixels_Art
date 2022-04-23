
const preto = document.getElementsByClassName("color")[0].style.backgroundColor = "black";
const blue = document.getElementsByClassName("color")[1].style.backgroundColor = "blue";
const amarelo = document.getElementsByClassName("color")[2].style.backgroundColor = "yellow";
const vermelho = document.getElementsByClassName("color")[3].style.backgroundColor = "red";



window.onload = function () {
    let color = document.querySelectorAll(".color");
   
    for(index = 0; index < color.length;index += 1) {
        color[index].addEventListener('click',function(e){
            let seletor = document.querySelector(".selected")
            seletor.classList.remove("selected")
            e.target.classList.add("selected")
        });
    }
    
}
