
let headerTemplate = `<nav>
<div class="img">
    <a href="index.html"><img width="200px" src="./assests/images/logo.png" alt="logo"></a>
</div>
<div class="anchor">
    <button type="button" id="loginButton" class="btn btn-light btn-sm" data-bs-toggle="modal" data-bs-target="#loginModal">
       LOGIN
    </button>
</div>

</nav>`;

let footerTemplate = `<a class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Contact Us</a>
<p>&copy 2022 ROOM SEARCH PVT LTD</p>
<div class="logo">
    <a href="https://www.facebook.com" target="_blank">
        <img src="./assests/images/facebook.png" alt="">
    </a>
    <a href="https://www.instagram.com" target="_blank">
        <img src="./assests/images/instagram.png" alt="">
    </a>
    <a href="https://twitter.com" target="_blank">
        <img src="./assests/images/twitter.png" alt="">
    </a>
</div>`;
document.getElementsByTagName("header")[0].innerHTML= headerTemplate;
document.getElementsByTagName("footer")[0].innerHTML= footerTemplate;



     