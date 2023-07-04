export function enterCustomSize() {
  let input = document.createElement("input");
  let customForm = document.getElementsByClassName("customForm");
  let closeButton = document.createElement("button");
  let p = document.createElement("p");
  closeButton.id = "closeBtn";
  closeButton.textContent = "x";
  let [formDiv] = customForm;
  let submitButton = document.createElement("button");
  p.textContent = "";
  submitButton.textContent = "add";
  submitButton.className = "submitBtn";
  formDiv.innerHTML = "";
  formDiv.append(closeButton, p, input, submitButton);
  input.placeholder = "enter custom size";

  closeButton.addEventListener("click", (e) => {
    e.preventDefault();
    formDiv.innerHTML = "";
  });
  submitButton.addEventListener("click", (e) => {
    let size = document.getElementById("sizes");
    let option = document.createElement("option");
    option.value = input.value;
    option.textContent = input.value;
    size.prepend(option);
    p.textContent =
      'you"ve added a custom size..now select it from the dropdown';
    input.value = "";
  });
}
