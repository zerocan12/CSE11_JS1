practical.js

let employees = [
    { id: 1, name: "Rahul", department: "IT", salary: 50000 },
    { id: 2, name: "Priya", department: "HR", salary: 40000 },
    { id: 3, name: "Aman", department: "IT", salary: 60000 },
    { id: 4, name: "Neha", department: "Finance", salary: 45000 }
];

function displayEmployees() {
    let output = "<h3>All Employees</h3>";

    employees.forEach(emp => {
        output += `${emp.id} - ${emp.name} - ${emp.department} - ₹${emp.salary}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function filterIT() {
    let filtered = employees.filter(emp => emp.department === "IT");

    let output = "<h3>IT Employees</h3>";

    filtered.forEach(emp => {
        output += `${emp.name} - ₹${emp.salary}<br>`;
    });

    document.getElementById("output").innerHTML = output;
}

function calculateSalary() {
    let total = employees.reduce((sum, emp) => sum + emp.salary, 0);

    document.getElementById("output").innerHTML =
        `<h3>Total Salary = ₹${total}</h3>`;
}