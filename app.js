const inputReason = document.getElementById("reason")
const inputAmount = document.getElementById("amount")
const btnCancel = document.getElementById("btn-cancel")
const btnConfirm = document.getElementById("btn-confirm")
const expensesList = document.getElementById("expenses-list")
const totalExpenses = document.getElementById("total-expenses")
const alertCtrl = document.querySelector("ion-alert")

let totalExpensesOutput = 0

const clear = () => {
  inputReason.value = ""
  inputAmount.value = ""
}

async function presentAlert() {
  const alert = document.createElement("ion-alert")
  alert.cssClass = "my-custom-class"
  alert.header = "Invalid inputs"
  //   alert.subHeader = "Subtitle"
  alert.message = "Please enter valid inputs"
  alert.buttons = ["OK"]

  document.body.appendChild(alert)
  await alert.present()

  const { role } = await alert.onDidDismiss()
  console.log("onDidDismiss resolved with role", role)
}

btnConfirm.addEventListener("click", () => {
  const enteredReason = inputReason.value
  const enteredAmount = inputAmount.value

  if (
    enteredReason.trim().length <= 0 ||
    enteredAmount <= 0 ||
    enteredAmount.trim().length <= 0
  ) {
    presentAlert()
    return
  }

  const newItem = document.createElement("ion-item")
  newItem.textContent = enteredReason + `: R ` + enteredAmount
  expensesList.appendChild(newItem)

  totalExpensesOutput += +enteredAmount
  totalExpenses.textContent = totalExpensesOutput

  clear()
  console.log(enteredReason, enteredAmount)
})

btnCancel.addEventListener("click", clear)
