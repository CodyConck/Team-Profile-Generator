const Engineer = require("../lib/Engineer");

test("getRole() should return \"Engineer\"", () => {
    const role = "Engineer";
    const engineer = new Engineer("cody", 1, "cody@mail.com");
    expect(engineer.getRole()).toBe(role);
  });

  test('can get github name', () => {
    const username = 'codygit'
    const engineer = new Engineer('cody', 1, 'cody@mail.com', username)
    expect(engineer.gitHubUser).toBe(username)
})

