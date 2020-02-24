import { createValueElement } from "react-default-memo";

describe("createValueElement", () => {
  it("works", () => {
    const el1 = createValueElement("div", { a: { b: 1 } });
    const el2 = createValueElement("div", { a: { b: 1 } });

    expect(el1).toBe(el2);
  });
});
