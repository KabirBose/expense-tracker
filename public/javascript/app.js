const expensesHeading = document.querySelector(".expenses-heading");
const expensesList = document.querySelector(".expenses-list");

// reach the api and get all expenses
const getExpenses = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/expenses");
    const { data } = await response.json();
    data.map((expense) => {
      expensesList.insertAdjacentHTML("beforebegin", `<p>${expense.name}</p>`);
    });
    // expensesList.insertAdjacentHTML('afterbegin', )
  } catch (error) {
    console.error(`Failed to reach server, ${err}`);
  }
};

if (expensesHeading) {
  expensesHeading.addEventListener("click", getExpenses);
}

// render expenses
