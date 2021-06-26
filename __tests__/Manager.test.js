const Manager = require("../lib/Manager");

test("getRole() should return \"Manager\"", () => {
    const role = "Manager";
    const manager = new Manager("cody", 1, "cody@mail.com");
    expect(manager.getRole()).toBe(role);
  });

  test('can get office number', () => {
    const officeNum = 1
    const manager = new Manager('cody', 1, 'cody@mail.com', officeNum)
    expect(manager.officeNumber).toBe(officeNum)
})