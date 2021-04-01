let img1 = document.querySelector('.img-slide1');
let img2 = document.querySelector('.img-slide2');
let img3 = document.querySelector('.img-slide3');
let img4 = document.querySelector('.img-slide4');
let classe = "aparecer";
let contador = 0;
setInterval(function(){
   contador += 100;
   if(contador == 500){
       if(img1.classList.contains(classe)){
            img1.classList.remove(classe);
           img2.classList.add(classe)
       }
   }
   if(contador == 1000){
    if(img2.classList.contains(classe)){
        img2.classList.remove(classe);
        img3.classList.add(classe)
    }
}
   if(contador == 1500){
    if(img3.classList.contains(classe)){
        img3.classList.remove(classe);
        img4.classList.add(classe)
    }
}
   if(contador == 2000){
    if(img4.classList.contains(classe)){
        img4.classList.remove(classe);
        img1.classList.add(classe)
    }
}
   if(contador >= 2100)contador = 0;
},1000)