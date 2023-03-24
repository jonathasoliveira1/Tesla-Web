var header = document.getElementById("header");

var ms=
document.getElementById("models");
var ms3=
document.getElementById("models3");
var msx=
document.getElementById("modelsx");
var msy=
document.getElementById("modelsy");
var model=
document.getElementById("model");

ms.onclick = function() {
    header.style.backgroundImage = "url(https://i.postimg.cc/mg7L1t7Z/image-1.png)";
    model.innerHTML="Model S";
}
ms3.onclick = function(){
    header.style.backgroundImage="url(https://i.postimg.cc/FRCNXcXp/image-2.png)";
    model.innerHTML="Model 3";
}
mx.onclick = function() {
    header.style.backgroundImage="url(https://i.postimg.cc/FRCNXcXp/image-3.png)";
                model.innerHTML="Model X";
}
my.onclick = function() {
    header.style.backgroundImage="url(https://i.postimg.cc/FRCNXcXp/image-4.png)";
                model.innerHTML="Model Y";
}