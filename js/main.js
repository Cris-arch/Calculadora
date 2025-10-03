let respuesta=document.getElementById('respuesta');
let sumar=document.getElementById('sumar');
let restar=document.getElementById('restar');
let multiplicar=document.getElementById('multiplicar');
let dividir=document.getElementById('dividir');
let limpiar=document.getElementById('limpiar');


function sumarNumero(a,b){
    let c=a+b;
    respuesta.innerHTML=c;
}

function restarNumero(a,b){
    let c=a-b;
    respuesta.innerHTML=c;
}

function multiplicarNumero(a,b){
    let c=a*b;
    respuesta.innerHTML=c;
}

function dividirNumero(a,b){
    let c=a/b;
    respuesta.innerHTML=c;
}

function limpiarNumero(){
    respuesta.innerHTML=''
}



sumar.addEventListener('click',function(){
    let num1=document.getElementById('num1');
    let num2=document.getElementById('num2');
    if(num1.value=='' || num2.value==''){
        document.getElementById('info').innerHTML='<p> Error:Debe ingresar los números correspondientes</p>';        
        document.getElementById('info').classList.add('animation_info');
    }else{
        sumarNumero(parseInt(num1.value),parseInt(num2.value));
        document.getElementById('info').innerHTML='';
        document.getElementById('info').classList.remove('animation_info');

    }
});

restar.addEventListener('click',function(){
    let num1=document.getElementById('num1');
    let num2=document.getElementById('num2');

    if(num1.value=='' || num2.value==''){
        document.getElementById('info').innerHTML='<p> Error:Debe ingresar los números correspondientes</p>';        
        document.getElementById('info').classList.add('animation_info');
    }else{
        restarNumero(parseInt(num1.value),parseInt(num2.value));
        document.getElementById('info').innerHTML='';
        document.getElementById('info').classList.remove('animation_info');
    }
});

multiplicar.addEventListener('click',function(){
    let num1=document.getElementById('num1');
    let num2=document.getElementById('num2');
    if(num1.value=='' || num2.value==''){
        document.getElementById('info').innerHTML='<p> Error:Debe ingresar los números correspondientes</p>';        
        document.getElementById('info').classList.add('animation_info');
    }else{
        multiplicarNumero(parseInt(num1.value),parseInt(num2.value));
        document.getElementById('info').innerHTML='';
        document.getElementById('info').classList.remove('animation_info');

    }
});

dividir.addEventListener('click',function(){
    let num1=document.getElementById('num1');
    let num2=document.getElementById('num2');
    if(num1.value=='' || num2.value==''){
        document.getElementById('info').innerHTML='<p> Error:Debe ingresar los números correspondientes</p>';        
        document.getElementById('info').classList.add('animation_info');
    }else{
        if(num2.value==0){
            document.getElementById('info').innerHTML='<p> Error: El segundo valor no debe ser 0</p>';        
            document.getElementById('info').classList.add('animation_info');
        }else{
            document.getElementById('info').innerHTML='';
            document.getElementById('info').classList.remove('animation_info');
            dividirNumero(parseInt(num1.value),parseInt(num2.value));

        }
       

    }
});

limpiar.addEventListener('click',function(){
    document.getElementById('num1').value='';
    document.getElementById('num2').value='';
    document.getElementById('info').innerHTML='';
    document.getElementById('info').classList.remove('animation_info');

    limpiarNumero();


});


