
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
var spanRPS = document.getElementsByClassName("closeR2")[0];
spanRPS.onclick = function () {
  modalRPS.style.display = "none";
};

// beebo1
var modalBB = document.getElementById("myModal_beeboworld1");
var imgBB = document.getElementById("beeboworldimg1");
var modalImgBB = document.getElementById("modaltarget_beeboworld1");
var captionTextBB = document.getElementById("captionBB");
imgBB.onclick = function () {
  modalBB.style.display = "block";
  modalImgBB.src = this.src;
  captionTextBB.innerHTML = this.alt;
};
var spanBB = document.getElementsByClassName("closeBB")[0];
spanBB.onclick = function () {
  modalBB.style.display = "none";
};


// beebo2
var modalB = document.getElementById("myModal_beeboworld2");
var imgB = document.getElementById("beeboworldimg2");
var modalImgB = document.getElementById("modaltarget_beeboworld2");
var captionTextB = document.getElementById("captionB");
imgB.onclick = function () {
  modalB.style.display = "block";
  modalImgB.src = this.src;
  captionTextB.innerHTML = this.alt;
};
var spanB = document.getElementsByClassName("closeB")[0];
spanB.onclick = function () {
  modalB.style.display = "none";
};

// Kenemi
var modalKN = document.getElementById("myModal_kenemi");
var imgKN = document.getElementById("kenemiimg");
var modalImgKN = document.getElementById("modaltarget_kenemi");
var captionTextKN = document.getElementById("captionKN");
imgKN.onclick = function () {
  modalKN.style.display = "block";
  modalImgKN.src = this.src;
  captionTextKN.innerHTML = this.alt;
};
var spanKN = document.getElementsByClassName("closeKN")[0];
spanKN.onclick = function () {
  modalKN.style.display = "none";
};

// Kenemi App
var modalKNAPP = document.getElementById("myModal_kenemiapp");
var imgKNAPP = document.getElementById("kenemiappimg");
var modalImgKNAPP = document.getElementById("modaltarget_kenemiapp");
imgKNAPP.onclick = function () {
  modalKNAPP.style.display = "block";
  modalImgKNAPP.src = this.src;
};
var spanKNAPP = document.getElementsByClassName("closeKNAPP")[0];
spanKNAPP.onclick = function () {
  modalKNAPP.style.display = "none";
};

// Webradio
var modalwebradio = document.getElementById("myModal_webradio");
var imgwebradio = document.getElementById("webradioimg");
var modalImgwebradio = document.getElementById("modaltarget_webradio");
imgwebradio.onclick = function () {
  modalwebradio.style.display = "block";
  modalImgwebradio.src = this.src;
};
var spanwebradio = document.getElementsByClassName("closewebradio")[0];
spanwebradio.onclick = function () {
  modalwebradio.style.display = "none";
};