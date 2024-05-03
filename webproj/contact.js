function regbut(){
    alert("SUCESSFULLY REGISTERED.....")
}
var div1 = document.getElementById('ruby');
var div2=document.getElementById('pops');
var display=0;
function hideshow(){
    if(display==1)
    {
        div1.style.display = 'none';
        div2.style.display='block';
        display=0;
    }
    else{
        div1.style.display = 'block';
        div2.style.display='none';
        display=1;
    }

}
