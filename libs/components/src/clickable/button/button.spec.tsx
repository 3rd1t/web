import { render } from "@testing-library/react";
import * as stories from "./button.stories";
import { generateTestCasesFromStories } from "@perfolio/util/stories/generate";

describe("Button", () => {
  describe("Stories", () => {
    const testCases = generateTestCasesFromStories(stories);

    testCases.forEach((s) => {
      it(s.name + "should match snapshot", () => {
        const { baseElement } = render(s.component());
        expect(baseElement).toMatchSnapshot();
      });
    });
  });
});
