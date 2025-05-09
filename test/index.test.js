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
    expect(res.body.message).toBe("What you looking for?");
  });

  it("should say Page not found!", async () => {
    const res = await supertest(app).get("/hidup-jokowi");

    expect(res.status).toBe(404);
    expect(res.body.message).toBe("Page not found!");
  });
});
