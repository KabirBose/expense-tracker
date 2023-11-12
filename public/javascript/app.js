const expensesHeading = document.querySelector(".expenses-heading");
const expensesList = document.querySelector(".expenses-list");

// reach the api and get all expenses
const getExpenses = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/expenses");
    const { data } = await response.json();
    data.map((expense) => {
      const html = `
    <div class="expense">
        <div>
            <h3 class="expense-name">${expense.name}</h3>
            <h3 class="expense-description">${expense.description}</h3>
        </div>
        <h3 class="expense-price">$${expense.price}</h3>
    </div>
    `;
      expensesList.insertAdjacentHTML("beforebegin", html);
    });
  } catch (error) {
    console.error(`Failed to reach server, ${err}`);
  }
};

if (expensesHeading) {
  window.addEventListener("load", getExpenses);
}
