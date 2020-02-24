import { createElement } from "react";
import { ValueObject } from "tuplerone";

const keyFilter = ([key]) => !key.startsWith("_");
export const createValueElement = (type, props, ...children) => {
  const element = createElement(type, props, ...children);
  if (typeof type === "string") {
    return element;
  }
  return ValueObject(element, keyFilter);
};
