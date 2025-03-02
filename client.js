$( document ).ready(onReady);

function onReady() {
    $('#sub-btn').on('click', putInputInArray );
    console.log( ' hiya' );
    showEmployees(employeeArray); 
    
    //set-up click handler for delete button
    //need to forst select soemthing alreadsy on the dom -'#employee-table'
    $('#employee-table').on('click', '.delete', removeEmployee );
}

// This array is for when we use the form and it will store here.
    let employeeArray = [];
    let totalSalary = 0;
    let totalMonthly = 0;

//take input from the form
function putInputInArray(event) {
    console.log( 'submit button clicked');
    //preventing infitnite page refresh
    event.preventDefault();

    //define values
    let firstName = $("#first-name-input").val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    let newEmployee = {firstName, lastName, id, title, annualSalary};
    console.log(newEmployee);
    
    //push inputs into array
    employeeArray.push(newEmployee);
    console.log('employee array:', employeeArray );

// clear out our input values from the form
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');

    //call function to DOM 
    showEmployees(employeeArray);
    sumOfSalary(newEmployee.annualSalary);
}
// show employees entered in the dom
function showEmployees(employeeList) {
    $('#employee-table').empty();
    for( let employee of employeeList ) {
        $('#employee-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td> <button class="delete">Delete</button> </td>
        </tr>
        `)
    }
}

//remove delete button function
function removeEmployee() {
    console.log('removeEmployee');

    let button = $(this);
      console.log('button', button);
    button.closest('tr').remove();
}

//display total salary combine
function sumOfSalary(monthly){
    totalSalary += Number( monthly ) ;
    console.log( totalSalary );

    //total monthly
    totalMonthly = totalSalary / 12;

    let el = $('#total-salary');
    el.empty();
    el.append(totalMonthly);
}    