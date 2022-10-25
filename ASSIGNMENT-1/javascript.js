function linkClick(){

    alert("Error this button is not operational yet!");

    if(document.getElementById("div").style.display == "none")
        document.getElementById("div").style.display = "block";
    else
        document.getElementById("div").style.display = "none";

}

function addItemsClick(){
    var options = document.querySelectorAll("#menu-items option:checked");
    for (let i = 0; i < options.length; i++) {
        document.getElementById("order-items").add(options[i]);
    }
}

function removeItemsClick(){
    var options = document.querySelectorAll("#order-items option:checked");
    for (let i = 0; i < options.length; i++) {
        document.getElementById("menu-items").add(options[i]);
    }
}

function validateClick() {
    regexp = /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;
    if (regexp.test(document.getElementById("zip-text").value)) {
        alert("ZIP Code Valid");
    }
    else {
        alert("ZIP Code does not follow correct format");
    }
}