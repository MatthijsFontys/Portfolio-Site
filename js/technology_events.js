window.onload = function(){
    
    // Menu closes when a choice is made.
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}
    let maxLength = document.getElementsByTagName("li").length * 30;
    document.getElementsByTagName("ul")[0].style.maxHeight = maxLength;
    document.getElementsByTagName("ul")[0].style.overflow = "hidden";
    
    function openMenu(){
        menuBox.classList.toggle("show");
}

// List of pdf's hosten on google drive, to display in the iframe
let pdf_list = ["https://drive.google.com/file/d/1xQCrUkqlFZmkGToJm-YYo_A8q6FzQVvh/preview", // Alles
                "", //week 1
                "", // Week 2
                ""];// Week 3


    
let download_list = [
    "", // Alles
    "", // week 1
    "", // week 2
    "" // week3   
];
    
let select_list = document.getElementsByTagName("li");
for(let i=0; i<select_list.length; i++){
    // Add event listeners to the week list
    select_list[i].addEventListener('click', function(){
        // if the file exists
        if(pdf_list[i] != ""){
        frame.src=pdf_list[i];
        document.getElementById("menu_status_text").innerText = this.innerText;
        }
        else{
        alert("Het bestand "+ this.innerText + " bestaat nog niet.");
        }
        // Changing the pdf download
        document.getElementsByTagName("nav")[0].getElementsByTagName("a")[1].href = "/downloads/"+download_list[i];
    });
}
    // Adding the menu event listener
let menuBox = document.getElementsByTagName("ul")[0];
let boxLen = document.getElementsByTagName("li").length;
    // Setting the max height of the dropdown menu
    menuBox.style.maxHeight = 30*boxLen+"px";
let menuIcon = document.getElementsByTagName("img")[1];
menuIcon.addEventListener('click', function(){
        openMenu();
    });
}