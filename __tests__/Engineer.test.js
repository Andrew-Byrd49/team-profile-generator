const Engineer = require('../lib/Engineer.js');

test('should create an engineer object', () => {
    const engineer = new Engineer('John', 25, 'john@gmail.com', 'john-doe');

    expect(engineer.GitHub).toEqual(expect.any(String));
});

