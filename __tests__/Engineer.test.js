const Engineer = require('../lib/Engineer.js');

test('should create an engineer object', () => {
    const engineer = new Engineer('John', 25, 'john@gmail.com', 'john-doe');

    expect(engineer.gitHub).toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets role of employee', () => {
    const engineer = new Engineer('Nicole', 90, 'nicole.elisaw@gmail', 'nicolewallace09');

    expect(engineer.getRole()).toEqual("Engineer");
});