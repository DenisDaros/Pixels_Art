window.onload = function () {
    let color = document.querySelectorAll(".color");
   
    for(index = 0; index < color.length;index += 1) {
        color[index].addEventListener('click',function(e){
            let seletor = document.querySelector(".selected")
            seletor.classList.remove("selected")
            e.target.classList.add("selected")
        });
    }
    // https://stackoverflow.com/questions/9012537/how-to-get-the-element-clicked-for-the-whole-document


let pixel = document.querySelectorAll(".pixel");
    for(i = 0;i < pixel.length;i += 1){
        pixel[i].addEventListener("click",function(e){
            let seletor = document.querySelector(".selected")
            if(e.target.classList.length > 1){
                e.target.classList.remove(e.target.classList[1])
            }
            e.target.classList.add(seletor.classList[1]);
        })
    }
}