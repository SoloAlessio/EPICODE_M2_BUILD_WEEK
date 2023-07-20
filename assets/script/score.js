window.onload = function () {
  let punteggio = document.getElementById("score");
  punteggio.innerHTML = sessionStorage.getItem("score") + " / " + "10";
};
