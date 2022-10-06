const observer = new IntersectionObserver((entries)=>{

    entries.forEach((entry)=>
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
            
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements=document.querySelectorAll('.hidden');
const hiddenElement=document.querySelectorAll('.hidden1');

hiddenElements.forEach((el)=>observer.observe(el));
hiddenElement.forEach((el)=>observer.observe(el));

/* dark them */

var icon = document.getElementById("icon");
icon.onclick=function()
{
    document.body.classList.toggle("dark-theme"); 
    if(document.body.classList.contains("dark-theme"))
    {
        icon.src="images/sun.png";
    }
    else{
        icon.src="images/moon.png";
    }
};


