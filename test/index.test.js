const supertest = require("supertest");
const app = require("../src/app");

describe("Test all page", () => {
  it("should say Nice app!", async () => {
    const res = await supertest(app).get("/");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Nice app!");
  });

  it("should say what you looking for?", async () => {
    const res = await supertest(app).get("/about");

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("This is about route."); // merge conflict
  });

  it("should send users data", async () => {
    const res = await supertest(app).get("/users");

    const users = [
      { name: "Afiq", password: "12345" },
      { name: "Mamun", password: "qwerty" },
    ];

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Get all users.");
    expect(res.body.data).toStrictEqual(users);
  });

  it("should say Page not found!", async () => {
    const res = await supertest(app).get("/hidup-jokowi");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Page not found!");
  });
});
