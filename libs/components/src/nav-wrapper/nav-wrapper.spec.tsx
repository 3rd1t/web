import React from "react";
import { render } from "@testing-library/react";

import NavWrapper from "./nav-wrapper";

describe("NavWrapper", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <NavWrapper navbar={<nav></nav>} footer={<footer></footer>}>
        <span>h1</span>
      </NavWrapper>
    );
    expect(baseElement).toBeTruthy();
  });
});
