import { GitgraphCore } from "../gitgraph";
import { readFileSync } from "fs";
import { join } from "path";
function getImportData(name: string) {
  return JSON.parse(readFileSync(join(__dirname, `./${name}.json`), "utf-8"));
}

describe("aaaa", () => {
  it("dddd", () => {
    const data = getImportData("git2json-two-commits");
    const core = new GitgraphCore();
    const gitgraph = core.getUserApi();

    gitgraph.import(data);

    const { commits } = core.getRenderedData();
    expect(commits).toMatchObject([
      {
        subject: "first",
        x: 0,
        y: 80,
      },
      {
        subject: "second",
        x: 0,
        y: 0,
      },
    ]);
  });
});

// describe("Google", () => {
//   beforeAll(async () => {
//     await page.goto("https://google.com");
//   });
//
//   it('should be titled "Google"', async () => {
//     await expect(page.title()).resolves.toMatch("Google");
//   });
// });
//
// const timeout = 5000;
//
// describe("home", () => {
//   let page;
//   beforeAll(async () => {
//     page = await global.__BROWSER__.newPage();
//     await page.goto("https://google.com");
//   }, timeout);
//
//   afterAll(async () => {
//     await page.close();
//   });
//
//   it("should load without error", async () => {
//     const text = await page.evaluate(() => document.body.textContent);
//     expect(text).toContain("google");
//   });
// });
