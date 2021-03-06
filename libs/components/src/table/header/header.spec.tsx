import { render } from "@testing-library/react";
import * as stories from "./header.stories";

describe("Header", () => {
  describe("Stories", () => {
    Object.entries(stories).forEach((s) => {
      if (s[0] !== "default") {
        it(s[0] + "should match snapshot", () => {
          const { baseElement } = render(s[1]());
          expect(baseElement).toMatchSnapshot();
        });
      }
    });
  });
});
