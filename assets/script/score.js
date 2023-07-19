window.onload = function () {
  sessionStorage.getItem("score");
  let punteggio = document.getElementById("score");
  punteggio.innerHTML = sessionStorage.getItem("score");
};
