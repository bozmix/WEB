//var images = document.querySelectorAll('img');
var image1 = document.querySelector('img');
var image2 = document.getElementById('img1');
var image3 = document.getElementById('img2');
var image4 = document.getElementById('img3');
var image5 = document.getElementById('img4');
var image6 = document.getElementById('img5');
image1.addEventListener('click', borderize);
image2.addEventListener('click', borderize);
image3.addEventListener('click', borderize);
image4.addEventListener('click', borderize);
image5.addEventListener('click', borderize);
image6.addEventListener('click', borderize);
function borderize(el){
    el.currentTarget.style.border = 'solid 1px red';
    if (el.currentTarget.style.width !== '300px'){
        el.stopPropagation();
    }  
}

//images.forEach(function(el){
  //  el.addEventListener('click', borderize);
//});


function print(){
    console.log('click at '+ Event.currentTarget)
}
document.addEventListener('click', print);