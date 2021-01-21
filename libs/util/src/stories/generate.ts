/**
 * Return all components from storybook.
 *
 * @example
 * import * as stories from "./<component>.stories"
 *
 * const testCases = generateTestCasesFromStories(stories)
 * testCases.forEach((s) => {
 *   it(s.name + "should match snapshot", () => {
 *     const { baseElement } = render(s.component())
 *     expect(baseElement).toMatchSnapshot()
 *   })
 * })
 *
 *
 * @param stories - import * as stories from "./<component>.stories"
 * @returns Name and render function for each component
 */
export function generateTestCasesFromStories(
  stories: Record<string, any>, // eslint-disable-line
): { name: string; component: () => HTMLElement }[] {
  return Object.entries(stories)
    .filter((s) => s[0] !== "default")
    .map((s) => {
      return {
        name: s[0],
        component: s[1],
      }
    })
}
