import React from "react";
import { render } from "@testing-library/react";

import Wordcloud from "./wordcloud";

describe("Wordcloud", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<Wordcloud words={["Lorem", "Ispum"]} />);
    expect(baseElement).toBeTruthy();
  });
});
