function clickme() {
  // Daten ausgeben
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

  // *wenn davor geklickt ist und das Zeichen vorkommt
  if (davor === true && first.includes(second)) {
    output.innerHTML = `${cut1} <br> ${cutDavor}`;
    // *wenn danach geklickt ist und das Zeichen vorkommt
  } else if (danach === true && first.includes(second)) {
    output.innerHTML = `${cut2} <br> ${cutDanach}`;
    // *wenn weder davor noch danach geklickt ist und das Zeichen vorkommt
  } else if (first.includes(second)) {
    output.innerHTML = `Bitte wähle aus, ob vor oder nach "${second}" getrennt werden soll.`;
    // *wenn das Zeichen nicht in der Zeichenkette vorkommt
  } else {
    output.innerHTML = "Dein Zeichen kommt nicht in der Zeichenkette vor!";
  }
}
