const User = require("../models/user.model");
const dbHandler = require("../tests/connect-test-database");

beforeAll(async () => await dbHandler.connect());
afterEach(async () => await dbHandler.clearDatabase());
afterAll(async () => await dbHandler.closeDatabase());

describe("User", () => {
  it("Allows the creation of a new user", async () => {
    let testUser = new User({
      userClass: "student",
      lastName: "Jones",
      firstName: "Duncan",
      password: "foo",
      email: "foo@foo.com",
    });
    let savedUser = await testUser.save();
    expect(savedUser.email).toEqual("foo@foo.com");
  });
});
