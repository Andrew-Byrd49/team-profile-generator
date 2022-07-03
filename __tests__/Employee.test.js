const Employee = require('../lib/Employee.js');

test('should create an employee object', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.name).toBe('John');
    expect(employee.id).toBe(25);
    expect(employee.email).toBe('john@gmail.com');
});