import React from "react";
import { render } from "@testing-library/react";

import Wrapper from "./wrapper";
jest.mock("next/router", () => ({
  useRouter() {
    return {
      push: jest.fn(),
    };
  },
}));
describe("Wrapper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Wrapper i18n={{
        product: "Product",
        team: "Team",
        features: "Features",
        pricing: "Pricing"

      }}>
        <h1>Hello World</h1>
      </Wrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
