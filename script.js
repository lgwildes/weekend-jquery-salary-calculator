console.log('in script.js');

$(document).ready(onReady);

function onReady() {
    console.log('document is ready!');

    //adding click handler for submit button
    $('#employeeForm').on('submit', addEmployee);

    $('#employeeTable').on('click', '.deleteBtn', deleteEmployee)
}

let totalEmployees = [];
let monthlyCost = 0;

function addEmployee(evt) {
    //prevent page reload
    evt.preventDefault();
    //console.log('in addEmployee')
    let addedEmployee = {
        first: $('#firstNameInput').val(),
        last:$('#lastNameInput').val() ,
        id:$('#idNumberInput').val() ,
        job:$('#jobTitleInput').val() ,
        salary:$('#salaryInput').val() ,
    }
    //console.log('testing addedEmployee',addedEmployee)

    //add employee to totalEmployees global array 
    totalEmployees.push(addedEmployee);

    //ADD MATH
    let employeeMonthly = $('#salaryInput').val() / 12;

    monthlyCost += employeeMonthly
   
    $('#cost').text(`Monthly Costs: ${monthlyCost}`);

    if (monthlyCost >20000) {
        $('#cost').addClass('red');
    }
   
    //console.log('logging employee array',totalEmployees)

    //clear input fields
    $('.input').val('');
   
    render();
}

function render(); {
    //empty previous table so only to list each employee once on each render
    $('#employeeTable').empty();
    //loop through and add current array of employees
    for (employee of totalEmployees) {
        $('#employeeTable').append(`
            <tr>
                <td>${employee.first}</td>
                <td>${employee.last}</td>
                <td>${employee.id}</td>
                <td>${employee.job}</td>
                <td>${employee.salary}</td>
                <td>
                    <button class="deleteBtn button" id="deleteBtn">Delete</button>
                </td>
            </tr>
        `);
    }
}

function deleteEmployee() {
    $(this).parent().parent().remove();
}
