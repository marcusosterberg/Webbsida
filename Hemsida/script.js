const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover',() => {
        portfolioItem.childNodes[1].classList.add('img-darken')
    })

    portfolioItem.addEventListener('mouseout',() => {
        portfolioItem.childNodes[1].classList.remove('img-darken')
    })
})

var loginbutton = document.getElementById("loginbutton");
var registerbutton = document.getElementById("registerbutton");
var loginform = document.getElementById("loginform");
var registerform = document.getElementById("registerform");
var forgotpw = document.getElementById("forgotpw");

registerbutton.onclick= function() {
    registerform.style.left='0px';
    registerform.style.opacity='1';
    loginform.style.left='-500px';
    loginform.style.opacity='0';
    forgotpw.style.left='-500px';
    forgotpw.style.opacity='0';
    registerbutton.classList.add('active');
    loginbutton.classList.remove('active');

}

loginbutton.onclick= function() {
    loginform.style.left='0px';
    loginform.style.opacity='1';
    forgotpw.style.left='0px';
    forgotpw.style.opacity='1';
    registerform.style='500px';
    loginbutton.classList.add('active');
    registerbutton.classList.remove('active');
    registerform.style.opacity='0';
}