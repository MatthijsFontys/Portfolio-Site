window.onload = function(){ 

let counter = 0;    
let foldArrow = document.getElementById("foldOut").getElementsByTagName("img")[0];
foldArrow.addEventListener("click" , function(){
foldArrow.style.transform.rotate = (counter == 0) ? ("180deg") : ("0deg");
counter = (counter == 0) ? 1 : 0;
let frame = document.getElementsByTagName("iframe")[0];
frame.classList.toggle("hidden");
});

let pdf_list =[
                "https://drive.google.com/file/d/1GMaEL_XkXxyauddfz67L6aXms6pM8vOf/preview", // Video opdracht
                "https://drive.google.com/file/d/1GDlFZYPrcAKSiobWe40i6EDNFUSk3FE8/preview", // Logo
                "datavisualisatie.html", // datavisualisatie
                "https://console.dialogflow.com/api-client/demo/embedded/79d70ccc-f3ea-4389-84ad-844c83e17b8f", // Bill gates bot
                "https://drive.google.com/file/d/16gujGoJb7p1k2jfii0nIJw931HfzLWVv/preview", // User experience
               ];
    
let frame_type_list = [
    "vid", 
    "pdf", 
    "web", 
    "web",
    "web"  
]

let articles = document.getElementsByTagName('article');
    for(let i = 0; i < articles.length ; i++){
        articles[i].addEventListener('click', function(){
        let frame = document.getElementsByTagName("iframe")[0];
        frame.className = frame_type_list[i] + "_frame";
        frame.src = pdf_list[i];
        })
    }
    
    
    
}