import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";

import Mobile from "./mobile";

afterEach(cleanup);

describe(" Mobile", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <Mobile
        logo={<span>Logo</span>}
        links={[{ label: "Hello", href: "/world" }]}
      />
    );
    expect(baseElement).toBeTruthy();
  });

  describe("on mobile", () => {
    describe("when the user clicks on the hamburger icon", () => {
      it("opens the navbar menu", async () => {
        const { queryByTestId } = render(
          <Mobile
            logo={<span>Logo</span>}
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

        expect(queryByTestId("mobileNavbar")).toBeNull();

        fireEvent.click(queryByTestId("open"));
        expect(queryByTestId("mobileNavbar")).toBeTruthy();
      });
    });
  });
});
