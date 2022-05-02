var i = 0;
function buttonClick() {
  i++;
  document.getElementById("inc").value = i;
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showCookie() {
  document.write(document.cookie);
}

let mociute = 1;

function buyMociute() {
  if (i > 49) {
    alert("Mociute nupirkta");
    document.querySelector(".grandma").style.display = "block";
    i = i - 50;
    document.getElementById("inc").value = i;
  } else {
  }
}
