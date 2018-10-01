window.onload = function(){
    
    // Menu closes when a choice is made.
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}

    function openMenu(){
        menuBox.classList.toggle("show");
}

// List of pdf's hosten on google drive, to display in the iframe
let pdf_list = ["https://drive.google.com/file/d/1GuSnm4JwJy49y9wpv3mRmwLYjTBrsVq0/preview", // Alles
                "", // Watervalmethode
                "", // Ontwerpfase
                "https://drive.google.com/file/d/15lf988Zb1ckQ5-zwyskVOjz-YIUjeh3x/preview", // Boter kaas en eieren
                "" // Memory
               ];

let software_downloads = [
    "",
    "",
    "",
    "BoterKaasEierenPackage.zip", // Boter kaas en eieren
    "MemoryPackage.zip" // Memory
]
    
let download_list = [
    "software_portfolio.pdf", // Alles
    "", // Watervalmethode
    "", // Ontwerpfase 
    "", // Boter kaas en eieren
    "" // Memory
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
        // Als er een software download is
        if(software_downloads[i] != ""){
            // Getting the 'download programma' button
        let downloadLink = document.getElementsByTagName("nav")[0].getElementsByTagName("a")[0];
            downloadLink.href = "/Portfolio-Site/downloads/"+software_downloads[i];
        }
    });
}
    // Adding the menu event listener
let menuBox = document.getElementsByTagName("ul")[0];
let boxLen = document.getElementsByTagName("li").length;
    // Setting the max height of the dropdown menu
    menuBox.style.maxHeight = 30*boxLen+"px";
let menuIcon = document.getElementsByTagName("img")[3];
menuIcon.addEventListener('click', function(){
        openMenu();
    });
}
