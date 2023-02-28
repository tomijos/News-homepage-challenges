// Configuracion para activar el menu hamburguesa

    // const menu = document.querySelector('.menu-bar-ham');
    const line1= document.querySelector('.line1');
    const line2= document.querySelector('.line2');
    const line3= document.querySelector('.line3');
    const menuRespon = document.querySelector('.menu-respon');

    document.querySelector('#menu').addEventListener("click", activarMenu);

    function activarMenu(e){
        
        line1.classList.toggle('activaline1');
        line2.classList.toggle('activaline2');
        line3.classList.toggle('activaline3');
        menuRespon.classList.toggle('activarMenu');   
        document.body.classList.toggle('fijarbody');
    }  

    // Close main when click outside
    
    document.addEventListener('click', (e)=>{
        
       if (e.target.classList.contains('activa') || e.target.classList.contains('menu-respon') || e.target.classList.contains('menu-bar-hamb') || e.target.tagName ==='UL'){
        
       }else{
        
        menuRespon.classList.remove('activarMenu'); 
        line1.classList.remove('activaline1');
        line2.classList.remove('activaline2');
        line3.classList.remove('activaline3');
        document.body.classList.remove('fijarbody');
       }
       
    });

    //Close menu respons when screen is > to 768px

    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 768){
        menuRespon.classList.remove('activarMenu'); 
        line1.classList.remove('activaline1');
        line2.classList.remove('activaline2');
        line3.classList.remove('activaline3');
        document.body.classList.remove('fijarbody');
        }
    });

    