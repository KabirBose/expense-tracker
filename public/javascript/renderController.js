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
            ${
              expense.description !== undefined
                ? `<h3 class="expense-description">${expense.description}</h3>`
                : `<h3></h3>`
            }
            <h3 class="expense-id">id: ${expense._id}</h3>
        </div>
        <h3 class="expense-price">$${expense.price}</h3>
        <button class="expense-delete-btn" data-id=${expense._id}>🗑️</button>
    </div>
    `;
      expensesList.insertAdjacentHTML("beforebegin", html);

      // add delete functionality to all expenses
      let cans = document.querySelectorAll(".expense-delete-btn");
      cans.forEach((can) => {
        let url = `http://localhost:3000/api/expenses/${can.getAttribute(
          "data-id"
        )}`;
        let options = {
          method: "DELETE",
        };
        can.addEventListener("click", () => {
          fetch(url, options).then((response) => window.location.reload());
        });
      });
    });
  } catch (error) {
    console.error(`Failed to reach server, ${err}`);
  }
};

if (expensesHeading) {
  window.addEventListener("load", getExpenses);
}
