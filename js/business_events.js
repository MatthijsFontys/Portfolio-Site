window.onload = function(){
    
    // Menu closes when a choice is made.
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}

    function openMenu(){
        menuBox.classList.toggle("show");
}

// List of pdf's hosten on google drive, to display in the iframe
let pdf_list = ["https://drive.google.com/file/d/1O29Q7bBiufbWy_WdqXZg66kI8j6JqQdE/preview", // Alles
                "https://drive.google.com/file/d/1H4J86d8vDA7emQdKjSwThN-7lYN2-e0a/preview", //Ist situaties
                "https://drive.google.com/file/d/1Xi-BpMjxOFZblp_TxrVzHcHcPxlNM59_/preview", //week 1
                "https://drive.google.com/file/d/1U4yMpOc0L2kUYsQ5lTiH7RlrxeY4gr7t/preview", // Week 2
                "https://drive.google.com/file/d/1HOytL0SjDVaBJTxNHgyJKU94MkhChIkD/preview", // Week 3
                "https://drive.google.com/file/d/1Q3Zz9z-iwBc3lIRjKOOrpiiNnAZdvIlG/preview", // Week 4
                "https://drive.google.com/file/d/1fDBUFedw-ao1PL4fujt3zF3ulSuvMRau/preview" // Week 5
               ];


    
let download_list = [
    "Business_portfolio.pdf", // Alles
    "Ist_situaties.pdf", //Ist situaties
    "business_week1.pdf", // week 1
    "business_week2.pdf", // week 2
    "business_week3.pdf", // week3 
    "business_week4.pdf" // week4
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
        document.getElementsByTagName("nav")[0].getElementsByTagName("a")[1].href = "/Portfolio-Site/downloads/"+download_list[i];
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
