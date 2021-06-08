function addItem(){
    var a = document.getElementById('ul_list');
    var b = document.getElementById('enter_input');
    var c = document.createElement('li');
    c.setAttribute('id',b.value);
    c.appendChild(document.createTextNode(b.value));
    a.appendChild(c);
}
function removeItem(){
    var a = document.getElementById("enter_input");
    var b = document.getElementById("ul_list");
    var c = document.getElementById(a.value);
    b.removeChild(c);
}