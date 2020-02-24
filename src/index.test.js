import { createValueElement } from "../src";
import { shallow } from "tuplerone";
import { ValueObject } from "tuplerone";

describe("createValueElement", () => {
  it("works with props", () => {
    const el1 = createValueElement(Function, { z: { b: 1 } });
    const el2 = createValueElement(Function, { z: { b: 1 } });

    expect(el1).toBe(el2);
    expect(el1.props).toBe(el2.props);
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
