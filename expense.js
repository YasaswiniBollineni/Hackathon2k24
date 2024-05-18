document.addEventListener('DOMContentLoaded', function() {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    let totalExpenses = 0;

    expenseForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const amount = document.getElementById('amount').value;
        const category = document.getElementById('category').value;
        const date = document.getElementById('date').value;

        if (amount && category && date) {
            addExpense(amount, category, date);
            expenseForm.reset();
            totalExpenses++;
            updateTotalExpenses();
        } else {
            alert('Please fill in all fields.');
        }
    });

    function addExpense(amount, category, date) {
        const item = document.createElement('tr');
        item.innerHTML = `
            <td>${amount}</td>
            <td>${category}</td>
            <td>${date}</td>
            <td>
                <button class="delete-btn">Delete</button>
                <button class="edit-btn">Edit</button>
            </td>
        `;
        expenseList.appendChild(item);

        item.querySelector('.delete-btn').addEventListener('click', function() {
            item.remove();
            totalExpenses--;
            updateTotalExpenses();
        });

        item.querySelector('.edit-btn').addEventListener('click', function() {
            editExpense(item);
        });
    }

    function editExpense(item) {
        const cells = item.querySelectorAll('td');
        const amount = cells[0].textContent;
        const category = cells[1].textContent;
        const date = cells[2].textContent;

        const editForm = document.createElement('tr');
        editForm.innerHTML = `
            <td><input type="number" value="${amount}"></td>
            <td><input type="text" value="${category}"></td>
            <td><input type="date" value="${date}"></td>
            <td>
                <button class="save-btn">Save</button>
                <button class="cancel-btn">Cancel</button>
            </td>
        `;

        expenseList.replaceChild(editForm, item);

        editForm.querySelector('.save-btn').addEventListener('click', function() {
            const newAmount = editForm.querySelector('input[type="number"]').value;
            const newCategory = editForm.querySelector('input[type="text"]').value;
            const newDate = editForm.querySelector('input[type="date"]').value;

            if (newAmount && newCategory && newDate) {
                addExpense(newAmount, newCategory, newDate);
                editForm.remove();
                totalExpenses++;
                updateTotalExpenses();
            } else {
                alert('Please fill in all fields.');
            }
        });

        editForm.querySelector('.cancel-btn').addEventListener('click', function() {
            expenseList.replaceChild(item, editForm);
        });
    }

    function updateTotalExpenses() {
        document.getElementById('total-expenses').textContent = `Total Expenses: ${totalExpenses}`;
    }
});
