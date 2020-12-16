import React from "react";
import { render } from "@testing-library/react";

import Desktop from "./desktop";
// eslint-disable-next-line
const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe(" Desktop", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Desktop links={[{ label: "Hello", href: "/world" }]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
