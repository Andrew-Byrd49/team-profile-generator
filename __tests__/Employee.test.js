const Employee = require('../lib/Employee.js');

test('should create an employee object', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets employee role', () => {
    const employee = new Employee('John', 25, 'john@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
});