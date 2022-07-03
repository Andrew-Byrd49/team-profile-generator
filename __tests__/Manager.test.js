const Manager = require('../lib/Manager');

test('should create a manager object', () => {
    const manager = new Manager('John', 25, 'john@gmail.com', 16);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});