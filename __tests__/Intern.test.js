const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('John', 25, 'john@gmail.com', 'john-doe');

    expect(intern.school).toEqual(expect.any(String));
});