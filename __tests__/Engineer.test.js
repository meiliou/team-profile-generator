const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');

    console.log(engineer);

    expect(engineer.name).toBe('name');
    expect(engineer.id).toBe('id');
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});

test("gets engineer's role", () => {
    const engineer = new Engineer('name','id','email');
    engineer.role = 'role';

    expect(engineer.getRole()).toBe('role');
});

test("gets engineer's github", () => {
    const engineer = new Engineer('name', 'id', 'email', 'github');
    engineer.github = 'github';

    expect(engineer.getGithub()).toBe('github');
});
