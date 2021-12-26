// preloader
window.addEventListener('load', ()=>{

    document.querySelector('.pre-loader').style.display= 'none';;

})

document.querySelector('.navBtn').addEventListener('click', ()=>{
    console.log('fafa');
    document.querySelector('.nav').classList.toggle('nav-show');
    //i made a mistake of putting . in toggle class . fxd

})
const nama = () => {
    let a =5;
    let b =5;
    return a+b;
    
}
na=nama();
console.log(na);