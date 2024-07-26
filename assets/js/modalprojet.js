// RPS
var modalRPS = document.getElementById("myModal_RPS");
var imgRPS = document.getElementById("rpsimg");
var modalImgRPS = document.getElementById("modaltarget_rpsimg");
var captionTextRPS = document.getElementById("captionR");
imgRPS.onclick = function () {
  modalRPS.style.display = "block";
  modalImgRPS.src = this.src;
  captionTextRPS.innerHTML = this.alt;
};
var spanRPS = document.getElementsByClassName("closeR")[0];
spanRPS.onclick = function () {
  modalRPS.style.display = "none";
};

// RPS2


var modalRPS = document.getElementById("myModal_RPS2");
var imgRPS = document.getElementById("rps2");
var modalImgRPS = document.getElementById("modaltarget_rpsimg2");
var captionTextRPS = document.getElementById("captionR2");
imgRPS.onclick = function () {
  modalRPS.style.display = "block";
  modalImgRPS.src = this.src;
  captionTextRPS.innerHTML = this.alt;
};
var spanRPS = document.getElementsByClassName("closeR2")[0];
spanRPS.onclick = function () {
  modalRPS.style.display = "none";
};

// Miniblog
var modalMB = document.getElementById("myModal_miniblog");
var imgMB = document.getElementById("miniblogimg");
var modalImgMB = document.getElementById("modaltarget_miniblog");
var captionTextMB = document.getElementById("caption");
imgMB.onclick = function () {
  modalMB.style.display = "block";
  modalImgMB.src = this.src;
  captionTextMB.innerHTML = this.alt;
};
var spanMB = document.getElementsByClassName("closeMB")[0];
spanMB.onclick = function () {
  modalMB.style.display = "none";
};

// login
var modalL = document.getElementById("myModal_login");
var imgL = document.getElementById("loginimg");
var modalImgL = document.getElementById("modaltarget_login");
var captionTextL = document.getElementById("caption");
imgL.onclick = function () {
  modalL.style.display = "block";
  modalImgL.src = this.src;
  captionTextL.innerHTML = this.alt;
};
var spanL = document.getElementsByClassName("closeL")[0];
spanL.onclick = function () {
  modalL.style.display = "none";
};


// puissance4
var modalP = document.getElementById("myModal_puissance4");
var imgP = document.getElementById("puissance4img");
var modalImgP = document.getElementById("modaltarget_puissance4");
var captionTextP = document.getElementById("caption");
imgP.onclick = function () {
  modalP.style.display = "block";
  modalImgP.src = this.src;
  captionTextP.innerHTML = this.alt;
};
var spanP = document.getElementsByClassName("closeP")[0];
spanP.onclick = function () {
  modalP.style.display = "none";
};

// dock
var modalMD = document.getElementById("myModal_menu");
var imgMD = document.getElementById("menuimg");
var modalImgMD = document.getElementById("modaltarget_menu");
var captionTextMD = document.getElementById("caption");
imgMD.onclick = function () {
  modalMD.style.display = "block";
  modalImgMD.src = this.src;
  captionTextMD.innerHTML = this.alt;
};
var spanMD = document.getElementsByClassName("closeMD")[0];
spanMD.onclick = function () {
  modalMD.style.display = "none";
};