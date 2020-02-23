import { createValueElement } from "react-default-memo";

describe("createValueElement", () => {
  it("works", () => {
    const el = createValueElement("div", {});

    console.log(el);
  });
});
