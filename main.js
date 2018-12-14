

    
let varVide="";
         
function montrerLaValeur(boutons){
    varVide = varVide + boutons.value;
    document.getElementById("output").innerHTML = varVide;
    
};

function quickMath(){        
    document.getElementById("output").innerHTML = eval(varVide);
};

function reset(boutons){
    document.getElementById("output").innerHTML = "0"
    varVide = "";
    
};

function rem1(boutons){
    varVide = varVide.replace(varVide.slice(-1), "");
    document.getElementById("output").innerHTML = varVide;
};                           

