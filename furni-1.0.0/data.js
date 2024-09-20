// Datos de ejemplo para la tabla
const employees = [
    { name: 'Airi Satou', position: 'Accountant', office: 'Tokyo', age: 33, startDate: '2008/11/27' },
    { name: 'Angelica Ramos', position: 'Chief Executive Officer (CEO)', office: 'London', age: 47, startDate: '2009/10/08' },
    { name: 'Ashton Cox', position: 'Junior Technical Author', office: 'San Francisco', age: 66, startDate: '2009/01/11' },
    { name: 'Bradley Greer', position: 'Software Engineer', office: 'London', age: 41, startDate: '2012/10/12' },
    { name: 'Brenden Wagner', position: 'Software Engineer', office: 'San Francisco', age: 28, startDate: '2011/06/06' },
    { name: 'Brielle Williamson', position: 'Integration Specialist', office: 'New York', age: 61, startDate: '2012/12/01' },
    { name: 'Bruno Nash', position: 'Software Engineer', office: 'London', age: 38, startDate: '2011/05/02' },
    { name: 'Caesar Vance', position: 'Pre-Sales Support', office: 'New York', age: 21, startDate: '2011/12/11' },
    { name: 'Cara Stevens', position: 'Sales Assistant', office: 'New York', age: 46, startDate: '2011/12/05' },
    { name: 'Cedric Kelly', position: 'Senior Javascript Developer', office: 'Edinburgh', age: 22, startDate: '2012/03/29' }
];

// Función para poblar la tabla dinámicamente
function populateTable() {
    const tableBody = document.querySelector('#example tbody');
    employees.forEach(employee => {
        const row = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.position}</td>
                <td>${employee.office}</td>
                <td>${employee.age}</td>
                <td>${employee.startDate}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Inicializar DataTable cuando el documento esté listo
$(document).ready(function() {
    // Poblar la tabla antes de inicializar DataTables
    populateTable();

    // Inicializar DataTables
    $('#example').DataTable();
});