function bigImg(x) {
  x.style.height = "280px";
  x.style.width = "190px";

}

function normalImg(x) {
  x.style.height = "280px";
  x.style.width = "170px";
}


function myFunction() {

  alert("Fri fragt ved køb over 500 kr & 1-2 dags levering!");
}





//kontaktform der forbygger spammails

var contactform =  document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'idse1997' + '@' + 'hotmail' + '.' + 'com');

