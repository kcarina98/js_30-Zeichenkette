function clickme() {
  let first = document.querySelector("#zeichenkette").value;
  let second = document.querySelector("#trennen").value;
  let index = first.indexOf(second);

  // Cut für die erste Zeile
  let cut1 = first.substring(0, index);
  let cut2 = first.substring(0, index + 1);

  // Cut für die zweite Zeile
  let cutDavor = first.slice(index);
  let cutDanach = first.slice(index + 1);

  // -Variable für Output
  let output = document.querySelector(".output");

  // -Variablen für Radio Buttons
  let davor = document.querySelector("#davor").checked;
  let danach = document.querySelector("#danach").checked;

  if (davor === true) {
    output.innerHTML = `${cut1} <br> ${cutDavor}`;
  } else if (danach === true) {
    output.innerHTML = `${cut2} <br> ${cutDanach}`;
  } else {
    output.innerHTML = `Bitte wähle aus, ob vor oder nach "${second}" getrennt werden soll.`;
  }
}
