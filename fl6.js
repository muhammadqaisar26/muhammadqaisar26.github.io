window.onload=function(){
    var user = document.getElementById("name");
    console.log(user.value);
    console.log(user.type);
}

function inputHandler()
    {
        var myvalue = document.getElementById("myinput").value;
        document.getElementById("emptyParagraph").innerHTML = "Your Input: " + myvalue;

    }







function myfunc(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var check_box = document.querySelector('input[type="checkbox"]:checked').value;
    var radio_box = document.querySelector('input[type="radio"]:checked').value;
    var bigmsg = document.getElementById("bigmsg").value;

    

    localStorage.setItem('ls_name', name);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_phone', phone);
    localStorage.setItem('ls_check_box', check_box);
    localStorage.setItem('ls_bigmsg', bigmsg);
    localStorage.setItem('ls_radio_box', radio_box)

}


function clearForm() {
    document.getElementById('myform').reset();
}