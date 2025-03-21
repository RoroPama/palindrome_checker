const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener("click", (e) => {
  const text = input.value.trim();

  if (!text) {
    alert("Please input a value");
    result.classList.add("hidden");

    return;
  }

  const textFiltered = text.toLowerCase().replace(/[^0-9a-z]/gi, "");

  const textReversed = textFiltered.split("").reverse().join("");

  if (textReversed === textFiltered) {
    result.innerText = `${text} is a palindrome`;

    result.style.backgroundColor = "#68d391";
  } else {
    result.innerText = `${text} is not a palindrome`;
    result.style.backgroundColor = "#fc8181";
  }

  result.classList.remove("hidden");
});
