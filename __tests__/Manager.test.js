const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('name', 'id', 'email', 'number');

    console.log(manager);

    expect(manager.name).toBe('name');
    expect(manager.id).toBe('id');
    expect(manager.email).toBe('email');
    expect(manager.number).toBe('number');
});

test("gets manager's role", () => {
    const manager = new Manager('name','id','email');
    manager.role = 'role';

    expect(manager.getRole()).toBe('role');
});
