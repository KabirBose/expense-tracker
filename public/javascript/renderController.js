// elements from expenses.ejs
const expensesHeading = document.querySelector(".expenses-heading");
const expensesList = document.querySelector(".expenses-list");

const PROD_URL = "https://fantastic-kerchief-deer.cyclic.app/api/expenses";
const DEV_URL = "http://localhost:3000";

// create an asynchronous GET request to my api
const getExpenses = async () => {
  // wrapped in a try-catch block in case of errors
  try {
    // fetch the data and convert it into json
    const response = await fetch(PROD_URL);
    const { data } = await response.json();

    // map through the data and return the following html
    // uses a ternary operator to check if the description exists or not (does not render if does not exist)
    data.map((expense) => {
      // the html code to be rendered
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
      // inserts the html into the <div class="expenses-list"></div> from expenses.ejs
      expensesList.insertAdjacentHTML("beforebegin", html);

      // add delete functionality to all expenses
      let cans = document.querySelectorAll(".expense-delete-btn");
      // each delete button (can) in the html above can complete a delete request to the following API route given the id
      cans.forEach((can) => {
        let url = `${PROD_URL}/${can.getAttribute("data-id")}`;
        let options = {
          method: "DELETE",
        };

        // when any delete button (can) is clicked, the browser will create a fetch request and then reload the page
        can.addEventListener("click", () => {
          fetch(url, options).then((response) => window.location.reload());
        });
      });
    });
    // log the error if there is an error
  } catch (error) {
    console.error(`Failed to reach server, ${err}`);
  }
};

// if "expensesHeading" exists on the page, only then load the async fetch function
if (expensesHeading) {
  window.addEventListener("load", getExpenses);
}
