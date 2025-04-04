import { db } from "../services/db";
import { projects, PROJECT } from "../services/schema";

describe("connectDB", () => {
  it("should successfully connect to the database", async () => {
    const selection = await db.select().from(projects);
    expect(Array.isArray(selection));
  });
});

describe("testSchema", () => {
  it("shoud attempt selecting a project", async () => {
    const query = await db
      .select({
        title: projects.title,
      })
      .from(projects);

    expect(query.length).toBe(3);
    expect(query[0].title).toBe("Pure");
  });
});
