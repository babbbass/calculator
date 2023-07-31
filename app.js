const buttons = document.querySelectorAll("button")
const screen = document.querySelector("#screen")
//console.log(buttons)
let displayTyping = []
let result

function calculate(button) {
  const value = button.textContent
  console.log(value)
  if (value === "CLEAR") {
    displayTyping = []
    screen.textContent = "0"
  } else if (value === "=") {
    result = eval(screen.textContent)
    screen.textContent = result
  } else if (value === "↤") {
    displayTyping.pop()
    screen.textContent = displayTyping.join("")
    if (screen.textContent === "") {
      screen.textContent = 0
    }
  } else {
    displayTyping.push(value)
    screen.textContent = displayTyping.join("")
  }
}

buttons.forEach((button) =>
  button.addEventListener("click", () => calculate(button))
)
