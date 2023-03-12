//eurojackpot
document.getElementById("ej").addEventListener("click", function() {
  document.getElementById("euroJP").innerHTML = euroJackpot();
});

function euroJackpot() {
  var n1 = 5;
  var n2 = 2;
  ej1 = [];
  ej2 = [];

  for (i = 0; i < n1; i++) {
    var a = Math.floor(Math.random() * 50) + 1;
    if (ej1.includes(a)) {
      n1++;
    } else {
      ej1.push(a);
    }
  }

  for (i = 0; i < n2; i++) {
    var b = Math.floor(Math.random() * 12) + 1;
    if (ej2.includes(b)) {
      n2++
    } else {
      ej2.push(b);
    }
  }
  console.log(ej1 + "\xa0" + ej2);
  return ej1[0] + "\xa0\xa0" + ej1[1] + "\xa0\xa0" + ej1[2] + "\xa0\xa0" + ej1[3] + "\xa0\xa0" + ej1[4] + "\xa0\xa0\xa0\xa0\xa0" + ej2[0] + "\xa0\xa0" + ej2[1];
}

//ötöslottó
document.getElementById("ol").addEventListener("click", function() {
  var otosL = document.getElementById("otosL");
  otosL.innerHTML = otosL.innerHTML.replace(otosL.innerHTML, otosLotto());
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
  return oLotto[0] + "\xa0\xa0" + oLotto[1] + "\xa0\xa0" + oLotto[2] + "\xa0\xa0" + oLotto[3] + "\xa0\xa0" + oLotto[4];
}

//hatoslottó
document.getElementById("hl").addEventListener("click", function() {
  document.getElementById("hatosL").innerHTML = hatosLotto();
});

function hatosLotto() {
  var n = 6;
  hatosL = [];

  for (i = 0; i < n; i++) {
    var a = Math.floor(Math.random() * 45) + 1;
    if (hatosL.includes(a)) {
      n++;
    } else {
      hatosL.push(a)
    }
  }
  console.log(hatosL);

  /*  function
    return () {
      for (i = 0; i < n; i++) {
        "hatosL[n] + "\
        xa0\ xa0 " + ";
      }
    }
    return return ();*/

  return hatosL[0] + "\xa0\xa0" + hatosL[1] + "\xa0\xa0" + hatosL[2] + "\xa0\xa0" + hatosL[3] + "\xa0\xa0" + hatosL[4] + "\xa0\xa0" + hatosL[5];
}
