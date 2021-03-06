window.onload = function(){
    
    // Menu closes when a choice is made.
let frame = document.getElementsByTagName("iframe")[0];
    frame.onload = function(){menuBox.classList.remove("show");}

    function openMenu(){
        menuBox.classList.toggle("show");
}

// List of pdf's hosten on google drive, to display in the iframe
let pdf_list = [
                "https://drive.google.com/file/d/1M5AqfLXZjAFFn2416i8v2_t0hG9B8_Oa/preview", // Alles
                "https://drive.google.com/file/d/1GMaEL_XkXxyauddfz67L6aXms6pM8vOf/preview", // Video opdracht
                "", // Week 1
                "datavisualisatie.html", // datavisualisatie
                "https://console.dialogflow.com/api-client/demo/embedded/79d70ccc-f3ea-4389-84ad-844c83e17b8f" // We are the robots
               ];

let frame_type_list = [
    "pdf", // Alles ~ pdf frame
    "vid", // Video opdracht ~ video frame
    "pdf", // No logo ~pdf frame
    "web", // Data visualisatie ~ web ??
    "web"  // We are the robots ~ ??
]
    
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
        // change the pdf frame type
        frame.className =  frame_type_list[i] + "_frame";
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
