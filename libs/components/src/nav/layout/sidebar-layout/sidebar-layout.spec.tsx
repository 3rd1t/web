import { render } from "@testing-library/react";
import { generateTestCasesFromStories } from "@perfolio/util/stories/generate";
import * as stories from "./sidebar-layout.stories";

describe("SidebarLayout", () => {
  const testCases = generateTestCasesFromStories(stories);
  testCases.forEach((tc) => {
    it(tc.name + " should match snapshot", () => {
      const { baseElement } = render(tc.component());
      expect(baseElement).toMatchSnapshot();
    });
  });
});
