import React from "react";
import { render } from "@testing-library/react";
import { DocumentLink } from "./link";
jest.mock("next/router");

describe(" DocumentLink", () => {
  it("should render successfully", () => {
    const href = "/href";

    const { baseElement } = render(<DocumentLink label="LABEL" href={href} />);
    expect(baseElement).toBeTruthy();
  });
});
