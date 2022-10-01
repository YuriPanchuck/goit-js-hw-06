const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", changeInput);

function changeInput(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}