const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('name','id', 'email');

    expect(employee.name).toBe('name');
    expect(employee.id).toBe('id');
    expect(employee.email).toBe('email');
});

test("gets employee's name", () => {
    const employee = new Employee('name','id','email');
    employee.name = 'name';

    expect(employee.getName()).toBe('name');
});

test("gets employee's id", () => {
    const employee = new Employee('name','id','email');
    employee.id = 'id';

    expect(employee.getID()).toBe('id');
});

test("gets employee's email", () => {
    const employee = new Employee('name','id','email');
    employee.email = 'email';

    expect(employee.getEmail()).toBe('email');
});

test("gets employee's role", () => {
    const employee = new Employee('name','id','email');
    employee.role = 'role';

    expect(employee.getRole()).toBe('role');
});