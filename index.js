let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for (let i = annualExpenseQuestions.length - 1; i >= 0; i--) {
    annualExpenses += parseFloat(window.prompt(annualExpenseQuestions[i]))
} 

for (let i = monthlyExpenseQuestions.length - 1; i >= 0; i--) {
  monthlyExpenses += parseFloat(window.prompt(monthlyExpenseQuestions[i]))
}

for (let i = weeklyExpenseQuestions.length - 1; i >= 0; i--) {
    weeklyExpenses += parseFloat(window.prompt(weeklyExpenseQuestions[i]))
}