window.onload = function(){
    

let btnSwitch = document.getElementById("btnSwitch");
let iconList = document.getElementsByTagName("a");
btnSwitch.addEventListener('click', function(){
    if(btnSwitch.innerText == "ON"){
        btnSwitch.innerText = "OFF";
        for(let i=0; i<iconList.length; i++){
            iconList[i].target = "_self";
        }
    }else{
        btnSwitch.innerText = "ON";
        for(let i=0; i<iconList.length; i++){
            iconList[i].target = "_blank";
        }
    }
});
    
    
    
    
    
};