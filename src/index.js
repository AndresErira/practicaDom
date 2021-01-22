import {registerImage, cargadas} from './lazy'

const btnAdd=document.querySelector('.btn-add');
const btnClean=document.querySelector('.btn-clean');
export let agregadas=0;

function agregar(){
    const imagenes=document.querySelector('#images');

    const randomImg=Math.floor((Math.random()*121)+1);
    const divImg=document.createElement('div');
    divImg.className='p-4 container';
        
    const imagen=document.createElement('img');
        imagen.dataset.src=`https://randomfox.ca/images/${randomImg}.jpg`;
        imagen.width='320';
        imagen.style.backgroundColor="gray";
        imagen.className='mx-auto';
    
        divImg.append(imagen);
        imagenes.append(divImg);
        registerImage(imagen);
        agregadas++;
        console.log("🔵Total Imagenes "+agregadas);
        console.log("🔴Imagenes cargadas "+cargadas);
        console.log("-----------------------------------");
        

}
btnAdd.addEventListener('click',agregar);

const borrar = ()=>{
    const parentContainer=document.querySelector('.text-center');
    const oldContainer=document.querySelector('#images');
    const newContainer=document.createElement('div');
    
    parentContainer.replaceChild(newContainer, oldContainer);
    newContainer.id="images";
    agregadas=0;
    cargadas=0;
}
btnClean.addEventListener('click',borrar);







