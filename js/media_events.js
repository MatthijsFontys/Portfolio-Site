window.onload = function(){
    
    // Menu closes when a choice is made.
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}

    function openMenu(){
        menuBox.classList.toggle("show");
}

// List of pdf's hosten on google drive, to display in the iframe
let pdf_list = ["", // Alles
                "", // Video opdrachten
                "", // Week 1
                "", // Week 2
                ""];// Week 3


    
let download_list = [
    "", // Alles
    "", // Video opdracht (Niet downloadbaar)
    "", // week 1
    "", // week 2
    ""  // week 3   
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
let menuIcon = document.getElementsByTagName("img")[1];
menuIcon.addEventListener('click', function(){
        openMenu();
    });
}