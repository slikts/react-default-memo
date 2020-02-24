import { createValueElement } from "../src";
import { shallow } from "tuplerone";

describe("createValueElement", () => {
  it("works with props", () => {
    const c = () => null;
    const el1 = createValueElement(c, { a: { b: 1 } });
    const el2 = createValueElement(c, { a: { b: 1 } });

    expect(el1).toBe(el2);
  });

  it("handles circular references", () => {
    const a = {};
    const b = { a };
    a.b = b;
    expect(() => createValueElement(() => null, a)).toThrow();
    const c = { a };
    c.a[shallow] = true;
    expect(() => createValueElement(() => null, c)).not.toThrow();
  });
});
