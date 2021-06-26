const Intern = require("../lib/Intern");

test("getRole() should return \"Intern\"", () => {
    const role = "Intern";
    const intern = new Intern("cody", 1, "cody@mail.com");
    expect(intern.getRole()).toBe(role);
  });

  test('can get school', () => {
    const school = 'UT'
    const intern = new Intern('cody', 1, 'cody@mail.com', school)
    expect(intern.schoolInfo).toBe(school)
})
