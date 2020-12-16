import React from "react";
import Navbar from "./navbar";
import { render } from "@testing-library/react";
// eslint-disable-next-line
const useRouter = jest.spyOn(require("next/router"), "useRouter");

useRouter.mockImplementation(() => ({
  push: jest.fn(),
}));

describe(" Navbar", () => {
  it("renders correctly", () => {
    const { baseElement } = render(
      <Navbar
        logo={<span>I am a logo</span>}
        links={[
          {
            label: "Product",
            href: "#product",
          },
          {
            label: "Features",
            href: "#features",
          },
          {
            label: "Team",
            href: "#team",
          },
          {
            label: "Documentation",
            href: "#",
          },
        ]}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
