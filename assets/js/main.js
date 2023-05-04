
function eyeIcon(e) {
    e.classList.toggle("fa-eye")
    x = e.classList.toggle("fa-eye-slash");
    let a = e.previousElementSibling;
    if (x == true) {
        a.setAttribute("type","text");
    } 
    else {
        a.setAttribute("type","password");
    } 
}