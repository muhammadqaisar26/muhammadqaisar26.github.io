// Function to handle form submission
function myfunc(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const bigmsg = document.getElementById("bigmsg").value;

    // Checkbox values
    const checkboxes = document.querySelectorAll('.check_box input[type="checkbox"]');
    const checkedValues = Array.from(checkboxes)
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    const checkboxValues = checkedValues.join(', '); // Concatenate checked values

    // Radio button value
    const radio = document.querySelector('input[name="choice"]:checked');
    const radioValue = radio ? radio.value : "";

    // Save data to localStorage
    localStorage.setItem('ls_name', name);
    localStorage.setItem('ls_email', email);
    localStorage.setItem('ls_phone', phone);
    localStorage.setItem('ls_checkbox', checkboxValues);
    localStorage.setItem('ls_bigmsg', bigmsg);
    localStorage.setItem('ls_radio', radioValue);

    alert("Form data has been saved to localStorage!");
}

// Function to clear form
function clearForm() {
    document.getElementById('myform').reset(); // Reset form fields
    localStorage.clear();  // Optionally clear stored data
    alert("Form has been cleared!");
}