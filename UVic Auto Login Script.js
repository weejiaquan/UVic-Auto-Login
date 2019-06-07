// ==UserScript==
// @name         UVic Auto Login
// @namespace    http://eri.li
// @version      1
// @description  Auto Login UVic login
// @author       Lychwee
// @match        https://www.uvic.ca/cas/login*
// @grant        none
// ==/UserScript==

window.onload = function(){
    check();
}
function check() {
    document.getElementById("rememberMe").checked = true;
    document.getElementById("username").value = "USERNAME_HERE"; //replace USERNAME_HERE with your uvic login
    document.getElementById("password").value = "PASSWORD_HERE"; //replace PASSWORD_HERE with your uvic password
    document.getElementById("form-submit").click();
}