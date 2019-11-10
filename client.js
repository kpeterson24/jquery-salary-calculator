$( document ).ready(onReady);

function onReady() {
    $('#submit-button').on('click', putInputInArray );
    console.log( ' hiya' );
    showEmployees(employeeArray);    
}

// This array is for when we use the form and it will store here.
// const employeeArray = [{firstName, lastName, id, title, annualSalary}];
    let employeeArray = [];

//take input from the form
function putInputInArray(event) {
    console.log( 'submit button clicked');
    //preventing infitnite page refresh
    event.preventDefault();

    //define values
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let annualSalary = $('#annual-salary-input').val();
    let newEmployee = {firstName, lastName, id, title, annualSalary} ;
    console.log('my employee is:', employeeArray ) ;
    
    //push inputs into array
    employeeArray.push(newEmployee);
    console.log('employee array:', employeeArray );
    //call function to DOM 
    show(employeeArray);

// clear out our input values from the form
    $('#first-name-input').val('');
    $('#last-name-input').val('');
    $('#id-input').val('');
    $('#title-input').val('');
    $('#annual-salary-input').val('');
}
// show employees entered in the dom
function showEmployees(employeeList) {
    $('#movie-table').empty();
    for( let employee of employeeList ) {
        $('#movie-table').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${emloyee.lastName}</td>
            <td>${emloyee.id}</td>
            <td>${emloyee.title}</td>
            <td>${emloyee.annualSalary}</td>
            <td> <button class="delete">Delete</button> </td>
        </tr>
        `)
    }
}
