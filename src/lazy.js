import {agregadas} from './index';
export let cargadas=0;
const isIntersecting=(entry)=>{
    return entry.isIntersecting;
}
const loadImage=(entry)=>{
    const imagen=entry.target;
    const url = imagen.dataset.src;
    //imagen.src=url;
    imagen.src=url;
    cargadas++;
    console.log("🔵Total Imagenes "+agregadas);
    console.log("🔴Imagenes cargadas "+cargadas);
    console.log("-----------------------------------");
    observer.unobserve(imagen);
}
const observer=new IntersectionObserver((entries)=>{
    entries.filter(isIntersecting).forEach(loadImage);
    
})
export const registerImage=(imagen)=>{
    //IntersectionObserver-->observerImagen
    observer.observe(imagen);
}