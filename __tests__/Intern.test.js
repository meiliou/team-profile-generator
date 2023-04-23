const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('name', 'id', 'email', 'school');

    console.log(intern);

    expect(intern.name).toBe('name');
    expect(intern.id).toBe('id');
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
})

test("gets intern's role", () => {
    const intern = new Intern('name','id','email', 'school');
    intern.role = 'role';

    expect(intern.getRole()).toBe('role');
});
test("gets intern's school", () => {
    const intern = new Intern('name', 'id', 'email', 'school');
    intern.school = 'school';

    expect(intern.getSchool()).toBe('school');
})

