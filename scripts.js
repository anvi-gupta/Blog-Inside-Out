const selectElement=(element)=>document.querySelector(element);
const header=selectElement('header');
const mainContent=selectElement('main');

selectElement('.hamburger').addEventListener('click',()=>{
    header.classList.toggle('active');
    mainContent.classList.toggle('active');
});

window.onclick=(event)=>{
    if(event.target.matches('.active')){
        if(header.classList.contains('active')){
            header.classList.remove('active');
            mainContent.classList.remove('active');
        }
    }
};
var field=document.getElementById("fieldset");

field.onclick=()=>{
    field.style.display="none";
    document.getElementById("head").style.display="none";
    document.getElementById("p").style.display="none";
    document.getElementById("h11").style.display="inherit";
}
