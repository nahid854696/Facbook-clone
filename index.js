
const email=document.getElementsByClassName("email")[0];
const pass=document.getElementsByClassName("pass")[0];
const show_details=document.getElementsByClassName("show_details")[0];
const login_btn =document.getElementsByClassName("login_btn")[0];




// Data base

const dbemail="Nahid@gmail.com";
const dbpass ="123456";
const dbemail2="Afnan@gmail.com";
const dbpass2 ="123456";
const dbemail3="istiyak@gmail.com";
const dbpass3 ="123456";




login_btn.addEventListener("click", function(e) {
    e.preventDefault();

    const useremail = email.value;
    const userpassword = pass.value;

    if ((dbemail === useremail && dbpass === userpassword) ||
        (dbemail2 === useremail && dbpass2 === userpassword) ||
        (dbemail3 === useremail && dbpass3 === userpassword)) {
        show_details.innerHTML = "Log in Success .";
    } else {
        show_details.innerHTML = "Your email and password are wrong !";
    }
});



