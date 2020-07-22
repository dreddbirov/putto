function euroJackpot () {
  var n1 = Math.floor(Math.random() * 50)+1;
  var n2 = Math.floor(Math.random() * 50)+1;
  var n3 = Math.floor(Math.random() * 50)+1;
  var n4 = Math.floor(Math.random() * 50)+1;
  var n5 = Math.floor(Math.random() * 50)+1;
  var n10 = Math.floor(Math.random() * 10)+1;
  var n11 = Math.floor(Math.random() * 10)+1;
return alert(n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5 + "   " + n10 + " " + n11);
}
//euroJackpot();

document.getElementById("ol").addEventListener("click", function(){

//otosLotto();
document.getElementById("otosL").innerHTML = document.getElementById("otosL").style.textIndent = "50px";
var otosL = document.getElementById("otosL");//.style.textIndent = "50px";
//var otosL.innerHTML = otosL.style.textIndent("50px");
otosL.innerHTML = otosL.innerHTML.replace(otosL.innerHTML, otosLotto());
document.getElementById("otosL").style.textIndent = "50px";

//var text = document.createTextNode(otosLotto());
//otosL.appendChild(text);
//document.getElementById("ol").disabled = true;

});

function otosLotto() {

  oLotto = [];
  var a = 5;

  for (i = 0; i < a; i++) {
    var n = Math.floor(Math.random() * 90) + 1;
    if (oLotto.includes(n)) {
      a++;
    } else {
      oLotto.push(n);
    }
  }
  console.log(oLotto);
  return oLotto[0] + "&nbsp;" + oLotto[1] + "   " + oLotto[2] + "   " + oLotto[3] + "   " + oLotto[4];
}


function hatosLotto() {
  var n1 = Math.floor(Math.random() * 45) + 1;
  var n2 = Math.floor(Math.random() * 45) + 1;
  var n3 = Math.floor(Math.random() * 45) + 1;
  var n4 = Math.floor(Math.random() * 45) + 1;
  var n5 = Math.floor(Math.random() * 45) + 1;
  var n6 = Math.floor(Math.random() * 45) + 1;
  return alert(n1 + " " + n2 + " " + n3 + " " + n4 + " " + n5 + " " + n6);
}

//hatosLotto();
