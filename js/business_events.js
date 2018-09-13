window.onload = function(){
    
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}

    function openMenu(){
        menuBox.classList.toggle("show");
}

let pdf_list = ["https://drive.google.com/file/d/1O29Q7bBiufbWy_WdqXZg66kI8j6JqQdE/preview", "http://www.wikipedia.nl", "http://www.runescape.com"]; 
let select_list = document.getElementsByTagName("li");
for(let i=0; i<3; i++){
    select_list[i].addEventListener('click', function(){
        frame.src=pdf_list[i];
        document.getElementById("menu_status_text").innerText = this.innerText;
    });
}
let menuBox = document.getElementsByTagName("ul")[0];
let menuIcon = document.getElementsByTagName("img")[0];
menuIcon.addEventListener('click', function(){openMenu();
                                             });
}
