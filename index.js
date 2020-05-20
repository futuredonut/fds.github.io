

//tp
function tpsp(){
    document.getElementById("startpage").style.display = "inline";
    document.getElementById("tagpage").style.display = "none";
    document.getElementById("cmdpage").style.display = "none";
    document.getElementById("videospage").style.display = "none";
    document.getElementById("communitypage").style.display = "none";
}

function tptp(){
    document.getElementById("startpage").style.display = "none";
    document.getElementById("tagpage").style.display = "inline";
    document.getElementById("cmdpage").style.display = "none";
    document.getElementById("videospage").style.display = "none";
    document.getElementById("videospage").style.display = "none";
    document.getElementById("communitypage").style.display = "none";
}

function tpssp(){
    document.getElementById("startpage").style.display = "none";
    document.getElementById("tagpage").style.display = "none";
    document.getElementById("cmdpage").style.display = "inline";
    document.getElementById("videospage").style.display = "none";
    document.getElementById("communitypage").style.display = "none";
}

function tpvp(){
    document.getElementById("startpage").style.display = "none";
    document.getElementById("tagpage").style.display = "none";
    document.getElementById("cmdpage").style.display = "none";
    document.getElementById("videospage").style.display = "inline";
    document.getElementById("communitypage").style.display = "none";
}

function tpcp(){
    document.getElementById("startpage").style.display = "none";
    document.getElementById("tagpage").style.display = "none";
    document.getElementById("cmdpage").style.display = "none";
    document.getElementById("videospage").style.display = "none";
    document.getElementById("communitypage").style.display = "inline";
}


//commands

function command(){
    var content = document.getElementById("cmdi").value;
    
    document.getElementById("cmds").value = content;

}
function test(){
    console.log(`It is working!`)
}