const { TestWatcher } = require("@jest/core")
const Employee = require("../lib/Employee")

test('can create employee', () => {
    const employee = new Employee()
    expect(typeof(employee)).toBe('object')
})
test('can get name', () => {
    const name = 'cody'
    const employee = new Employee(name)
    expect(employee.name).toBe(name)
})
test('can get ID', () => {
    const ID = 1
    const employee = new Employee('cody', ID)
    expect(employee.id).toBe(ID)
})
test('can get email', () => {
    const email = 'cody@mail.com'
    const employee = new Employee('cody', 1, email)
    expect(employee.email).toBe(email)
})
test("getRole() should return \"Employee\"", () => {
    const role = "Employee";
    const employee = new Employee("cody", 1, "cody@mail.com");
    expect(employee.getRole()).toBe(role);
  });

