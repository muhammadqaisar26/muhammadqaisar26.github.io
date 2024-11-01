
function myName(){
    var name = prompt("Enter user name.")
}

function myImg(){
document.getElementById("Image").onclick = function() {
};
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i<dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


function mOver(some_tag) {
    some_tag.innerHTML = "Thank You";
    some_tag.style.color = "blue";
}
function mOut(element) {
    some_tag.innerHTML = "Mouse Over Me";
    some_tag.style.color = "orange";
}


