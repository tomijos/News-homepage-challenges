// Configuracion para activar el menu hamburguesa

    // const menu = document.querySelector('.menu-bar-ham');
    const line1= document.querySelector('.line1');
    const line2= document.querySelector('.line2');
    const line3= document.querySelector('.line3');
    const menuRespon = document.querySelector('.menu-respon');

    document.querySelector('#menu').addEventListener("click", activarMenu);

    function activarMenu(){
        
        line1.classList.toggle('activaline1');
        line2.classList.toggle('activaline2');
        line3.classList.toggle('activaline3');
        menuRespon.classList.toggle('activarMenu');   
        document.body.classList.toggle('fijarbody');
    }  

    // Activar el menu responsive
    


    